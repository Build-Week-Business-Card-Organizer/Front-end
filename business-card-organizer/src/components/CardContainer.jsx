import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Card from './Card';
import Header from './Header';


const StyledPage = styled.div.attrs( props => ({
  className: 'page',
}))`
  width: 100vw;
  height: 100vh;
  display: flex;
  color: #59667A;
  background-color: #E7E3D6;
  flex-direction: column;
  justify-content: center;

  .controls {
    height: 2rem;
    display: flex;
    align-self: center
    text-decoration: none;
    margin-bottom: 2rem;

    a { text-decoration: none; }

    h3 {
      align-self: center
      margin: 0.3rem;
      padding: 1rem;
      color: #59667A;
      cursor: pointer;
      border-radius: 0.8rem;

      &:hover { box-shadow: 0 0 12px rgba( 118, 158, 188, 0.5); }
    }
  }
`;

const CardContainer = ( props ) => {

  const Delete = () => {
    const modifiedUser = { ...props.user };
    modifiedUser.card = {};
    props.setCurrentUser( modifiedUser );
    props.history.push( '/edit-card' );
  };

  return (
    <StyledPage className='page'>
      <Header user={ props.user } />
      <div className='controls'>
        <NavLink to='/edit-card'><h3>Edit</h3></NavLink><div className='delete' onClick={ Delete }><h3>Delete</h3></div>
      </div>
      <Card user={ props.user } card={ props.card } setCurrentUser={ props.setCurrentUser } />
    </StyledPage>
  );
};

export default CardContainer;
