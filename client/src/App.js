import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import Dashboard from "./components/dashboard";
import authProvider from "./core/authProvider";

import UserList from "./resources/user/user.list";
import UserEdit from "./resources/user/user.edit";
import UserCreate from "./resources/user/user.create";

const dataProvider = jsonServerProvider("http://localhost:3001");
const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider}>
    <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate} />
    {/* <Resource name="student" list={DynamicList} edit={DynamicEdit} />
    <Resource name="master" list={DynamicList} edit={DynamicEdit} />
    <Resource name="class" list={DynamicList} edit={DynamicEdit} />
    <Resource name="department" list={DynamicList} edit={DynamicEdit} />
    <Resource name="course" list={DynamicList} edit={DynamicEdit} /> */}
  </Admin>
);

export default App;
