import React from "react";
import { Container, Heading } from "styled-minimal";
import "./styles.css";

import Child from "./Child";

export default function Parent() {
  return (
    <Container>
      <Heading mb={4} textAlign="center">
        Stages
      </Heading>
      <Child color="blue"/>
    </Container>
  );
}
