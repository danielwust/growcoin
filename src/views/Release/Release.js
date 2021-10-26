import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import User from "components/User/User";
import users from "variables/users";

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

const useStyles = makeStyles(styles);

export default function Release() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Adicionar Lançamento</h4>
              <p className={classes.cardCategoryWhite}>GrowDever</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Select
                    className={classes.selects}
                    labelId="growdever"
                    id="growdever"
                    value="0"
                  >
                    <MenuItem value={0} disabled>
                      Selecione o aluno
                    </MenuItem>
                    <MenuItem value={1}>Daniel</MenuItem>
                    <MenuItem value={2}>Pamela</MenuItem>
                    <MenuItem value={3}>Kley</MenuItem>
                    <MenuItem value={4}>Dani</MenuItem>
                  </Select>
                  <Select
                    className={classes.selects}
                    labelId="growdever"
                    value={1}
                    id="tipo"
                  >
                    <MenuItem value={1}>Entrada</MenuItem>
                    <MenuItem value={2}>Saida</MenuItem>
                  </Select>
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Número"
                    id="phone"
                    success
                    formControlProps={{
                      disabled: true,
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={7}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    success
                    formControlProps={{
                      disabled: true,
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Informações do lançamento"
                    id="about"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Valor do lançamento"
                  id="valor"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <Button color="primary">Adicionar Lançamento</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <User user={users.users[0]} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
