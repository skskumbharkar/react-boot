import { Route } from 'models/route';
import { GameComponent } from 'components/game';

const routes: Route[] = [
    {
        key: 'home',
        path: '/home',
        component: GameComponent,
        exact: true,
        strict: true,
        sensitive: true,
    },
];

export default routes;
