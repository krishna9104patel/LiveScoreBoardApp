import { StyledTable } from "../styledComponent/table";
import React, { useEffect, useState } from "react";
import TableRow from "../core/tableRow";
import { Streamers } from "../types/streamersType";

interface Props {
  data: Streamers[];
}

const Table: React.FC<Props> = ({ data }) => {
  const [streamers, setStreamers] = useState<Streamers[]>(data);

  const updateScores = () => {
    setStreamers((prevStreamers) =>
      prevStreamers.map((streamer) => ({
        ...streamer,
        score: streamer.score + Math.floor(Math.random() * 1000),
      }))
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateScores();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const sortedStreamers = [...streamers].sort((a, b) => b.score - a.score);

  return (
    <StyledTable>
      <div className="tbody">
        <TableRow
          key={0}
          rowData={sortedStreamers[0]}
          index={sortedStreamers[0].id}
          isEven={0 % 2 === 0}
        />
        <TableRow
          key={1}
          rowData={sortedStreamers[1]}
          index={sortedStreamers[1].id}
          isEven={1 % 2 === 0}
        />
        <TableRow
          key={2}
          rowData={sortedStreamers[2]}
          index={sortedStreamers[2].id}
          isEven={2 % 2 === 0}
        />
        <TableRow
          key={3}
          rowData={sortedStreamers[3]}
          index={sortedStreamers[3].id}
          isEven={3 % 2 === 0}
        />
        <TableRow
          key={4}
          rowData={sortedStreamers[4]}
          index={sortedStreamers[4].id}
          isEven={4 % 2 === 0}
        />
        <TableRow
          key={5}
          rowData={sortedStreamers[5]}
          index={sortedStreamers[5].id}
          isEven={5 % 2 === 0}
        />
        <TableRow
          key={6}
          rowData={sortedStreamers[6]}
          index={sortedStreamers[6].id}
          isEven={6 % 2 === 0}
        />
        <TableRow
          key={7}
          rowData={sortedStreamers[7]}
          index={sortedStreamers[7].id}
          isEven={7 % 2 === 0}
        />
        <TableRow
          key={8}
          rowData={sortedStreamers[8]}
          index={sortedStreamers[8].id}
          isEven={8 % 2 === 0}
        />
        <TableRow
          key={9}
          rowData={sortedStreamers[9]}
          index={sortedStreamers[9].id}
          isEven={9 % 2 === 0}
        />
      </div>
    </StyledTable>
  );
};

export default Table;
