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

const UserFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    {/* <ReferenceInput label="User" source="id" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput> */}
  </Filter>
);

const UserList = (props: any) => {
  return (
    <List {...props} filters={<UserFilter />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="firstname" />
        <TextField source="lastname" />
        <TextField source="role" />
        <TextField source="username" />
        <TextField source="password" />
        <TextField source="status" />
      </Datagrid>
    </List>
  );
};

export default UserList;
