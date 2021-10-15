// @material-ui/icons
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import UserProfile from "views/UserProfile/UserProfile.js";
import Release from "views/Release/Release.js";
import DashboardPage from "views/Dashboard/Dashboard.js";
import TableList from "views/TableList/TableList.js";
import TableListEditions from "views/TableList/TableListEditions.js";

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
    icon: "list",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/editions",
    name: "Lista Programas",
    rtlName: "editions",
    icon: "content_paste",
    component: TableListEditions,
    layout: "/admin",
  },
  {
    path: "/release",
    name: "Lançamento",
    rtlName: "release",
    icon: AddCircleIcon,
    component: Release,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Meu Perfil",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/cadastrar-usuario",
    name: "Cadastrar Usuario",
    rtlName: "add user",
    icon: PersonAddIcon,
    component: UserProfile,
    layout: "/admin",
  },
];

export default dashboardRoutes;
