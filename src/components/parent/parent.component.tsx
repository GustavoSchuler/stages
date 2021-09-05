import React, { useState } from 'react';
import { Container, Heading } from 'styled-minimal';
import data from '../../service';
import './parent.styles.css';

import Child from '../child/child.component';

const Parent: React.FC = () => {
  const { steps, durations } = data;
  const [loaded, setLoaded] = useState(0);
  const [timer, setTimer] = useState(0);

  return (
    <Container data-testid="parent">
      <Heading mb={4} textAlign="center">
        Stages
      </Heading>
      {
        steps.map((step, index) => (
          loaded > index-1 ?
          <Child
            key={index}
            color={step.value}
            duration={durations[step.key]}
            onLoaded={() => {
              setLoaded(index+1);
              setTimer(timer+durations[step.key]);
            }}
          />
          : null
        ))
      }
      {
        loaded === steps.length ?
        `Total time: ${timer/1000} seconds.`
        : null
      }
    </Container>
  );
};

export default Parent;
