import styled from 'styled-components';

export const Container = styled.div`
  width: 502px;
  height: 427px;
  background-color: #e7ecf2;

  margin-left: auto;
  margin-right: auto;
`;

export const Card = styled.div`
  width: 249px;
  height: 270px;
  font-size: 12px;
  text-align: center;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;

  border: 1px solid grey;
`;

export const Info = styled.ul`
  display: flex;
  list-style: none;
  border: 1px solid blue;

  padding: 0px;
`;
export const List = styled.li`
  width: 250px;
  height: 50px;
  :nth-child(-n + 2) {
    border-right: 1px solid red;
  }
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const ListSpam = styled.span`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
