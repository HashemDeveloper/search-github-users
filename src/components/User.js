import React from 'react';
import styled from 'styled-components';
import Card from './local/Card';
import Followers from './local/Followers';

const ThemeWrapper = styled.div`
padding-top:2rem;
display:grid;
gap: 3rem 2rem;
@media(min-width:992px) {
    grid-template-columns:1fr 1fr;
}
`;
const User = () => {
    return (
       <section className="section">
           <ThemeWrapper className="section-center">
               <Card/>
               <Followers/>
           </ThemeWrapper>
       </section>
    );
};

export default User;