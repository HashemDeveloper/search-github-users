import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from '../images/preloader.gif';
import styled from 'styled-components';


const AuthWrapper = ({ children }) => {
    const { isLoading, error } = useAuth0();
    if (isLoading) {
        return (
            <ThemeWrapper>
                <img src={loadingGif} alt="spinner"/>
            </ThemeWrapper>
        )
    }
    if (error) {
        return (<ThemeWrapper>
            <h1>{error.message}</h1>
        </ThemeWrapper>)
    }
    return (<>{children}</>)
};

const ThemeWrapper = styled.section`
    min-height:100vh;
    display:grid;
    place-items:center;
    img {
        width:150px;
    }
`;

export default AuthWrapper;