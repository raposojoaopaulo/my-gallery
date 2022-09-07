import React from 'react';
import { Container, ButtonDelete } from './styles';
import { useState } from 'react';
import { ModalDisplay } from '../ModalDisplay';

type Props = {
  url: string;
  name: string;
  onDelete: (name: string) => void;
}

export const PhotoItem = ({ url, name, onDelete }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <button onClick={() => setIsModalOpen(true)}>
        <img src={url} alt={name} />
      </button> 
      {isModalOpen ? <ModalDisplay 
                        url={url} 
                        name={name}
                        onClose={() => setIsModalOpen(false)}
                      /> : null}
      {name}
      <ButtonDelete onClick={()=>onDelete(name)}>Delete</ButtonDelete>
    </Container>
  )
}