import React from 'react';
import { signOut } from 'next-auth/react';
import {
  createStyles,
  Avatar,
  Text,
  Group,
  ActionIcon,
  Button,
  Container,
  Center,
} from '@mantine/core';
import { IconSoccerField, IconLogout } from '@tabler/icons-react';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface UserProfileProps {
  avatar: string;
  name: string;
}

const ProfileHeader = ({ avatar, name }: UserProfileProps) => {
  const { classes } = useStyles();

  return (
    <Center>
      <Group noWrap mt="xl" mb="xl">
        <Avatar src={avatar} size={94} radius="md" />
        <Container>
          <Container mx="auto">
            <Text fz="xl" fw={500} className={classes.name}>
              {name}
            </Text>
          </Container>

          <Container mx="auto">
            <Button.Group orientation="horizontal">
              <ColorSchemeToggle />
              <ActionIcon
                size="xl"
                ml="4px"
                mr="4px"
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                  color:
                    theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
                })}
              >
                <IconSoccerField />
              </ActionIcon>
              <ActionIcon
                onClick={() => signOut()}
                size="xl"
                ml="4px"
                mr="4px"
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                  color:
                    theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
                })}
              >
                <IconLogout />
              </ActionIcon>
            </Button.Group>
          </Container>
        </Container>
      </Group>
    </Center>
  );
};

export default ProfileHeader;
