import React from "react";
import {FormComponent} from "./components/pages/Login/Form";
import UserList from "./components/pages/UserList/users-list";
import AddUser from "./components/pages/AddUsers/add-user";
import Router from "./components/routes/Router";
const App = () => {
  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
