import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
// import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import {Link } from "react-router-dom"

// @material-ui/icons components
// import ArrowDownward from "@material-ui/icons/ArrowDownward";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import EmojiEvents from "@material-ui/icons/EmojiEvents";
// import GroupAdd from "@material-ui/icons/GroupAdd";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
// import PieChart from "@material-ui/icons/PieChart";

// core components
import CardStats from "components/Cards/CardStats.js";

import componentStyles from "assets/theme/components/header.js";

const useStyles = makeStyles(componentStyles);

const Cards = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
              <Grid item xl={3} lg={6} xs={12}>
                <CardStats
                  title="Project Name"
                  projectDetails=""
                  icon={InsertChartOutlined}
                  color="bgError"
                  footer={
                    <>
                      <Box
                        component="p"
                        fontSize=".875rem"
                        color={theme.palette.success.main}
                        marginRight=".5rem"
                        margin="0px"
                        display="flex"
                        flexDirection="column"
                        alignItems="right"
                      >
                        
                        Project Details:
                      </Box>
                      <Box
                        component="p"
                        fontSize=".875rem"
                        color={theme.palette.success.main}
                        marginRight=".5rem"
                        margin="0px"
                        display="flex"
                        alignItems="center"
                      >
                        
                        Project Members:
                      </Box>
                      <Box
                        component="p"
                        fontSize=".875rem"
                        color={theme.palette.success.main}
                        marginRight=".5rem"
                        margin="0px"
                        display="flex"
                        alignItems="center"
                      >
                        
                        start Date:
                      </Box>
                      <Box
                        component="p"
                        fontSize=".875rem"
                        color={theme.palette.success.main}
                        marginRight=".5rem"
                        margin="0px"
                        display="flex"
                        alignItems="center"
                      >
                        
                        end Date :
                      </Box>
                      <Link to ="/admin/tables" >
                         <Button size="small"  color="primary" variant="contained">Check details</Button>
                      </Link>
                      
                    </>
                  }
                />
              </Grid>
    </>
  );
};

export default Cards;
