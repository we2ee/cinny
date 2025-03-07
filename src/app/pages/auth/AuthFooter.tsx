import React from 'react';
import { Box, Text } from 'folds';
import * as css from './styles.css';

export function AuthFooter() {
  return (
    <Box className={css.AuthFooter} justifyContent="Center" gap="400" wrap="Wrap">
      <Text as="a" size="T300" href="https://we2.ee/about" target="_blank" rel="noreferrer">
        About
      </Text>
      <Text as="a" size="T300" href="https://we2.ee/terms" target="_blank" rel="noreferrer">
        Terms
      </Text>
      <Text as="a" size="T300" href="https://we2.ee/privacy" target="_blank" rel="noreferrer">
        Privacy Policy
      </Text>
      <Text as="a" size="T300" href="https://matrix.org" target="_blank" rel="noreferrer">
        Powered by Matrix
      </Text>
    </Box>
  );
}
