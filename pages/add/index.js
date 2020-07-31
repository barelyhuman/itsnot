import Button from 'components/button';
import HomeTabs, { TABS } from 'components/home-tabs';
import Input from 'components/input';
import Spacer from 'components/spacer';
import Textarea from 'components/textarea';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Page from 'components/page';

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
        <Textarea
          placeholder="What It is"
          onKeyUp={(e) => setWhatItIs(e.target.value)}
          resize="none"
          rows={10}
          cols={50}
        ></Textarea>
        <Spacer y={1}></Spacer>
        <Textarea
          placeholder="What Its not"
          onKeyUp={(e) => setWhatItsNot(e.target.value)}
          resize="none"
          rows={10}
          cols={50}
        ></Textarea>
        <Spacer y={1}></Spacer>
        <Button onClick={handleSubmit}>Submit</Button>
      </Page>
    </>
  );
}
