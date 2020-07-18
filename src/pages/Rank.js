import React, { Component } from "react";
import axios from "axios";
import RankInfo from "./RankInfo";
import { Table } from "reactstrap";

const API_KEY = "RGAPI-3821f6c2-9126-4e8b-985a-c1ce62799092";

export default class Rank extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this._getRank();
  }
  _getRank() {
    axios
      .get(
        `/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key=${API_KEY}`
      )
      .then((data) => {
        this.setState({
          data: data.data,
        });
      });
  }
  render() {
    const { data } = this.state;
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>ID</th>
            <th>Point</th>
            <th>Win</th>
            <th>Lose</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, i) => (
            <RankInfo
              index={i + 1}
              id={data.summonerName}
              point={data.leaguePoints}
              win={data.wins}
              lose={data.losses}
            />
          ))}
        </tbody>
      </Table>
    );
  }
}
