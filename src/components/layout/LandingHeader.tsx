import React from 'react';
import styled from '@emotion/styled';
import { Header } from 'semantic-ui-react';

import { LandingWave } from '../SVG';
import { mq } from '../layout';

interface LayoutProps {
  total: number;
}

export const LandingHeader = ({ total }: LayoutProps) => {
  return (
    <>
      <HeaderWrapper>
        <LandingWave />
        <HeaderTite>
          All front-end tools and resources in one place.
        </HeaderTite>
        <HeaderSubTite>
          Compare real numbers and choose the right tools for your next project.
        </HeaderSubTite>
        <PositionHelper />
      </HeaderWrapper>
      <Header textAlign="center" size="large" style={{marginBottom: '100px'}}>
        {total} best front-end tools and resources to choose from!
      </Header>
    </>
  );
};

const HeaderWrapper = styled.div`
  height: 75vh;
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderTite = styled.div`
  font-weight: 700;
  color: white;
  line-height: 100%;
  margin-bottom: 20px;
  ${mq({
    fontSize: ['5vw', '5vw', '5vw', '5vw', '3.2vw'],
    width: ['100%', '100%', '100%', '100%', '50%'],
  })}
`;
const HeaderSubTite = styled.div`
  font-weight: 300;
  color: white;
  line-height: 120%;
  ${mq({
    fontSize: ['3vw', '3vw', '3vw', '3vw', '1.4vw'],
    width: ['100%', '100%', '100%', '100%', '50%'],
  })}
`;

const PositionHelper = styled.div`
  height: 20vh;
`;
