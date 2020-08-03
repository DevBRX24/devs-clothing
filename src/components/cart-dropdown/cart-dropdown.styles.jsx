import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 20px;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  background-color: #f8f9f9;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartDropDownButton = styled(CustomButton)`
  margin-top: auto;
  margin-bottom: 0.7rem;
`;

export const MessageContainer = styled.span`
  margin: auto;
  font-size: 1.4rem;
  color: #85929e;
`;
