import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from '../pages/Login/Form'
import UserList from '../pages/UserList/users-list'
import AddUser from '../pages/AddUsers/add-user'
import UserDetails from '../pages/userDetails/user-details'

const Router = ()=>{
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path={'/'}>
                <Form/>
            </Route>
            <Route exact path={'/userlist'} component={UserDetails}>
                <UserList/>
            </Route>
            <Route exact path={'/userdetails'}>
                <UserDetails/>
            </Route>
            <Route exact path={'/adduser'}>
                <AddUser/>
            </Route>
           
        </Switch>
        </BrowserRouter>
    )
}

export default Router