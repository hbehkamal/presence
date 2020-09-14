import * as React from "react";
import { Create, SimpleForm, TextInput, DateField } from "react-admin";

const ClassCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateField source="date" />
        <TextInput source="session" />
        <TextInput source="course_id" />
        <TextInput source="studnet_id" />
        <TextInput source="master_id" />
        <TextInput source="department_id" />
      </SimpleForm>
    </Create>
  );
};

export default ClassCreate;
