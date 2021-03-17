import React from 'react';
import {
Route, Switch,
 Redirect
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoudPage from '../pages/NotFoudPage';
import ProfilePage from '../pages/ProfilePage';

export const DefaultRoutes: React.FC = () => {
    return (
            <Switch>
                <Route path='/home' exact children={<HomePage/>}/>
                <Route path='/profile' exact children={<ProfilePage/>}/>
                <Route path='/404' exact children={<NotFoudPage/>}/>
                <Route path='' children={<Redirect to='/404'/>} />
            </Switch>
        
    )
}