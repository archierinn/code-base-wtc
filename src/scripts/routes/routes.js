import ErrorNotFound from '../pages/error-not-found'
import Home from '../pages/home'

const routes = {
  '/': Home,
  '/home': Home,
  error: ErrorNotFound
}

export default routes
