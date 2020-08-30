import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { DynamicList } from "./components/list";
const dataProvider = jsonServerProvider("http://localhost:3001");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="user" list={DynamicList} />
    <Resource name="student" list={DynamicList} />
    <Resource name="master" list={DynamicList} />
    <Resource name="class" list={DynamicList} />
    <Resource name="department" list={DynamicList} />
    <Resource name="course" list={DynamicList} />
  </Admin>
);

export default App;
