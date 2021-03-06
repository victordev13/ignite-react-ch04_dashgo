import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData &&
        <Box mr={4} textAlign="right">
          <Text>Victor Carvalho</Text>
          <Text color="gray.300" fontSize="small">victorcs.dev@gmail.com</Text>
        </Box>
      }
      <Avatar size="md" name="Victor Carvalho" src="https://github.com/victordev13.png" />
    </Flex>
  )
}
