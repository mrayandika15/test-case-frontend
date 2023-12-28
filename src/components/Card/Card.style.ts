import styled from 'styled-components';

export const CardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  width: 100%;
`;

export const ListItem = styled.li`
  list-style-type: none;
  margin: 8px 0;
`;

export const Title = styled.h3`
  color: blue;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
`;

export const Subtitle = styled.p`
  color: #666;
  margin-bottom: 8px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
