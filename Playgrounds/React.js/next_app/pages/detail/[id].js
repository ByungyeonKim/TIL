import Head from 'next/head';
import axios from 'axios';
import Detail from '../../src/components/detail/detail';

const Item = ({ item }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name='description' content={item.description}></meta>
          </Head>
          <Detail item={item} />
        </>
      )}
    </>
  );
};

export default Item;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const url = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(url);
  const result = res.data;

  return {
    props: {
      item: result,
    },
  };
}
