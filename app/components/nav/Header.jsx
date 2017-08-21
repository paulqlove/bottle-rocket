import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #43e895;
  color: #fff;
  font-family: Nunito;
  font-size: large;
`;

const Header = () => {
  return (
    <Wrapper>
      <header className="top">
        <h1>Lunch Tyme</h1>
      </header>
    </Wrapper>
  )
}
export default Header;
