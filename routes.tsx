/*!

=========================================================
* * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from '@mui/icons-material/Dashboard';
import Person from '@mui/icons-material/Person';
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import BubbleChart from '@mui/icons-material/BubbleChart';
import LocationOn from '@mui/icons-material/LocationOn';
import Notifications from '@mui/icons-material/Notifications';
import Language from '@mui/icons-material/Language';

export const dashboardRoutes = [
  {
    path: "main",
    name: "Dashboard",
    icon: Dashboard,

    layout: "/",
  },
  // {
  //   path: "main",
  //   name: "Anuncios",
  //   icon: Dashboard,

  //   layout: "/",
  // },
  {
    path: "members",
    name: "Administrar  Miembros",
    icon: Person,

    layout: "/",
  },
  {
    path: "reportes",
    name: "Reportes",
    icon: "content_paste",

    layout: "/",
  },
  {
    path: "typography",
    name: "Calendario",
    icon: LibraryBooks,

    layout: "/",
  },
  {
    path: "icons",
    name: "Icons",
    icon: BubbleChart,
    layout: "/",

  },
  {
    path: "maps",
    name: "Maps",
    icon: LocationOn,

    layout: "/",
  },
  {
    path: "notifications",
    name: "Notifications",

    icon: Notifications,

    layout: "/",
  },
];


