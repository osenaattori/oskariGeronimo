import { VStack, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export default function App() {
  const navigate = useNavigate();
  const back = (
    <Button onClick={() => navigate('/')}>
      {' '}
      <Text fontFamily="fantasy" fontSize="13.5px" bgPos="bottom">
        KOTI
      </Text>{' '}
    </Button>
  );

  const [rssUrl, setRssUrl] = useState('');
  const [items, setItems] = useState([]);

  async function getRss(e) {
    e.preventDefault();
    const urlRegex =
      /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    if (!urlRegex.test(rssUrl)) {
      return;
    }

    const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
    const { contents } = await res.json();
    const feed = new window.DOMParser().parseFromString(contents, 'text/xml');
    const items = feed.querySelectorAll('item');
    const feedItems = [...items].map(el => ({
      link: el.querySelector('link').innerHTML,
      title: el.querySelector('title').innerHTML,
      author: el.querySelector('author').innerHTML,
    }));
    setItems(feedItems);
  }

  return (
    <>
      <VStack>
        <ColorModeSwitcher justifySelf="flex-end" />{' '}
        <Button>
          <Text color="red.400">Takaisin Etusivulle {back} </Text>
        </Button>
      </VStack>
      <VStack>
        <div
          className="App"
          p={140}
          bgPos="bottom"
          fontSize="2xl"
          fontFamily="monospace"
          textAlign="center"
        >
          <form onSubmit={getRss}>
            <div>
              <label> RSS Url</label>
              <br />
              <input onChange={e => setRssUrl(e.target.value)} value={rssUrl} />
            </div>
            <input type="submit" />
          </form>
          {items.map(item => {
            return (
              <div>
                <h1>{item.title}</h1>
                <p>{item.author}</p>
                <a href={item.link}>{item.link}</a>
              </div>
            );
          })}
        </div>
      </VStack>
    </>
  );
}
