import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import { HeaderOnly } from "../layout";
import Search from "../pages/Search";
import config from "../config";

// Public routes
const PublicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.search, component: Search },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
