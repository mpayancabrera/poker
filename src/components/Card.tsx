import React from 'react';
import styled, { css } from 'styled-components';

const StyledCard = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 5px;
`;

const OutDiv = styled.div<{ outline?: boolean; shadow: boolean; rounded: boolean }>`
  ${props =>
    props.outline &&
    props.shadow &&
    props.rounded &&
    css`
      flex-direction: row;
      justify-content: space-around;
    `}
`;

export const Card = () => {
  return (
    <StyledCard>
      <OutDiv outline shadow rounded>
        <div className='top'>
          <span>A</span>
          <span>&hearts;</span>
        </div>
        <h1>&hearts;</h1>
        <div className='bottom'>
          <span>&hearts;</span>
          <span>A</span>
        </div>
      </OutDiv>
    </StyledCard>
  );
};
