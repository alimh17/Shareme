import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Flex, HStack, Image, Text, useColorMode, useMediaQuery } from '@chakra-ui/react';
import { getAllUserRequest } from 'server/userRequest';
import config from 'config/index.json';
import isFollow from 'server/isFollow';
import { Link } from 'react-router-dom';

const { IMAGES_URL } = config;

const Sidebar: React.FC = (): JSX.Element => {
  const { colorMode } = useColorMode();
  const [users, setUsers] = useState<[]>([]);

  useEffect(() => {
    getAllUserRequest().then((data) => {
      setUsers(data?.users);
    });
  }, []);

  return (
    <Box
      sx={{
        bg: colorMode === 'dark' ? 'dark800' : 'white',
        p: '8',
        margin: '8px',
        borderRadius: '8px',
        flex: '3',
        position: 'sticky',
        h: 'max-content',
        top: '20',
        border: colorMode === 'light' ? '1px solid #eaeaea' : 'none',
        boxShadow: colorMode === 'light' ? 'md' : 'none',
      }}
      display={{ base: 'none', lg: 'flex' }}
      flex={{ base: '6', lg: '6' }}
    >
      <Flex
        sx={{
          flexFlow: 'column',
          gap: '5',
        }}
        w="100%"
      >
        {users?.map((user: any) => (
          <Flex key={user._id} p={2} alignItems="center" justifyContent="space-between">
            <Link to={`/${user.username}`}>
              <HStack>
                <Avatar src={IMAGES_URL + user.profile} size={{ base: 'sm', md: 'lg' }} />
                <Text fontWeight="bold">{user.username}</Text>
              </HStack>
            </Link>
            <Button variant="solid" colorScheme="blue" onClick={(e) => console.log(e.target)}>
              Follow
            </Button>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Sidebar;
