import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
// @material-ui/icons components
// import ArrowDownward from "@material-ui/icons/ArrowDownward";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import EmojiEvents from "@material-ui/icons/EmojiEvents";
// import GroupAdd from "@material-ui/icons/GroupAdd";
// import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
// import PieChart from "@material-ui/icons/PieChart";
// import CardStats from "components/Cards/CardStats.js";

import Cards from "./Cards";
import AddEmployee from "components/Dialog/AddEmployee";
import AddProject from "components/Dialog/AddProject";
import RemoveEmployee from "components/Dialog/RemoveEmployee";

// core components


import componentStyles from "assets/theme/components/header.js";

const useStyles = makeStyles(componentStyles);

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <div className={classes.header}>
        <Container
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >

          <Card style={{marginBottom:"20px",textAlign:"center"}}>
            <h1>Project list </h1>
            <div style={{ display: "flex", justifyContent: "center" }}>

              <AddProject />
              <AddEmployee/>
              <RemoveEmployee />
            </div>
          </Card>
          <div>
            <Grid container>
              <Cards />
              <Cards />
              <Cards />

              <Cards />
              <Cards />
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
