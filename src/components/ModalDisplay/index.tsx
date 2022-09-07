import React from 'react';
import { Modal, ModalContent } from './styles';

type Props = {
  url: string;
  name: string;
  onClose: () => void;
}

export const ModalDisplay = ({ url, name, onClose }: Props) => {

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (    
    <Modal onClick={handleOutsideClick}>
      <ModalContent>
        <img src={url} alt={name} />
      </ModalContent>        
    </Modal>
  )
}