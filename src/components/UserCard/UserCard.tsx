import { useState } from 'react'
import { Box } from "./style"
import { RepoStorage } from '../List/List'
import { RepositoryList } from '../RepositoryList/RepositoryList'
import { GitHubUser } from "../../api/github"

type UserCardProps = {
    user: GitHubUser;
    repos: RepoStorage[];
    handleFetchRepo: (user: GitHubUser) => void;
}

export const UserCard = ({ user, repos, handleFetchRepo }: UserCardProps) => {
    const [showRepositories, setShowRepositories] = useState(false)
    const foundRepo = repos.find(repoInfo => repoInfo.userId === user.id)

    const handleViewRepositories = () => {
        if (foundRepo) {
            setShowRepositories(!showRepositories)
            return
        }
        handleFetchRepo(user)
        setShowRepositories(true)
    }

    return (
        <Box>
            <div className={showRepositories ? 'user-info active' : 'user-info'}>
                <img src={user.avatar_url} alt={`${user.login} avatar`} />
                <span>{user.login}</span>
                <button type='button' onClick={handleViewRepositories}>
                    {showRepositories ? 'Hide Repos' : 'View Repos'}
                </button>
            </div>
            {showRepositories ? (
                <div className='repo-list'>
                    <RepositoryList repositories={foundRepo?.repositories} />
                </div>
            ) : null}
        </Box>
    )
}