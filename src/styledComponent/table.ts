import styled from 'styled-components';
import { WinnerColorcodes } from '../data/StreamersData';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 6px;
  overflow: hidden;


  .tbody {
    display: flex;
    flex-direction: column;
    min-height: 700px;
    position: relative;
  }

  .tbody div[data-id="1"],
  .tbody div[data-id="3"],
  .tbody div[data-id="5"],
  .tbody div[data-id="7"],
  .tbody div[data-id="9"] {
    background-color: #f0f3fc;
  }
  .tbody div[data-id="2"],
  .tbody div[data-id="4"],
  .tbody div[data-id="6"],
  .tbody div[data-id="8"],
  .tbody div[data-id="10"] {
    background-color: #f9fafe;
  }
  .tbody div:not([data-id="10"]) {
    border-bottom: 0
  }
  .tbody div[data-id="1"] .rank-num {
    color:#C79709;
    background-color: #FCC523;
    border-color: #FCC523; 
  }
  .tbody div[data-id="2"] .rank-num {
    color: #8E8A8B;
    background-color: #DAD5D0;
    border-color: #DAD5D0;
  }
  .tbody div[data-id="3"] .rank-num {
    color: #B0670F;
    background-color: #E2992F;
    border-color: #E2992F;
  }

  .tbody div[data-id="1"] {
    border-radius: 6px 6px 0 0;
  }

  .tbody div[data-id="10"] {
    border-radius: 0 0 6px 6px;
  }
  



  @media screen and (max-width: 480px) {
    .text-points{
      display: none;
    }
  }
`;

export const StyledRow = styled.div<{ isEven: boolean }>`
  border: 1px solid #ddd;
  position: absolute;
  overflow: hidden;
  text-align: left;
  // background-color: ${(props) => (props.isEven ? "#e5e5e5" : "#f9f9f9")};
  transition: all .5s ease;
  font-weight: bold;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 957px;
  width: calc(100% - 45px);

  &:hover {
    background-color: #4a69dd !important;
    color: white;
  }
`;

export const CellImgWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ProfileImg = styled.img`
  border: 1px solid transparent;
  border-radius: 50%;
`;

export const ImgCount = styled.span<{index: number}>`
  color: ${(props) => [0,1,2].includes(props.index) ? WinnerColorcodes.find((code) => code.no === props.index + 1)?.color : '#FFFFFF'};
  background-color: ${(props) => [0,1,2].includes(props.index) ? WinnerColorcodes.find((code) => code.no === props.index + 1)?.backgroundColor : '#4a69dd'};
  border: 1px solid ${(props) => [0,1,2].includes(props.index) ? WinnerColorcodes.find((code) => code.no === props.index + 1)?.backgroundColor : '#4a69dd'};
  border-radius: 100%;
  padding: 2px;
  font-weight: lighter;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  width: 10px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const ScoreCell = styled.div`
  padding: 5px 20px;
`;