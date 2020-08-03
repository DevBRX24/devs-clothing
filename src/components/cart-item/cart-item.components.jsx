import React from 'react';
import { CartItemContainer, ImageContainer, CartDetailsContainer, DetailsContainer } from './cart-item.styles';
 
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt={name} />
    <CartDetailsContainer>
      <DetailsContainer>{name}</DetailsContainer>
      <DetailsContainer>
        {quantity} X ${price}
      </DetailsContainer>
    </CartDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
