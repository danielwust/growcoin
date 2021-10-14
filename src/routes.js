// @material-ui/icons
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import UserProfile from "views/UserProfile/UserProfile.js";
import DashboardPage from "views/Dashboard/Dashboard.js";
import TableList from "views/TableList/TableList.js";

// import NotificationsPage from "views/Notifications/Notifications.js";
// import Notifications from "@material-ui/icons/Notifications";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import Typography from "views/Typography/Typography.js";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Maps from "views/Maps/Maps.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Visão Geral",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Lista Usuarios",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Perfil",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/cadastrar-usuario",
    name: "Cadastrar Usuario",
    rtlName: "التطور للاحترافية",
    icon: PersonAddIcon,
    component: UserProfile, //mudar rota
    layout: "/admin",
  },
  /*
  {
    path: "/maps",
    name: "Mapas",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notificações",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Tipografia",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
*/
];

export default dashboardRoutes;
