import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import StarIcon from '@mui/icons-material/Star';
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import BugReport from "@material-ui/icons/BugReport";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Tasks from "components/Tasks/Tasks.js";
import CardHeader from "components/Card/CardHeader.js";

import { solicitacoes, entregas, problemas } from "variables/general.js";

import avatar from "assets/img/faces/sem-foto.png";

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

export default function UserTransaction() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}> 
          <Card plain>
            <CardHeader plain color="primary">
              <h4 className={classes.cardTitleWhite}>
                Registro de transações
              </h4>
              <p className={classes.cardCategoryWhite}>
                Selecione o tipo de transação
              </p>
            </CardHeader>
            <CardBody>
              <CustomTabs
              title=""
              headerColor="primary"
              tabs={[
                {
                  tabName: "Entradas",
                  tabIcon: NotificationsActiveIcon,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={solicitacoes}
                    />
                  ),
                },
                {
                  tabName: "Saidas",
                  tabIcon: ShoppingCartIcon,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={entregas}
                    />
                  ),
                },
                {
                  tabName: "Pendentes",
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={problemas}
                    />
                  ),
                },
              ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Edição - Programa</h6>
              <h4 className={classes.cardTitle}>Nome GrowDever</h4>
              <p className={classes.description}>
                Descrição do growdever de acordo com feedback do mentor
                encarregado
              </p>
              <Button color="primary" round>
                <StarBorderIcon></StarBorderIcon>
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
