import Home from './components/Home/Home.vue'
import Favorites from './components/Favorites/Favorites.vue'
import Kast from './components/Kast/Kast.vue'
import Search from './components/Search/Search.vue'
import Profile from './components/Profile/Profile.vue'

export const routes = [
  {path: '', component: Home, name: 'home'},
  {path: '/favs', component: Favorites, name: 'favorites'},
  {path: '/kast', component: Kast, name: 'kast'},
  {path: '/search', component: Search, name: 'search'},
  {path: '/profile', component: Profile, name: 'profile'}
]
