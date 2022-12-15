import styled from 'styled-components';

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

export const Ul = styled.ul`
  width: 250px;
  list-style: none;
  padding: 0;
  column-count: 3;
  gap: 0;
  border: 0;
  margin: 0;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  text-align: center;

  outline: 1px solid black;
`;

export const Percentage = styled.span`
  &::after {
    content: '%';
  }
`;

export const StatisticsSection = styled.section`
  width: 250px;
  background-color: white;
`;
