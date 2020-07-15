import React from 'react';
import { Table } from 'reactstrap';

function RankInfo(props) {
    return (
    <tr>
    <th>{props.key}</th>
    <td>{props.id}</td>
    <td>{props.point}</td>
    <td>{props.win}</td>
    <td>{props.lose}</td>
    </tr>
    )
}

export default RankInfo