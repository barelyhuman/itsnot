import Button from 'components/button';
import Editor from 'components/editor';
import HomeTabs, { TABS } from 'components/home-tabs';
import Input from 'components/input';
import Page from 'components/page';
import Spacer from 'components/spacer';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function AddPost() {
  const [position, setPosition] = useState('');
  const [whatItIs, setWhatItIs] = useState('');
  const [whatItsNot, setWhatItsNot] = useState('');

  const router = useRouter();

  async function handleSubmit() {
    try {
      const reponse = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          position,
          whatItIs,
          whatItsNot,
        }),
      });

      router.push('/');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Page>
        <HomeTabs tab={TABS.ADD}></HomeTabs>
        <Spacer y={2}></Spacer>
        <div className="text-group">
          <h2>ADD</h2>
          <small>Submit a new ItsNot</small>
        </div>

        <Spacer y={2}></Spacer>
        <Input
          placeholder="Job Position"
          onKeyUp={(e) => setPosition(e.target.value)}
        ></Input>
        <Spacer y={1}></Spacer>
        <Editor
          placeholder="What It is"
          onChange={(e) => setWhatItIs(e)}
        ></Editor>
        <Spacer y={1}></Spacer>
        <Editor
          placeholder="What It's not"
          onChange={(e) => setWhatItsNot(e)}
        ></Editor>
        <Spacer y={1}></Spacer>
        <Button onClick={handleSubmit}>Submit</Button>
      </Page>
    </>
  );
}
