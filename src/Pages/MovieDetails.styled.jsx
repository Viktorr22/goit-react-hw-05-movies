import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FilmBox = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

export const BackLink = styled(Link)`
  border: 1px solid;
  width: 80px;
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
  text-decoration: none;
  background-color: #07e407;
`;

export const SolidBox = styled.div`
  border-bottom: 2px solid gray;
`;
