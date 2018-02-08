import Home from './components/Home.vue'
import Favorites from './components/Favorites.vue'
import Kast from './components/Kast.vue'
import Search from './components/Search.vue'
import Profile from './components/Profile.vue'

export const routes = [
  {path: '', component: Home, name: 'home'},
  {path: '/favs', component: Favorites, name: 'favorites'},
  {path: '/kast', component: Kast, name: 'kast'},
  {path: '/search', component: Search, name: 'search'},
  {path: '/profile', component: Profile, name: 'profile'}
];
