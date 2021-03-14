import styled from 'styled-components';


export const Title = styled.div`
  grid-area: title;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const WrapperButtons = styled.div`
  grid-area: footer;
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  > button {
    margin: 3px 5px;
  }
`

export const WrapperFields = styled.div`
    grid-area: body;
`

export const Wrapper = styled.div`
  margin: 8px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
