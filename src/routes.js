import Home from './components/Home.vue'
import Feed from './components/Feed/Feed.vue'
import PostNote from './components/Feed/Subviews/PostNote'
import PostPlace from './components/Feed/Subviews/PostPlace'
import PostComments from './components/Feed/Subviews/PostComments'
import Favorites from './components/Favorites/Favorites.vue'
import Kast from './components/Kast/Kast.vue'
import Search from './components/Search/Search.vue'
import Profile from './components/Profile/Profile.vue'

export const routes = [
  {path: '', component: Home, name: 'home'},
  {path: '/feed', component: Feed, name: 'feed'},
  {path: '/feed/:postid/note', component: PostNote, name: 'note'},
  {path: '/feed/:postid/place', component: PostPlace, name: 'place'},
  {path: '/feed/:postid/comments', component: PostComments, name: 'comments'},
  {path: '/favs', component: Favorites, name: 'favorites'},
  {path: '/kast', component: Kast, name: 'kast'},
  {path: '/search', component: Search, name: 'search'},
  {path: '/profile', component: Profile, name: 'profile'}
]
