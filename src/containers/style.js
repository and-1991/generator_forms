import styled from 'styled-components';
import {colors} from "../basic";

export const Wrapper = styled.form`
    padding: 15px 20px;
    display: grid;
    grid-template-areas: 'title'
                          'body'
                          'footer';
  > button {
    display: flex;
    margin-left: auto;
  }
`;

export const WrapperButtons = styled.div`
    display: flex;
  justify-content: flex-end;
  > button {
    margin-right: 3px;
    margin-left: 3px;
  }
`

export const EmptyResult = styled.div``;

export const Error = styled.div`
  font-weight: bold;
  color: ${colors.red};
  margin-bottom: -10px;
  margin-top: 10px;
`;
