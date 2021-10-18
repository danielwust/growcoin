import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TableLink from "components/Table/TableLink.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Lista de todos usuarios de todas edições
            </h4>
            <p className={classes.cardCategoryWhite}>
              Selecione um usuario na qual deseja ver suas informações
            </p>
          </CardHeader>
          <CardBody>
            <TableLink
              tableHeaderColor="primary"
              tableHead={[
                "ID",
                "Nome",
                "Edição",
                "Programa",
                "Saldo GrowCoins",
                "Notas",
              ]}
              tableData={[
                [
                  "1",
                  "Daniel Wust",
                  "4ª",
                  "Starter",
                  "9999",
                  "100, 99, 100, 99",
                ],
                ["2", "Pamela", "4ª", "Starter", "9800", "99, 98, 99, 98"],
                ["3", "Dani", "4ª", "Starter", "9600", "98, 97, 98, 97"],
                ["4", "Kley", "4ª", "Starter", "9700", "97, 96, 97, 96"],
                ["5", "Usuario", "3ª", "Starter", "3000", "90, 86, 90, 86"],
                ["6", "Usuario", "2ª", "Starter", "2000", "90, 86, 90, 86"],
                ["7", "Usuario", "5ª", "Starter", "1100", "90, 86, 90, 86"],
                ["8", "Usuario", "6ª", "Starter", "500", "90, 86, 90, 86"],
                ["9", "Usuario", "1ª", "Starter", "0", "90, 86, 90, 86"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
