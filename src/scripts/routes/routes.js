import Detail from '../pages/detail'
import ErrorNotFound from '../pages/error-not-found'
import Home from '../pages/home'
import Watchlist from '../pages/watchlist'

const routes = {
  '/': Home,
  '/home': Home,
  '/watchlist': Watchlist,
  '/detail/:id': Detail,
  error: ErrorNotFound
}

export default routes
