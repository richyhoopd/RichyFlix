import Home from '../containers/Home';
import Player from '../containers/Player';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFount from '../containers/NotFount';


const routes = [
    {
        exact: true,
        path: '/',
        component: Home,
    },
    {
        exact: true,
        path: '/player/:id',
        component: Player,
    },
    {
        exact: true,
        path: '/login',
        component: Login,
    },
    {
        exact: true,
        path: '/register',
        component: Register,
    },
    {
        name: 'NotFound',
        component: NotFount,
    },
];

export default routes;