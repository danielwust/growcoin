import React from "react";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Button from "components/CustomButtons/Button.js";

import StarBorderIcon from "@material-ui/icons/StarBorder";
import avatar from "assets/img/faces/sem-foto.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  selects: {
    margin: "2.5%",
    minWidth: "45%",
  },
};

export default function User(user) {
  const u = user.user;
  const classes = useStyles();

  return (
    <div>
      <Card profile>
        <CardAvatar profile>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img src={avatar} alt="..." />
          </a>
        </CardAvatar>
        <CardBody profile>
          <h6
            className={classes.cardCategory}
          >{`${u.data[2]} Edição - ${u.data[3]}`}</h6>
          <h4 className={classes.cardTitle}>{u.name}</h4>
          <p className={classes.description}>{u.description}</p>
          <Button color="primary" round>
            <StarBorderIcon></StarBorderIcon>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
