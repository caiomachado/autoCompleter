import { useState } from 'react'
import { Wrapper } from './style'
import { List } from './components/List/List'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

import { 
  getUsersByQuery,
  GitHubUser
} from './api/github'

type PageInfo = {
  totalAmountOfPages: number;
  currentPage: number;
  searchedQueryValue: string;
}

const PAGE_INITIAL_STATE = {
  totalAmountOfPages: 0,
  currentPage: 1,
  searchedQueryValue: ''
}

const ITEMS_PER_PAGE = 9

const App = () => {
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState<GitHubUser[]>([])
  const [pageInfo, setPageInfo] = useState<PageInfo>(PAGE_INITIAL_STATE)
  const [isDataLoading, setIsDataLoading] = useState(false)

  const getGithubUserInfo = async () => {
    setIsDataLoading(true)
    const data = await getUsersByQuery(query, PAGE_INITIAL_STATE.currentPage)
    setUsers(data.users)
    setPageInfo({
      totalAmountOfPages: Math.ceil(data.usersCount / 9),
      currentPage: 1,
      searchedQueryValue: query
    })
    setIsDataLoading(false)
    setQuery('')
  }

  const handleNextPage = async () => {
    setPageInfo(prevState => ({
      ...prevState,
      currentPage: prevState.currentPage + 1
    }))
    
    if ((users.length / ITEMS_PER_PAGE) === pageInfo.currentPage) {
      setIsDataLoading(true)
      const data = await getUsersByQuery(pageInfo.searchedQueryValue, pageInfo.currentPage + 1)
      setUsers((prevState) => {
        const modifiedArray = [...prevState, ...data.users]
        return modifiedArray
      })
      setIsDataLoading(false)
    }
  }

  const handlePreviousPage = async () => {
    setPageInfo(prevState => ({
      ...prevState,
      currentPage: prevState.currentPage - 1
    }))
  }

  return (
    <Wrapper>
      <h1>Search for users in GitHub</h1>
      <div className='search-box'>
        <input 
          type='text' 
          value={query} 
          onChange={e => setQuery(e.target.value)} 
        />
        <button onClick={getGithubUserInfo} type='button'>Search</button>
      </div>

      <div className='list-wrapper'>
        <List 
          users={users} 
          currentPage={pageInfo.currentPage}
          itemsPerPageCount={ITEMS_PER_PAGE}
          isDataLoading={isDataLoading}
        />
        <div className='pagination'>
          <button 
            className='icon-wrapper' 
            type='button' 
            onClick={handlePreviousPage} 
            disabled={pageInfo.currentPage === 1}
          >
            <GrFormPrevious size={20} className='icon' />
          </button>
          <span>{`${users.length > 0 ? pageInfo.currentPage : 0} of ${pageInfo.totalAmountOfPages}`}</span>
          <button 
            className='icon-wrapper' 
            type='button' 
            onClick={handleNextPage} 
            disabled={pageInfo.currentPage === pageInfo.totalAmountOfPages || users.length === 0}
          >
            <GrFormNext size={20} className='icon' />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

export default App