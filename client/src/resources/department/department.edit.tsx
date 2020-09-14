import * as React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const Department = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Edit>
  );
};

export default Department;
