// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { Box, Loader, getTheme } from 'styled-minimal';
import { IChild } from './child.types';

const Child: React.FC<IChild> = ({
  color = 'yellow', duration = 2000, onLoaded
}: IChild) => {
  const { colors } = getTheme();
  const [bgColor, setBgColor] = useState('transparent');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBgColor(color);
      onLoaded();
    }, duration);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, duration]);

  return (
    <Box
      alignItems="center"
      bg={bgColor}
      border={`2px solid ${colors[color]}`}
      borderRadius="8px"
      display="flex"
      mb={3}
      height={128}
      justifyContent="center"
      data-testid="child__box"
    >
      <Loader color={colors[color]} size={48} data-testid="child__loader" />
    </Box>
  );
};

export default Child;
