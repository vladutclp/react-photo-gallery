import React from 'react';

const CartItem = ({cartItem}) => {
  return <div>{cartItem.label} x {cartItem.qty}</div>;
};

export default CartItem;
