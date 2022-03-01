import { Box, Text, Button, Heading, VStack, Grid } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';

function Video() {
  const navigate = useNavigate();

  const back = <Button onClick={() => navigate('/')}> Takasin</Button>;

  return (
    <Box bgPos="center" textAlign="center">
      <Grid minH="55px" p={2}>
        {' '}
      </Grid>

      <VStack spacing="100vh" p={5}>
        <Heading>Video</Heading>
      </VStack>

      <VStack spacing="100px" p={300}>
        <Text textAlign="center">Takaisin Etusivulle {back} </Text>
      </VStack>
    </Box>
  );
}

export default Video;
