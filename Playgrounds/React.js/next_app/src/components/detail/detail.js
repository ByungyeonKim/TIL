import { Divider, Button, Icon } from 'semantic-ui-react';
import styles from './detail.module.css';

const Detail = ({ item }) => {
  const { image_link, name, price, description } = item;
  return (
    <section className={styles.detail}>
      <img src={image_link} alt={name}></img>
      <div className={styles.info}>
        <strong className={styles.name}>{name}</strong>
        <Button animated='fade'>
          <Button.Content visible>구매하기</Button.Content>
          <Button.Content hidden>{`$${price}`}</Button.Content>
        </Button>
        <Button animated='vertical'>
          <Button.Content hidden>담기</Button.Content>
          <Button.Content visible>
            <Icon name='shop' />
          </Button.Content>
        </Button>
        <Divider />
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Detail;
