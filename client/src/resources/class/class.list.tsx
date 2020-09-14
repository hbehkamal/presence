import * as React from "react";
import {
  Filter,
  ReferenceInput,
  SelectInput,
  DateField,
  TextInput,
  List,
  Datagrid,
  TextField,
} from "react-admin";

const ClassFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    {/* <ReferenceInput label="User" source="id" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput> */}
  </Filter>
);

const ClassList = (props: any) => {
  return (
    <List {...props} filters={<ClassFilter />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <DateField source="date" />
        <TextField source="session" />
        <TextField source="course_id" />
        <TextField source="studnet_id" />
        <TextField source="master_id" />
        <TextField source="department_id" />
      </Datagrid>
    </List>
  );
};

export default ClassList;
