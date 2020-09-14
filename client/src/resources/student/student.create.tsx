import * as React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const StudentCreate = (props: any) => {

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="user_id" />
        <TextInput source="department_id" />
      </SimpleForm>
    </Create>
  );
};

export default StudentCreate;
