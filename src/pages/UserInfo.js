import React from "react";
import PropTypes from "prop-types";
import { Badge, Container, Row } from "reactstrap";

const UserInfo = ({
  Username,
  Usertier,
  Userrank,
  Userlpoints,
  Userwin,
  Userlose,
  Userrate,
  most1,
  most2,
  most3,
}) => {
  return (
    <Container>
      <Row>
        <Badge color="primary">{Username}</Badge>
      </Row>

      <Row>
        <img
          src={require(`../lol-data/emblems/Emblem_${Usertier}.png`)}
          width="100"
          height="100"
        />
      </Row>

      <Row>
        <Badge color="primary">
          {Usertier} {Userrank} {Userlpoints}
        </Badge>
      </Row>

      <Row>
        <Badge color="primary">{Userwin} W </Badge>
        <Badge color="danger">{Userlose} L</Badge>
      </Row>

      <Row>
        <Badge color="primary">Rate {Userrate.toFixed(2)}%</Badge>
      </Row>

      <Row>
        <div>
          <img
            src={require(`../lol-data/img/champion/${most1}.png`)}
            width="60"
            height="60"
          />
          <img
            src={require(`../lol-data/img/champion/${most2}.png`)}
            width="60"
            height="60"
          />
          <img
            src={require(`../lol-data/img/champion/${most3}.png`)}
            width="60"
            height="60"
          />
        </div>
      </Row>
    </Container>
  );
};

UserInfo.propTypes = {
  Usertier: PropTypes.string.isRequired,
  most1: PropTypes.number.isRequired,
  most2: PropTypes.number.isRequired,
  most3: PropTypes.number.isRequired,
};

export default UserInfo;
