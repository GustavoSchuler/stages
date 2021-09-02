import React from 'react';
import { Box, Loader, getTheme } from 'styled-minimal';
import { steps } from '../../data.json';

const Child = ({ key = 'first' }) => {
  const { colors } = getTheme();

  const getStep = () => steps.filter((step) => step.key === key)[0]

  const getColor = () => {
    const step = getStep();

    return step ? colors[step.value] : '';
  };

  return (
    <Box
      alignItems="center"
      bg="transparent"
      border={`2px solid ${getColor()}`}
      borderRadius="8px"
      display="flex"
      height={128}
      justifyContent="center"
    >
      <Loader color={getColor()} size={48} />
    </Box>
  );
};

export default Child;
