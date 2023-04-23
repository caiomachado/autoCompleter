import { useState } from "react";
import { GitHubUser, Repository, getUserRepositories } from "../../api/github"
import { UserCard } from '../UserCard/UserCard';
import { Loader } from '../Loader/Loader'
import { Container } from "./style";

type ListProps = {
    users: GitHubUser[];
    currentPage: number;
    itemsPerPageCount: number;
    isDataLoading: boolean;
}

export type RepoStorage = {
    userId: number;
    repositories: Repository[];
}

export const List = ({ users, currentPage, itemsPerPageCount, isDataLoading }: ListProps) => {
    const [repos, setRepos] = useState<RepoStorage[]>([])

    const startIndex = (currentPage - 1) * itemsPerPageCount
    const currentShownUsers = users.slice(startIndex, startIndex + itemsPerPageCount);

    const handleFetchUserRepository = async (user: GitHubUser) => {
        const response = await getUserRepositories(user.login)
        setRepos((prevState) => {
            return ([...prevState, {
                userId: user.id,
                repositories: response
            }])
        })
    }

    if (isDataLoading) {
        return <Loader />
    }

    return (
        <Container>
            {currentShownUsers.map(user => {
                return (
                    <UserCard 
                        key={user.id} 
                        user={user} 
                        repos={repos} 
                        handleFetchRepo={handleFetchUserRepository} 
                    />
                )
            })}
        </Container>
    )
}