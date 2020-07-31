import Button from 'components/button';
import Card from 'components/card';
import HomeTabs, { TABS } from 'components/home-tabs';
import Padding from 'components/padding';
import Page from 'components/page';
import Spacer from 'components/spacer';
import { useEffect, useState } from 'react';

export default function NewPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchNewPosts();
  }, []);

  async function fetchNewPosts() {
    try {
      const data = await fetch('/api/posts/new').then((res) => {
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
        <HomeTabs tab={TABS.NEW}></HomeTabs>
        <Spacer y={2} />
        <section>
          <div className="text-group">
            <h2>NEW</h2>
            <small>Recently Added ItsNots</small>
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
                      <article
                        dangerouslySetInnerHTML={{
                          __html: postItem.what_it_is,
                        }}
                      ></article>
                      <br />
                      <h4>What it's not?</h4>
                      <article
                        dangerouslySetInnerHTML={{
                          __html: postItem.what_it_is_not,
                        }}
                      ></article>
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
