import Button from 'components/button';
import Card from 'components/card';
import HomeTabs, { TABS } from 'components/home-tabs';
import Padding from 'components/padding';
import Spacer from 'components/spacer';
import { useEffect, useState } from 'react';
import Page from 'components/page';

export default function HotPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchHotPosts();
  }, []);

  async function fetchHotPosts() {
    try {
      const data = await fetch('/api/posts/hot').then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      });

      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  }
  async function upvotePost(postId) {
    try {
      await fetch('/api/posts/upvote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: postId,
        }),
      }).then((res) => res.json());
    } catch (err) {
      console.error(err);
    }
  }

  async function downvotePost(postId) {
    try {
      await fetch('/api/posts/downvote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: postId,
        }),
      }).then((res) => res.json());
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Page>
        <HomeTabs tab={TABS.HOT}></HomeTabs>
        <Spacer y={2} />
        <section>
          <div className="text-group">
            <h2>HOT</h2>
            <small>Most upvoted ItsNots of all time</small>
          </div>

          <div>
            {posts.map((postItem) => {
              return (
                <>
                  <Spacer y={2} />
                  <Card>
                    <Padding all={1}>
                      <h3>{postItem.position}</h3>
                      <h4>What it is?</h4>
                      <article>{postItem.what_it_is}</article>
                      <br />
                      <h4>What it's not?</h4>
                      <article>{postItem.what_it_is_not}</article>
                      <Spacer y={1} />
                      <Button onClick={(e) => upvotePost(postItem.id)}>
                        {' '}
                        True{' '}
                      </Button>
                      <Spacer x={1} inline />
                      <Button
                        secondary
                        onClick={(e) => downvotePost(postItem.id)}
                      >
                        {' '}
                        Not True{' '}
                      </Button>
                    </Padding>
                  </Card>
                </>
              );
            })}
          </div>
        </section>
      </Page>
    </>
  );
}
