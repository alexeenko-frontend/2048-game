import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
  margin: -15px -15px;
  height: 450px;
  width: 450px;
  background: #bbada0;
  border-radius: 6px;
`;

export const Cell = styled.div`
  height: calc(25% - 12px);
  width: calc(25% - 12px);
  background-color: rgba(238, 228, 218, 0.35);
  border-radius: 3px;
`;
