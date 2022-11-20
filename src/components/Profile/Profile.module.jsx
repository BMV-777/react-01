import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 425px;
  height: 427px;
  background-color: #e7ecf2;
`;

export const Card = styled.div`
  position: relative;
  width: 249px;
  height: 304px;
  text-align: center;
  padding-top: 20px;
  top: 10%;
  left: 20%;
  background-color: white;

  border-radius: 4px;
`;

export const Info = styled.ul`
  margin-top: 25px;
  display: flex;
  list-style: none;
  border-top: 1px solid #e7ecf2;
  background-color: #f3f6f9;
  padding: 0px;
`;
export const List = styled.li`
  width: 250px;
  height: 70px;
  :nth-child(-n + 2) {
    border-right: 1px solid #e7ecf2;
  }
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const ListSpam = styled.span`
  margin-top: 17px;
  display: flex;
  justify-content: center;
`;

export const Spam = styled.p`
  margin-top: 5px;
  font-size: 14px;
`;

export const Text = styled.p`
  color: green;
`;

export const Img = styled.img`
  border-radius: 50%;
`;
