import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeader = styled.div`
  padding: 20px 30px;
  position: fixed;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  top: 0;
  margin: auto;
  z-index: 1;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TransparentButton = styled.button`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  border: none;
  outline: none;
  font-size: 26px;
  color: red;
`;

export const ButtonWishListWrapper = styled.div`
  display: flex;
  align-items: center;
`;
