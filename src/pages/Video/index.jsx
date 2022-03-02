import { Box, Text, Button, Heading, VStack, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { useNavigate } from 'react-router-dom';

function Video() {
  const navigate = useNavigate();

  const back = <Button onClick={() => navigate('/')}> Takasin</Button>;

  return (
    <Box bgPos="center">
      <Grid minH="55px" p={2}></Grid>

      <VStack spacing="40px" p={1}>
        <ColorModeSwitcher justifySelf="flex-end" />{' '}
        <Heading>Koodaus Videoita</Heading>
        <iframe
          width="460"
          height="315"
          src="https://www.youtube.com/embed/b0IZo2Aho9Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Text textAlign="center">Takaisin Etusivulle {back} </Text>
      </VStack>
    </Box>
  );
}

export default Video;
