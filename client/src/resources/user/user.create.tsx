import * as React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const UserCreate = (props: any) => {

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="firstname" />
        <TextInput source="lastname" />
        <TextInput source="role" />
        <TextInput source="status" />
        <TextInput source="username" />
        <TextInput source="password" />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
