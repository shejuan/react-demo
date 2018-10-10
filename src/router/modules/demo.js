import Home from '@/pages/home'
import News from '@/pages/news'
import Course from '@/pages/course'
import JoinUs from '@/pages/joinUs'
import Jingli from '@/pages/jingli'
let routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
    exact: true
  },
  {
    name: 'news',
    path: '/news',
    component: News,
    meta: {
      title: '我是News'
    }
  },
  {
    name: 'course',
    path: '/course',
    component: Course,
  },
  {
    name: 'joinUs',
    path: '/joinUs',
    component: JoinUs,
  },
  {
    name: 'jingli',
    path: '/jingli',
    component: Jingli,
  },
];

export default routes;