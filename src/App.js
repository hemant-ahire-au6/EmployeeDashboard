import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "assets/theme/theme.js";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Employee from "layouts/Employee"

function App() {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Route path="/employee" render={(props) => <Employee {...props} />} />
            <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
            
            <Redirect from="/" to="/admin/index" />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    )
}

export default App;
