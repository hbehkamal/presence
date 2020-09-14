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

const CourseFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    {/* <ReferenceInput label="User" source="id" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput> */}
  </Filter>
);

const CourseList = (props: any) => {
  return (
    <List {...props} filters={<CourseFilter />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="unit" />
        <TextField source="department_id" />
        <TextField source="master_id" />
      </Datagrid>
    </List>
  );
};

export default CourseList;
