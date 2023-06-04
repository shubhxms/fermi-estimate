import React from 'react';
import { Center, Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem } from '@mantine/core';

type Props = {
  pid: number;
  name: string;
  desc: string;
  hints: string;
  points: number;
};

const PRIMARY_COL_HEIGHT = rem(300);

const PuzzlePage = (props: Props) => {
  const { pid, name, desc, hints, points } = props;
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <div>
      <Center>PuzzlePage</Center>

      <Container>
        <Center>
          {pid}
          <br />
          {name}
          <br />
          {points}
        </Center>
      </Container>

      <Container>
        <Center>
          {desc}
          <br />
          {hints}
        </Center>
      </Container>

      <Container>
        <Center>
            ans box
        </Center>
        <Center>
            calc
        </Center>
      </Container>

    </div>
  );
};

export default PuzzlePage;
