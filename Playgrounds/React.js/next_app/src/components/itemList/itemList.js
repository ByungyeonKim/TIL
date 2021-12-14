import { Divider, Grid, Image } from 'semantic-ui-react';
import styles from './itemList.module.css';

const ItemList = ({ list }) => {
  return (
    <>
      <Grid columns='three'>
        <Grid.Row className={styles.item_row}>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <div className={styles.item_container}>
                <Image
                  src={item.image_link}
                  alt={item.name}
                  className={styles.item_img}
                />
                <h4 className={styles.item_name}>{item.name}</h4>
                <p>
                  {item.category
                    ? `${item.category} | ${item.product_type}`
                    : item.product_type}
                </p>
                <strong
                  className={styles.item_price}
                >{`$${item.price}`}</strong>
              </div>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </>
  );
};

export default ItemList;
