import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 300px;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 1000;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

export const WishListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  gap: 10px;
  width: 100%;
  overflow-y: auto;
`;

export const EmptyWishlistMessage = styled.div`
  font-size: 12px;
  color: #666;
  text-align: center;
  width: 100%;
  margin-top: 20px;
  font-weight: 600;
`;
