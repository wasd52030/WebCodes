// import
import Dashboard from "views/Dashboard/Dashboard";
import StationMap from "views/StationMap"
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import { Bicycle } from "components/Icons/Icons";
import { FaMapMarkedAlt } from "react-icons/fa";

var dashRoutes = [
  {
    path: "/station_map",
    name: "站點即時單車數量比率",
    rtlName: "",
    icon: <HomeIcon color="inherit" />,
    component: StationMap,
    layout: "/admin",
  },
  {
    name: "站點",
    category: "station",
    rtlName: "",
    icon: <FaMapMarkedAlt color="inherit" />,
    state: "pageCollapse",
    views: [
      {
        path: "/stationfew",
        name: "缺車站點",
        rtlName: "",
        // icon: <CreditIcon color="inherit" />,
        component: Tables,
        layout: "/admin",
      },
      {
        path: "/stationtake",
        name: "抽車站點",
        rtlName: "",
        // icon: <StatsIcon color="inherit" />,
        component: Billing,
        layout: "/admin",
      },
    ],
  },
  {
    name: "單車",
    category: "bicycles",
    rtlName: "",
    state: "pageCollapse",
    icon: <Bicycle color="inherit" />,
    views: [
      {
        path: "/bicyclefix",
        name: "維修清單",
        rtlName: "",
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/bicycledata",
        name: "單車數據",
        rtlName: "",
        component: SignUp,
        layout: "/admin",
      },
    ],
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: <HomeIcon color="inherit" />,
  //   component: Dashboard,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   rtlName: "لوحة القيادة",
  //   icon: <StatsIcon color="inherit" />,
  //   component: Tables,
  //   layout: "/admin",
  // },
];
export default dashRoutes;
