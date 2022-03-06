import React from "react";
import styled from "styled-components";

const User = () => {
  return (
    <div>
      <UserContainer>
        <UserName>Pera</UserName>
      </UserContainer>
    </div>
  );
};

export default User;

const UserContainer = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const UserName = styled.h2`
  color: black;
`;
