import React , {Component} from 'react';
import UserInfo from "./UserInfo";
import axios from "axios"
import {Form, Button, Input, FormGroup, Container} from 'reactstrap';


const API_KEY = "RGAPI-3821f6c2-9126-4e8b-985a-c1ce62799092"

export default class User extends Component {
  state = {
    isLoaded: false,
    name: null,
    tier: null,
    lpoints: null,
    win: null,
    lose: null,
    most1: null,
    most2: null,
    most3: null,
    matchId: null,
  };

  _getUserData () {
    axios.get(`/lol/summoner/v4/summoners/by-name/${this.state.id}?api_key=${API_KEY}`)
    .then(User => {
    axios.get(`/lol/league/v4/entries/by-summoner/${User.data.id}?api_key=${API_KEY}`)
    .then(UserData => {
      axios.get(`/lol/champion-mastery/v4/champion-masteries/by-summoner/${User.data.id}?api_key=${API_KEY}`)
      .then(UserChamp => {
        axios.get(`/lol/match/v4/matchlists/by-account/${User.data.accountId}?api_key=${API_KEY}`)
        .then(UserMatch => {
          axios.get(`/lol/match/v4/matches/${UserMatch.data.matches[0].gameId}?api_key=${API_KEY}`)
          .then(MatchData => {
        this.setState({
          name: UserData.data[0].summonerName,
          tier: UserData.data[0].tier,
          rank: UserData.data[0].rank,
          lpoints: UserData.data[0].leaguePoints,
          win: UserData.data[0].wins,
          lose: UserData.data[0].losses,
          most1: UserChamp.data[0].championId,
          most2: UserChamp.data[1].championId,
          most3: UserChamp.data[2].championId,
          matchId: UserMatch.data.matches[0].gameId,
          isLoaded: true,
          matchData: MatchData.data.participantIdentities
        })
        })
      })
    })
  })
})
}

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

handleSubmit = (e) => {
  const {id} = this.state
  e.preventDefault();
  this.setState({
    id: e.target.value
  })
  this._getUserData ();
}
 
  render() {
    
    const { isLoaded, error, name, tier, lpoints, rank, win, lose, most1, most2, most3, matchId, matchData} = this.state;
    return (
      <Container>
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input placeholder="이름" name="id" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Button color="primary">검색</Button>
          </FormGroup>
        </Form>
        {isLoaded ? (<UserInfo Username={name} Usertier={tier} Userlpoints={lpoints} Userwin={win} Userlose={lose} Userrate={win/(win+lose)*100} Userrank={rank} most1={most1} most2={most2} most3={most3}/>) : 
        (<div>Loading</div>)}
      </Container>
    );
  }
}