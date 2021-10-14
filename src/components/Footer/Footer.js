/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

// import PropTypes from "prop-types";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/" className={classes.block}>
                Inicio
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.growdev.com.br" target="_blank" className={classes.block}>
                GrowDev
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            <a
              href="https://www.growdev.com.br"
              target="_blank"
              className={classes.a}
              >
              {1900 + new Date().getYear()} &copy;{" "}
              GrowDev</a> - fazendo sempre o melhor
          </span>
        </p>
      </div>
    </footer>
  );
}
