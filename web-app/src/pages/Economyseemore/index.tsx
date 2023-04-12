import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';

type Card = {
  title: string;
  image: string
}
let cardsEconomy:Card[] = []


async function getEconomy(){
  const response = await fetch('http://127.0.0.1:4000/podcasts/economy');
  const data = await response.json();

  for(let i in data){
    let y:number = +i

    cardsEconomy[y] = data[i]
  }
  return(data)
}

getEconomy();

  
export default function Economyseemore(){
    
  return(
    <Heading>
          <Heading>Economy
            <SimpleGrid minChildWidth='120px' spacing='40px'>
              {cardsEconomy.map((card, index) => (
                <Box
                  key={index}
                  height='calc(30vh)'
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${card.image})`}
                  >
                </Box>
              ))}
            </SimpleGrid>
          </Heading>
    </Heading>
  );
}