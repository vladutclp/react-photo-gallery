import React from 'react';

const ShopItem = (props) => {
    return(
        <div>
            <img src={props.image} alt="" />
            <div>{props.label}</div>
            <div>{props.price}</div>
        </div>
    )
}