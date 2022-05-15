import React, { ReactNode } from 'react';
import { Background } from './comps/Background';
import { Bar } from './comps/Bar';
import { Wrapper } from './comps/Wrapper';

export interface ChildrenProps {
  children?: ReactNode
}

function App() {
  return (
    <div className='w-full h-full'>
    <Background>
      <Wrapper>
        <Bar/>
      </Wrapper>
    </Background>
    </div>
  );
}

export default App;
