import * as React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const StudentEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="user_id" />
        <TextInput source="department_id" />
      </SimpleForm>
    </Edit>
  );
};

export default StudentEdit;
