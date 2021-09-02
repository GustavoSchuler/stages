import React from "react";
import { Box, Loader, getTheme } from "styled-minimal";

const Child = ({ color = "yellow" }) => {
  const { colors } = getTheme();

  return (
    <Box
      alignItems="center"
      bg="transparent"
      border={`2px solid ${colors[color]}`}
      borderRadius="8px"
      display="flex"
      height={128}
      justifyContent="center"
    >
      <Loader color={colors[color]} size={48} />
    </Box>
  );
};

export default Child;
