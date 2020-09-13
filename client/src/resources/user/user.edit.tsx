import * as React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = (props: any) => {

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="firstname" />
        <TextInput source="lastname" />
        <TextInput source="role" />
        <TextInput source="status" />
        <TextInput source="username" />
        <TextInput source="password" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
