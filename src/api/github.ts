import axios from 'axios';

export interface GitHubUser {
    avatar_url: string;
    created_at: Date | string;
    email: string;
    id: number;
    login: string;
    name: string;
    public_repos: number;
    type: string;
    updated_at: Date | string;
    url: string;
}

export interface Repository {
    created_at: Date | string;
    full_name: string;
    id: number;
    name: string;
    private: boolean;
    url: string;
}

interface GetByQueryResponse {
    usersCount: number;
    users: GitHubUser[];
}

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/'
});

export const getUserRepositories = async (username: string): Promise<Repository[]> => {
    const { data } = await githubApi.get(`users/${username}/repos`)
    const repositories = data.map((repo: Repository) => {
        return {
            created_at: repo.created_at,
            full_name: repo.full_name,
            id: repo.id,
            name: repo.name,
            private: repo.private,
            url: repo.url
        } as Repository
    })
    
    return repositories
}

export const getUsersByQuery = async (query: string, page: number): Promise<GetByQueryResponse> => {
    const { data } = await githubApi.get(`search/users?q=${query}&page=${page}&per_page=9`)
    const users = data.items.map((user: GitHubUser) => {
        return {
            avatar_url: user.avatar_url,
            created_at: user.created_at,
            email: user.email,
            id: user.id,
            login: user.login,
            name: user.name,
            public_repos: user.public_repos,
            type: user.type,
            updated_at: user.updated_at,
            url: user.url
        } as GitHubUser
    })
    
    return {
        usersCount: data.total_count,
        users: users
    }
}