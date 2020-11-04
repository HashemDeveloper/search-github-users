import React, {useContext, useState, useEffect} from 'react';
import mockUser from '../data/mock/mockuserdata';
import mockFollowers from '../data/mock/MockUserFollowers';
import mockRepos from '../data/mock/mocUserRepos';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [githubRepos, setGithubRepos] = useState(mockRepos);
    const [githubFollowers, setGithubFollwers] = useState(mockFollowers);
    const [request, setRequest] = useState(0);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState({show:false, message:''});

    const checkRequest = () => {
        axios(`${rootUrl}/rate_limit`)
        .then(({data}) => {
            console.log(data);
           let {rate: {remaining}} = data;
           setRequest(remaining);
           if (remaining === 0) {
               toggleError(true, 'Sorry, you have exceeded hourly rate limit!');
           }
        }).catch(error => {
            console.log(error);
            setIsLoading(false);
        });
    };

    const toggleError = (show = false, message = '') => {
        setError({
            show:show,
            message:message
        });
    };

    const searchGithUser = async (user) => {
        setIsLoading(true);
        toggleError();
        const response = await axios(`${rootUrl}/users/${user}`)
        .catch(error => {
            console.log(error);
        });
        console.log(response);
        if (response) {
            setIsLoading(false);
            setGithubUser(response.data);
            console.log(response.data);
            const { repos_url, followers_url } = response.data;
            await Promise.allSettled([
                axios(`${repos_url}?per_page=100`),
                axios(`${followers_url}?per_page=100`)
            ]).then((res) => {
                const [repos, followers ] = res;
                const status = 'fulfilled';
                if (repos.status == status) {
                    setGithubRepos(repos.value.data);
                }
                if (followers.status == status) {
                    setGithubFollwers(followers.value.data);
                }
            }).catch(error => {
                console.log(error);
            });
        } else {
            toggleError(true, `${user} Does not exists!`);
        }
        checkRequest();
        setIsLoading(false);
    };

    useEffect(checkRequest, []);

    return (
    <AppContext.Provider
        value={{
            githubUser,
            githubRepos,
            githubFollowers,
            request,
            error,
            searchGithUser,
            loading,
        }}
    >
        {children}
    </AppContext.Provider>
    )
};
export const useGlobalContext = () => {
    return useContext(AppContext);
}
export {AppContext, AppProvider};
