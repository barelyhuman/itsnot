import Button from 'components/button';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const TABS = {
  HOT: 0,
  NEW: 1,
};

export default function Home() {
  const [tab, setTab] = useState(TABS.HOT);
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

  return (
    <>
      {/* Tab Selectors */}
      <Button onClick={(e) => setTab(TABS.HOT)}>Hot</Button>
      <Button onClick={(e) => setTab(TABS.NEW)}>New</Button>

      <Link href="/add">
        <a href="">
          <Button>Add</Button>
        </a>
      </Link>

      {/* Tab Content */}
      <main>
        {tab === TABS.HOT ? (
          <section>
            HOT
            <div>
              {posts.map((postItem) => {
                return <p>{postItem.position}</p>;
              })}
            </div>
          </section>
        ) : null}
        {tab === TABS.NEW ? (
          <section>
            NEW
            <div>
              {posts.map((postItem) => {
                return <p>{postItem.position}</p>;
              })}
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
