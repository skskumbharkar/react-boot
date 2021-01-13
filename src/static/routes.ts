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
    },
    {
        key: 'game',
        path: '/game',
        component: GameComponent,
        exact: true,
        strict: true,
        sensitive: true,
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
