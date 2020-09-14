import * as React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const CourseCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="unit" />
        <TextInput source="department_id" />
        <TextInput source="master_id" />
      </SimpleForm>
    </Create>
  );
};

export default CourseCreate;
