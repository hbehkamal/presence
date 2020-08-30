import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { ListComponent } from "./components/list";
const dataProvider = jsonServerProvider("http://localhost:3001");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="user" list={ListComponent} />
    <Resource name="student" list={ListComponent} />
    <Resource name="master" list={ListComponent} />
    <Resource name="class" list={ListComponent} />
    <Resource name="department" list={ListComponent} />
    <Resource name="course" list={ListComponent} />
  </Admin>
);

export default App;
