import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { stringify } from 'querystring';
//import { Link } from 'react-router-dom';

type Card = {
    title: string;
    image: string
}
let cardsPolitics:Card[] = []


async function getPolitics(){
    const response = await fetch('http://127.0.0.1:4000/podcasts/politics');
    const data = await response.json();
    
    for(let i in data){
      let y:number = +i
  
      cardsPolitics[y] = data[i]
    }
    return(data)
}

getPolitics();



export default function Politicsseemore(){
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);
  
    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });

  return (
    <Heading>
          <Heading>Politics
            <SimpleGrid minChildWidth='120px' spacing='40px'>
              {cardsPolitics.map((card, index) => (
                <Box
                  key={index}
                  height='calc(30vh)'
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${card.image})`}
                  >
                  {/* This is the block you need to change, to customize the caption */}
                  <Container size="container.lg" height="600px" position="relative">
                    <Stack
                      spacing={6}
                      w={'full'}
                      maxW={'lg'}
                      position="absolute"
                      top="50%"
                      transform="translate(0, -50%)">
                      <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        {card.title}
                      </Heading>
                    </Stack>
                  </Container>
                </Box>
              ))}
            </SimpleGrid>
          </Heading>
    </Heading>
  );
}