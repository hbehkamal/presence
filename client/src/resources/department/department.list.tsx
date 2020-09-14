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

const DepartmentFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    {/* <ReferenceInput label="User" source="id" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput> */}
  </Filter>
);

const DepartmentList = (props: any) => {
  return (
    <List {...props} filters={<DepartmentFilter />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
      </Datagrid>
    </List>
  );
};

export default DepartmentList;
