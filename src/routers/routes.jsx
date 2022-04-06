import Home from "../pages/home/home";
import BestSeller from "../pages/bestSeller/bestSeller";
import Collections from "../pages/collections/collections";
import Contact from "../pages/contact/contact";

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

  {
    path: "/contact",
    exact: true,
    auth: false,
    component: Contact,
  },
];

export default routes;
