import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, Button } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <Box
      bgPos="top-eft"
      bgImage="https://c.tenor.com/g01carZ_O74AAAAM/indian-man-rolls-eyes-funny-gorilla.gif"
      textAlign="center"
      fontSize="x0.5"
      bgRepeat="no-repeat"
      bgSize="100px"
    >
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Text>
            Hieno Geronimo nettisivu, tehty Reactilla ja{' '}
            <Code> ChakraUi. </Code>
          </Text>
          <Link
            fontFamily="monospace"
            color="green.700"
            href="https://oskari.vercel.app/"
          >
            Linkki nettisivuuni 😀
          </Link>
        </VStack>
        <Button onClick={() => navigate('/video')}> lol</Button>
      </Grid>
    </Box>
  );
}

export default Main;
