import * as React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";
import { DynamicListType } from "../types/DynamicList.type";

export const DynamicList = (props: DynamicListType) => {

  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" />
        <TextField source="phone" />
        <TextField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
};
