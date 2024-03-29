import React, {useEffect, Fragment} from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

import Searchbar from "./components/layouts/Searchbar";
import AddBtn from "./components/layouts/AddBtn";
import AddLogModal from "./components/layouts/AddLogModal";
import EditLogModal from "./components/layouts/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import Logs from "./components/logs/Logs";

import {Provider} from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    // Initialize Material JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <Searchbar />
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <div className='container'>
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
