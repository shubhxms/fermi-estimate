import { signIn, useSession } from 'next-auth/react';
import { Button } from '@mantine/core';
import { Old_Standard_TT } from 'next/font/google';
import LevelList from '../components/LevelList';
import ProfileHeader from '../components/ProfileHeader';
import PuzzlePage from '../components/PuzzlePage';

const old_stanford_tt = Old_Standard_TT({ weight: '700', subsets: ['latin'] });

export default function HomePage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <main className={old_stanford_tt.className}>
        <ProfileHeader name="shubham" avatar="" />
        {/* <LevelList
          levels={[
            { pno: 1, pid: 1, isSolved: true },
            { pno: 2, pid: 2, isSolved: false },
            { pno: 3, pid: 3, isSolved: true },
          ]}
        /> */}
        <PuzzlePage {...{ pid: 1, name: 'name', desc: 'desc', hints: 'hint', points: 20 }} />
      </main>
    );
  }
  return (
    <Button type="button" onClick={signIn}>
      sign in
    </Button>
  );
}
