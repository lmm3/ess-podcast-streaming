import React from "react";
import {
  Box,
  useBreakpointValue,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';

type Card = {
    title: string;
    image: string
}
let cardsPolitics:Card[] = []


async function getPolitics(){
    const response = await fetch('http://127.0.0.1:4000/podcasts/politics2');
    const data = await response.json();
    
    for(let i in data){
      let y:number = +i
  
      cardsPolitics[y] = data[i]
    }
    return(data)
}

getPolitics();



export default function Politicsseemore2(){

  return (
    <Heading>
          <Heading>Politics
            <SimpleGrid id="Grid" minChildWidth='120px' spacing='40px'>
              {cardsPolitics.map((card, index) => (
                <Heading id="cabecalho">  
                  <Box
                    id="CAIXA"
                    key={index}
                    height='calc(30vh)'
                    position="relative"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundImage={`url(${card.image})`}
                    >
                  </Box>
                </Heading>  
              ))}
            </SimpleGrid>
          </Heading>
    </Heading>
  );
}


