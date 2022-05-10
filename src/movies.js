import * as React from "react";
import { List, Datagrid, TextField, ImageField } from "react-admin";

export const MovieList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="overview" />
      <TextField source="popularity" />
      <TextField source="rating" />
    </Datagrid>
  </List>
);
