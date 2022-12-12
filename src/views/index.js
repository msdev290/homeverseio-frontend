import { Route, Redirect, Switch } from 'react-router-dom';
import { PUBLIC_PREFIX } from 'configs/app-config';
import PublicLayout from 'layouts/public-layout';
import NotFoundPage from './public/404';

export default function Views() {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to={PUBLIC_PREFIX} />
            </Route>
            <Route path={PUBLIC_PREFIX}>
                <PublicLayout />
            </Route>
            <Route path=''>
                <NotFoundPage />
            </Route>
        </Switch>
    )
}