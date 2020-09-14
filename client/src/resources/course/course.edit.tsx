import * as React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const CourseEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="unit" />
        <TextInput source="department_id" />
        <TextInput source="master_id" />
      </SimpleForm>
    </Edit>
  );
};

export default CourseEdit;
