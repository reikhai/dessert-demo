import Home from "../pages/home/home";
import BestSeller from "../pages/bestSeller/bestSeller";
import Collections from "../pages/collections/collections";
// import Project from "../components/director/director";

const routes = [
  {
    path: "/",
    exact: true,
    auth: false,
    component: Home,
  },

  {
    path: "/best-seller",
    exact: true,
    auth: false,
    component: BestSeller,
  },

  {
    path: "/collections",
    exact: true,
    auth: false,
    component: Collections,
  },

  // {
  //   path: "/projects",
  //   exact: true,
  //   auth: false,
  //   component: Project,
  // },
];

export default routes;
