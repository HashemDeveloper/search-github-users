import React from 'react';
import {Info, Navbar, User, Repos, Search} from '../components';
import { useGlobalContext } from '../utils/context';
import loadingImage from '../images/preloader.gif';

const Dashboard = () => {
    const { loading } = useGlobalContext();
    if (loading) {
       return (
        <main>
            <Navbar/>
            <Search/>
            <img src={loadingImage} className="loading-img" alt="loading"/>
    </main>
       )  
    } else {
        return (
            <main>
                <Navbar/>
                <Search/>
                <Info/>
                <User/>
                <Repos/>
            </main>
         )
    }
};

export default Dashboard;