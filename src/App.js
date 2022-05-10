import * as React from "react";
import { Admin, Resource } from "react-admin";

import Provider from "./provider/getList";
import { MovieList } from "./movies";

const dataProvider = Provider;

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="movies" list={MovieList} />
  </Admin>
);

export default App;
