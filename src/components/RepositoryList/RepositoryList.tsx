import { useState } from 'react'
import { ItemText } from '../ItemText/ItemText'
import { Box } from './style'
import { Repository } from '../../api/github'

type RepositoryListProps = {
  repositories: Repository[] | undefined
}

export const RepositoryList = ({ repositories }: RepositoryListProps) => {
  const [inputValue, setInputValue] = useState('')
  const filteredList = inputValue ? repositories?.filter(repo => repo.name.includes(inputValue)) : repositories

  return (
    <Box>
      <input 
        type='text' 
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)} 
        placeholder='Search for a repo'
      />

      {filteredList && filteredList.length > 0 ? (
        <ul>
          {filteredList?.map(repo => {
            return (
              <li key={repo.id}>
                <ItemText repoName={repo.name} query={inputValue} />
              </li>
            )
          })}
        </ul>
      ) : (
        <span>No repositories found.</span>
      )}
    </Box>
  )
}