import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Detail from '../../src/components/detail/detail';
import { Loader } from 'semantic-ui-react';

const Item = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({});
  const [isLoading, setLoading] = useState(true);

  const url = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const getData = async () => {
    const res = await axios.get(url);
    const result = setItem(res.data);
    setLoading(false);
    return result;
  };
  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);
  return (
    <>
      {isLoading ? (
        <div style={{ minHeight: '100vh', paddingTop: '20rem' }}>
          <Loader inline='centered' active>
            Loading
          </Loader>
        </div>
      ) : (
        <Detail item={item} />
      )}
    </>
  );
};

export default Item;
