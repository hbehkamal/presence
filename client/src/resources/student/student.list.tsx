import * as React from "react";
import {
  Filter,
  ReferenceInput,
  SelectInput,
  TextInput,
  List,
  Datagrid,
  TextField,
} from "react-admin";

const StudentFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    {/* <ReferenceInput label="User" source="id" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput> */}
  </Filter>
);

const StudentList = (props: any) => {
  return (
    <List {...props} filters={<StudentFilter />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="user_id" />
        <TextField source="department_id" />
      </Datagrid>
    </List>
  );
};

export default StudentList;
