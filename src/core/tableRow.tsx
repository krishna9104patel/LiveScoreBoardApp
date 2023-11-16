import React from "react";
import { Streamers } from "../types/streamersType";
import {
  CellImgWrapper,
  ImgCount,
  ProfileImg,
  ScoreCell,
  StyledRow,
} from "../styledComponent/table";

interface TableRowProps {
  rowData: Streamers;
  index: number;
  isEven: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ rowData, index, isEven }) => {
  return (
    <StyledRow
      isEven={isEven}
      data-id={rowData.id}
      style={{ order: rowData.id, top: `${(index - 1) * 57}px` }}
    >
      <CellImgWrapper>
        <div style={{ position: "relative" }}>
          <ProfileImg src={rowData.img} alt="Profile" width={40} height={40} />
          <ImgCount className="rank-num" index={index}>
            {index}
          </ImgCount>
        </div>
        <div>{rowData.name}</div>
      </CellImgWrapper>
      <ScoreCell>
        {rowData.score}&nbsp;
        <span style={{ fontWeight: "lighter" }} className={"text-points"}>
          points
        </span>
      </ScoreCell>
    </StyledRow>
  );
};

export default TableRow;
