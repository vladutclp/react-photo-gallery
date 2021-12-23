import React from 'react';
import { connect } from 'react-redux';
import styles from './Cart.module.scss';
import CartItem from './CartItem';
const Cart = ({ cartItems }) => {
  console.log(cartItems);
  const getTotalCartPrice = (cartItems) => {
    let totalPrice = 0;
    cartItems.forEach(
      (cartItem) => (totalPrice += cartItem.qty * cartItem.price)
    );
    return totalPrice;
  };
  const getDisplayContent = (cartItems) => {
    if (cartItems.length === 0) {
      return (
        <p className={styles.cart__empty}>
          You have nothing in your shopping cart. Continue Shopping
        </p>
      );
    }

    return cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} cartItem={cartItem} />
    ));
  };
  return (
    <div className={styles.cart}>
      <div className={styles.cartWrapper}>
        <h1 className={styles.cart__heading}>Shopping cart</h1>
        {getDisplayContent(cartItems)}
        {cartItems.length > 0 && (
          <h2 className={styles.cart__totalPrice}>
            Subtotal
            <span className={styles.cart__totalPriceValue}>
              {getTotalCartPrice(cartItems)}$
            </span>
          </h2>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
