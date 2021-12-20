import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Detail from '../../src/components/detail/detail';

const Item = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({});

  const url = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const getData = async () => {
    const res = await axios.get(url);
    const result = setItem(res.data);
    return result;
  };
  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);
  return <Detail item={item} />;
};

export default Item;
