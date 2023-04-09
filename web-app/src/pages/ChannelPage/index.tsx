import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import pfp from "../../styles/assets/nopfp.png";

interface IUser {
  email: string;
  username: string;
  password: string;
  createdAt: string;
  followers: string[];
  following: string[];
  history: string[];
}

interface IPodcast {
  name: string;
  link: string;
  subject: string;
  image: string;
}

export default function ChannelPage() {
  const { username } = useParams();
  const [userData, setUserData] = useState<IUser>({
    email: "",
    username: "",
    password: "",
    createdAt: "",
    followers: [],
    following: [],
    history: [],
  });
  const [userPodcasts, setUserPodcasts] = useState<IPodcast[]>();
  const [loggedUser, setLoggedUser] = useState("");
  const [loading, setLoading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  //variavel para saber se o usuario logado ja segue o usuario da página
  const [doIFollow, setDoIFollow] = useState(false);

  //função para pegar dados do usuario logado no sistema do localStorage do navegador
  useEffect(() => {
    const getUserData = async () => {
      const { data } = await (
        await fetch(`http://localhost:4000/getUser/${username}`)
      ).json();
      setUserData(data.userData);
      setUserPodcasts(data.podcasts);
    };

    const user = localStorage.getItem("user");
    setLoggedUser(user ? user : "");

    if (!loading) getUserData();
  }, [username, loading]);

  //checa se o usuario segue
  useEffect(() => {
    setDoIFollow(userData.followers.includes(loggedUser));
  }, [loggedUser, userData.followers]);

  return (
    <Box bgColor="#1E1E1E" h="90vh">
      <Flex
        alignItems="flex-end"
        bgColor="#30332D"
        h="300px"
        w="100vw"
        padding="50px"
      >
        <Flex>
          <Image src={pfp} alt="pfp" w="124px" />
          <Flex
            flexDir="column"
            color="white"
            marginLeft="25px"
            alignItems="flex-start"
            justifyContent="space-evenly"
          >
            <Heading>{userData.username}</Heading>
            <Text fontSize="20px">{userData.followers.length} seguidores</Text>
            {!doIFollow && (
              <Button
                isLoading={loading}
                color="#1E1E1E"
                bgColor="#ABEFED"
                borderRadius="25px"
                w="132px"
              >
                UPLOAD
              </Button>
            )}
            {doIFollow && (
              <Button
                isLoading={loading}
                color="#1E1E1E"
                bgColor="#ABEFED"
                borderRadius="25px"
                w="132px"
                onClick={onOpen}
              >
                SEGUINDO
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDir="row" h="400px" w="100vw" padding="50px">
        {userPodcasts?.map((podcast) => (
          <Flex
            flexDir="column"
            color="white"
            w="fit-content"
            margin="0 25px"
            alignItems="flex-start"
            justifyContent="space-evenly"
          >
            <Image
              src={podcast.image}
              alt="podcast image"
              boxSize="200px"
              minHeight="200px"
              objectFit="cover"
              borderRadius="10px"
            />
            <Heading marginTop="10px" fontSize="20px">
              {podcast.name}
            </Heading>
            <Text>{podcast.subject}</Text>
            <Link href={podcast.link}>Ver podcast</Link>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}