import * as React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const DepartmentCreate = (props: any) => {

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  );
};

export default DepartmentCreate;
