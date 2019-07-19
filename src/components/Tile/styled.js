import styled from "styled-components";

export const Tile = styled.div`
  height: calc(25% - 12px);
  width: calc(25% - 12px);
  background-color: #eee4da;
  font-size: 53px;
  color: #776e64;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 3px;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: ${p => p.top}px;
  margin-left: ${p => p.left}px;
  transform: 0.3s;
`;
