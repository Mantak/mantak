import AccountsRoutes from './accounts';
import HomeRoutes from './home';
import AdminRoutes from './admin';
import NotFound from './not_found';

const routes = [
  ...AccountsRoutes,
  ...HomeRoutes,
  ...AdminRoutes,
  ...NotFound
];

export default routes;
