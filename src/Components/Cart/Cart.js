import React from 'react';
import { connect } from 'react-redux';
import styles from './Cart.module.scss';
const Cart = ({ cartItems }) => {
  const getTotalCartItems = (cartItems) => {
    let totalCartItems = 0;
    console.log('from cartItems function');
    console.log(cartItems);
    cartItems.forEach((cartItem) => {
      console.log(cartItem);
      totalCartItems += cartItem.qty;
    });
    console.log(totalCartItems)
    return totalCartItems;
  };
  console.log('total cart items: ', getTotalCartItems(cartItems));
  return <div className={styles.cart}>{getTotalCartItems(cartItems)}</div>;
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
