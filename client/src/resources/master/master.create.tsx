import * as React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const MasterCreate = (props: any) => {

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="user_id" />
        <TextInput source="department_id" />
      </SimpleForm>
    </Create>
  );
};

export default MasterCreate;
