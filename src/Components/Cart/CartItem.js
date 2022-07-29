import React from 'react';
import styles from './CartItem.module.scss';
import { connect } from 'react-redux';
import {
  adjustQty,
  removeFromCart,
  increment,
  decrement
} from '../../store/Shopping/shopping-actions';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ removeFromCart, adjustQty, increment, decrement, cartItem }) => {
  useEffect(() => {
    if (cartItem.qty < 1) {
      removeFromCart(cartItem.id);
      return null;
    }
  }, [cartItem]); // o mare prostie ce fac eu aici
  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__Image}
        src={cartItem.url}
        alt="photo"
      />
      <div className={styles.cartItem__details}>
        <div className={`${styles.cartItem__actions} ${styles.cartItem__qtyActions}`}>
          <button>
            <FontAwesomeIcon icon={faMinus} onClick={() => {
              console.log('decrement button')
              console.log(cartItem.id)
              decrement(cartItem.id)
            }} />
          </button>
          <input
            onChange={(e) => {
              console.log('from onChangeHandler');
              console.log(e.target.value);
              adjustQty(cartItem.id, e.target.value);
            }}
            value={cartItem.qty}
            className={styles.cartItem__QtyInput}
            type="text"
          />
          <button onClick={() => {
            console.log('increment button')
            console.log(cartItem.id)
            increment(cartItem.id)
          }}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className={styles.cartItem__actions}>
          <p className={styles.cartItem__Price}>{cartItem.price * cartItem.qty}$</p>
          <button onClick={() => removeFromCart(cartItem.id)} className={styles.cartItem__DeleteButton}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (qty, id) => dispatch(adjustQty(qty, id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    increment: (id) => dispatch(increment(id)),
    decrement: (id) => dispatch(decrement(id))
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
