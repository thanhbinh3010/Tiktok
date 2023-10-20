import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import { HeaderOnly } from "../components/Layout";
import Search from "../pages/Search";

// Public routes
const PublicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/search", component: Search },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
