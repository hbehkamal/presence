import * as React from "react";
import { Edit, SimpleForm, TextInput, DateField } from "react-admin";

const ClassEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateField source="date" />
        <TextInput source="session" />
        <TextInput source="course_id" />
        <TextInput source="studnet_id" />
        <TextInput source="master_id" />
        <TextInput source="department_id" />
      </SimpleForm>
    </Edit>
  );
};

export default ClassEdit;
