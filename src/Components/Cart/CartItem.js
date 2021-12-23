import React from 'react';
import styles from './CartItem.module.scss';
import { connect } from 'react-redux';
import {
  adjustQty,
  removeFromCart,
} from '../../store/Shopping/shopping-actions';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ removeFromCart, adjustQty, cartItem }) => {
  useEffect(() => {
    if (cartItem.qty < 1) {
      removeFromCart(cartItem.id);
      return null;
    }
  }, [cartItem]);
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__ImageWrapper}>
        <img
          className={styles.cartItem__Image}
          src={cartItem.url}
          alt="photo"
        />
        <p className={styles.cartItem__Label}>{cartItem.label}</p>
      </div>
      <div>
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
        <button onClick={() => removeFromCart(cartItem.id)} className={styles.cartItem__DeleteButton}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <p className={styles.cartItem__Price}>{cartItem.price * cartItem.qty}$</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (qty, id) => dispatch(adjustQty(qty, id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
