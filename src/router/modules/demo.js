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
    meta: {
      title: '我是首页'
    },
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
    meta: {
      title: '我是Course'
    }
  },
  {
    name: 'joinUs',
    path: '/joinUs',
    component: JoinUs,
    meta: {
      title: '我是JoinUs'
    }
  },
  {
    name: 'jingli',
    path: '/jingli',
    component: Jingli,
    meta: {
      title: '我是Jingli'
    }
  },
];

export default routes;