import {} from './index';
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
            Nettisivu, tehty Reactilla ja <Code> ChakraUi. </Code>
          </Text>
          <Link
            textShadow="dark-lg"
            fontFamily="monospace"
            color="green.700"
            href="https://oskari.vercel.app/"
            fontSize="32px"
          >
            Linkki nettisivuuni 😀
          </Link>

          <Box bg="blue.600" w={[100, 300, 300]}>
            <a href="https://www.youtube.com/watch?v=BrcugNqRwUs">:) </a>
          </Box>
        </VStack>
        <Button onClick={() => navigate('/video')}> Video React.js</Button>

        <VStack>
          <Button onClick={() => navigate('/news')}> Uutiset </Button>
        </VStack>
      </Grid>
    </Box>
  );
}

export default Main;
