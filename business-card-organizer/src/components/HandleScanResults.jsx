import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import AddToDefault from './AddToDefault';
import AddToEvent from './AddToEvent';

const StyledPage = styled.div.attrs( props => ({
  className: 'scanned-container',
}))`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;

  div {
    align-self: center;
    justify-content: center;
  }
`;

const StyledP = styled.p`
  align-self: center;
  justify-content: center;
`;

const HandleScanResults = ( props ) => {
  const { data } = props.location.state;

  // TODO data should be the url for an axios call that returns the scanned user's card object
  //   :  add card to chosen collection/event

  const card = {
    name:    '',
    email:   '',
    phone:   '',
    website: ''
  }

  return (
    <StyledPage className='scanned-container'>
      <Header user={ props.user } />
      <StyledP>{ data }</StyledP>
      <div>
        <AddToDefault user={ props.user } setCurrentUser={ props.setCurrentUser } history={ props.history } card= { card } />
        <AddToEvent user={ props.user } setCurrentUser={ props.setCurrentUser } history={ props.history } card= { card } />
      </div>
    </StyledPage>
  );
}

export default HandleScanResults;