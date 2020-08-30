import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("http://localhost:3001");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="user" list={ListGuesser} />
    <Resource name="student" list={ListGuesser} />
    <Resource name="master" list={ListGuesser} />
    <Resource name="class" list={ListGuesser} />
    <Resource name="department" list={ListGuesser} />
    <Resource name="course" list={ListGuesser} />
  </Admin>
);

export default App;
