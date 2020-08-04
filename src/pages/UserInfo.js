import React from "react";
import PropTypes from "prop-types";
import { Badge, Row } from "reactstrap";

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
    <div>
      <Row>
        <Badge style={{ margin: "0 auto" }} color="primary">
          {Username}
        </Badge>
      </Row>

      <Row>
        <img
          src={require(`../lol-data/emblems/Emblem_${Usertier}.png`)}
          width="100"
          height="100"
          alt="z"
          style={{ margin: "0 auto" }}
        />
      </Row>

      <Row>
        <Badge color="primary" style={{ margin: "0 auto" }}>
          {Usertier} {Userrank} {Userlpoints}
        </Badge>
      </Row>

      <Row style={{ width: "86px", margin: "0 auto" }}>
        <Badge color="primary">{Userwin} W </Badge>
        <Badge color="danger">{Userlose} L</Badge>
      </Row>

      <Row>
        <Badge color="primary" style={{ margin: "0 auto" }}>
          Rate {Userrate.toFixed(2)}%
        </Badge>
      </Row>

      <Row style={{ width: "180px", margin: "30px auto" }}>
        <img
          src={require(`../lol-data/img/champion/${most1}.png`)}
          width="60"
          height="60"
          alt="z"
        />
        <img
          src={require(`../lol-data/img/champion/${most2}.png`)}
          width="60"
          height="60"
          alt="z"
        />
        <img
          src={require(`../lol-data/img/champion/${most3}.png`)}
          width="60"
          height="60"
          alt="z"
        />
      </Row>
    </div>
  );
};

UserInfo.propTypes = {
  Usertier: PropTypes.string.isRequired,
  most1: PropTypes.number.isRequired,
  most2: PropTypes.number.isRequired,
  most3: PropTypes.number.isRequired,
};

export default UserInfo;
