import Head from 'next/head';
import axios from 'axios';
import ItemList from '../src/components/itemList/itemList';
import { useEffect, useState } from 'react';
import { Loader, Divider, Header } from 'semantic-ui-react';

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const url =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  const getData = async () => {
    const res = await axios.get(url);
    const result = setList(res.data);
    setLoading(false);
    return result;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Home | 개발 전용차선</title>
      </Head>
      {isLoading && (
        <div style={{ minHeight: '100vh', paddingTop: '20rem' }}>
          <Loader inline='centered' active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <Header as='h3' style={{ paddingTop: 18 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as='h3' style={{ paddingTop: 18 }}>
            전체 보기
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
    </>
  );
}
