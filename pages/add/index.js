import Input from 'components/input';
import Button from 'components/button';
import { useState } from 'react';

export default function AddPost() {
  const [position, setPosition] = useState('');
  const [whatItIs, setWhatItIs] = useState('');
  const [whatItsNot, setWhatItsNot] = useState('');

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

      console.log(reponse);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Input
        placeholder="position"
        onKeyUp={(e) => setPosition(e.target.value)}
      ></Input>
      <Input
        placeholder="What It is"
        onKeyUp={(e) => setWhatItIs(e.target.value)}
      ></Input>
      <Input
        placeholder="What Its not"
        onKeyUp={(e) => setWhatItsNot(e.target.value)}
      ></Input>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
}
