import React from "react";

const RankInfo = ({ index, id, point, win, lose }) => {
  return (
    <tr>
      <th>{index}</th>
      <td>{id}</td>
      <td>{point}</td>
      <td>{win}</td>
      <td>{lose}</td>
    </tr>
  );
};

export default RankInfo;
