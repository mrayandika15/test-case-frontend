// WishListModal.tsx
import React from 'react';
import styled from 'styled-components';
import { Planet } from 'types/planets';
import {
  CloseButton,
  EmptyWishlistMessage,
  SidebarContainer,
  WishListItemWrapper
} from './wishlist-modal.style';
import { Card } from 'components';

interface WishListModalProps {
  wishlist: Planet[];
  onClose: () => void;
  isOpen: boolean;
  onRemoveItem: (planet: Planet) => void;
}

const WishListModal: React.FC<WishListModalProps> = ({
  wishlist,
  onClose,
  isOpen,
  onRemoveItem
}) => {
  if (isOpen)
    return (
      <SidebarContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Wishlist</h2>
        <WishListItemWrapper>
          {wishlist?.length > 0 ? (
            wishlist.map((planet) => (
              <Card
                planet={planet}
                isWishList={false}
                onClick={() => onRemoveItem(planet)}
                key={planet.id}
              />
            ))
          ) : (
            <EmptyWishlistMessage>Wishlist is empty</EmptyWishlistMessage>
          )}
        </WishListItemWrapper>
      </SidebarContainer>
    );

  return <></>;
};

export default WishListModal;
