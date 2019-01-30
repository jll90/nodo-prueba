import List from './components/List.vue'
import Detail from './components/Detail.vue'

/*
	array of all global routes of the proyect, in  here we asociated all the components with his routes.
*/
const routes = [
  { path: '/', component: List, name: 'list' },
  { path: '/detail/:id', component: Detail, name: 'detail'}
]

export default routes
