import styled from "styled-components";

export const Tile = styled.div`
  height: calc(25% - 12px);
  width: calc(25% - 12px);
  background-color: #eee4da;
  border-radius: 3px;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: ${p => p.top}px;
  margin-left: ${p => p.left}px;
`;
