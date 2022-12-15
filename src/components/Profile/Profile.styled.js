import styled from 'styled-components';

export const WrappedProfile = styled.div`
  width: 250px;
  border: 1px solid black;
  border-radius: 4px;
  color: grey;
  background-color: white;
`;

export const ImgWrapper = styled.div`
  height: 100px;
  width: 100px;
  padding-top: 20px;
  margin: 0 auto;
`;

export const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 1px solid black;

  object-fit: cover;
`;

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 12px;

  color: black;
`;

export const Tag = styled.p`
  margin-top: 0;
  margin-bottom: 12px;

  &::before {
    content: '@';
  }
`;

export const Loction = styled.p`
  margin: 0;
  margin-bottom: 32px;
`;

export const Stats = styled.ul`
  list-style: none;
  padding: 0;
  column-count: 3;
  gap: 0;
  border: 0;
  margin: 0;
`;

export const Li = styled.li`
  color: black;
  background-color: lightgrey;
  border: 1px solid black;
  font-size: 12px;

  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
