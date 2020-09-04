import * as React from "react";
import { List, Datagrid, TextField } from "react-admin";
import { DynamicListType } from "../types/DynamicList.type";
import { connect } from "react-redux";

import { getFields } from "../core/meta";

const DynamicList = (props: DynamicListType) => {
  const { resource } = props;

  const fields = getFields(resource);

  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        {fields &&
          fields.map((field: any) => {
            return <TextField source={field} />;
          })}
      </Datagrid>
    </List>
  );
};

const mapStateToProps = (state: any, props: DynamicListType) => {
  const { resource } = props;
  if (!state.admin.resources[resource]) return {};
  return {
    data: state.admin.resources[resource].data,
  };
};

export default connect(mapStateToProps, null)(DynamicList);
