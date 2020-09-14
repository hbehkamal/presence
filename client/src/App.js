import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import Dashboard from "./components/dashboard";
import authProvider from "./core/authProvider";

import UserList from "./resources/user/user.list";
import UserEdit from "./resources/user/user.edit";
import UserCreate from "./resources/user/user.create";

import StudentList from "./resources/student/student.list";
import StudentEdit from "./resources/student/student.edit";
import StudentCreate from "./resources/student/student.create";

import MasterList from "./resources/master/master.list";
import MasterEdit from "./resources/master/master.edit";
import MasterCreate from "./resources/master/master.create";

import DepartmentList from "./resources/department/department.list";
import DepartmentEdit from "./resources/department/department.edit";
import DepartmentCreate from "./resources/department/department.create";

import ClassList from "./resources/class/class.list";
import ClassEdit from "./resources/class/class.edit";
import ClassCreate from "./resources/class/class.create";

const dataProvider = jsonServerProvider("http://localhost:3001");
const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Dashboard}
    authProvider={authProvider}
  >
    <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate} />
    <Resource
      name="student"
      list={StudentList}
      edit={StudentEdit}
      create={StudentCreate}
    />
    <Resource
      name="master"
      list={MasterList}
      edit={MasterEdit}
      create={MasterCreate}
    />
    <Resource
      name="department"
      list={DepartmentList}
      edit={DepartmentEdit}
      create={DepartmentCreate}
    />
    <Resource
      name="class"
      list={ClassList}
      edit={ClassEdit}
      create={ClassCreate}
    />
    {/* <Resource name="course" list={DynamicList} edit={DynamicEdit} /> */}
  </Admin>
);

export default App;
