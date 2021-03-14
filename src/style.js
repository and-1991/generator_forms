import styled from 'styled-components'
import {colors} from "./basic";

export const Main = styled.div`
    margin: 20px 15px;
`;

export const Wrapper = styled.div``;

export const Tabs = styled.div`
  display: inline-flex;
  max-width: 317px;
  width: 100%;
`;

export const Tab = styled.div`
  width: 50%;
  text-transform: capitalize;
  border: 1px solid ${colors.black};
  padding: 8px 50px 5px;
  cursor: pointer;
  border-radius: 18px 10px 0 0;
  background-color: ${({active}) => active ? colors.lightgray : colors.white};
  transition: all ease-in-out 0.5s;
  border-bottom: none;
`;

export const WrapperPages = styled.div`
  width: 100%;
  max-width: 500px;
  border: 1px solid ${colors.black};
`;
