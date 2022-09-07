import React from 'react';
import { Container } from './styles';

type Props = {
  url: string;
  name: string;
  onDelete: (name: string) => void;
}

export const PhotoItem = ({ url, name, onDelete }: Props) => {
  return (
    <Container>
      <img src={url} alt={name} />
      {name}
      <button onClick={()=>onDelete(name)}>Delete</button>
    </Container>
  )
}