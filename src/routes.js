// core components
// import Icons from "views/admin/Icons.js";
// import Maps from "views/admin/Maps.js";
// @material-ui/icons components
// import Dns from "@material-ui/icons/Dns";
// import FlashOn from "@material-ui/icons/FlashOn";
// import Grain from "@material-ui/icons/Grain";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Palette from "@material-ui/icons/Palette";
import EmployeeHeader from "./components/Headers/EmployeeHeader"
import Dashboard from "views/admin/Dashboard.js";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Login from "views/auth/Login.js";
import Profile from "views/admin/Profile.js";
import Register from "views/auth/Register.js";
import Tables from "views/admin/Tables.js";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import Person from "@material-ui/icons/Person";
import Tv from "@material-ui/icons/Tv";
import VpnKey from "@material-ui/icons/VpnKey";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/index",
    name: "Employee Dashboard",
    icon: FormatListBulleted,
    iconColor: "Error",
    component:  EmployeeHeader,
    layout: "/employee",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: Person,
    iconColor: "WarningLight",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: FormatListBulleted,
    iconColor: "Error",
    component: Tables,
    layout: "/admin",
  },
 
  {
    divider: true,
  },
  {
    path: "/login",
    name: "Logout",
    icon: AccountCircle,
    iconColor: "ErrorLight",
    component: Register,
    layout: "/auth",
  }

];


export const loginRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: VpnKey,
    iconColor: "Info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Logout",
    icon: AccountCircle,
    iconColor: "ErrorLight",
    component: Register,
    layout: "/auth",
  }

]


export const employeeRoutes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/employee",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: Person,
    iconColor: "WarningLight",
    component: Profile,
    layout: "/employee",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: FormatListBulleted,
    iconColor: "Error",
    component: Tables,
    layout: "/employee",
  },
  {
    divider: true,
  },
  {
    path: "/index",
    name: "Employee Dashboard",
    icon: FormatListBulleted,
    iconColor: "Error",
    component:  EmployeeHeader,
    layout: "/employee",
  },
];

export default routes;
