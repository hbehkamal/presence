import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import DynamicList from "./components/DynamicList";
import DynamicEdit from "./components/DynamicEdit";
import UserList from "./resources/user/user.list";
import UserEdit from "./resources/user/user.edit";
import UserCreate from "./resources/user/user.create";
import Dashboard from "./components/dashboard";

const dataProvider = jsonServerProvider("http://localhost:3001");
const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate} />
    <Resource name="student" list={DynamicList} edit={DynamicEdit} />
    <Resource name="master" list={DynamicList} edit={DynamicEdit} />
    <Resource name="class" list={DynamicList} edit={DynamicEdit} />
    <Resource name="department" list={DynamicList} edit={DynamicEdit} />
    <Resource name="course" list={DynamicList} edit={DynamicEdit} />
  </Admin>
);

export default App;
