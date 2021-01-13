import { RouteProp } from 'models/route-prop';
import { GameComponent } from 'components/game';

const routes: RouteProp[] = [
    {
        key: 'home',
        path: '/',
        component: GameComponent,
        exact: true,
        strict: true,
        sensitive: true,
        isProtected: true,
    },
    {
        key: 'game',
        path: '/game',
        component: GameComponent,
        exact: true,
        strict: true,
        sensitive: true,
        isProtected: true,
    },
    {
        key: 'login',
        path: '/login',
        component: GameComponent,
        exact: true,
        strict: true,
        sensitive: true,
        isProtected: false,
    },
    {
        key: 'signup',
        path: '/signup',
        component: GameComponent,
        exact: true,
        strict: true,
        sensitive: true,
        isProtected: false,
    },
    {
        key: 'all',
        path: '*',
        component: GameComponent,
        exact: true,
        strict: true,
        sensitive: true,
    },
];

export default routes;
