import React from 'react';
import { Container, Heading } from 'styled-minimal';
import './parent.styles.css';

import Child from '../child/child.component';

export default function Parent() {
  return (
    <Container>
      <Heading mb={4} textAlign="center">
        Stages
      </Heading>
      <Child />
    </Container>
  );
}
