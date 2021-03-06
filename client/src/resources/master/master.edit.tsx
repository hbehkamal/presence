import * as React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const MasterEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="user_id" />
        <TextInput source="department_id" />
      </SimpleForm>
    </Edit>
  );
};

export default MasterEdit;
