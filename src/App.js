import "./App.css";
import React, { useState } from "react";
import { ReactDOM } from "react-dom";
import Title from "./components/Title";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store.js";

function App() {
  const [user, setUser] = useState({
    name: "Sumit Kumar Shaw",
    email: "sumitshaw907@gmail.com",
  });
  return (
    <div className="bg-[#FFFFFF] font-sans overflow-x-hidden">
      <Provider store={store}>
        <userContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <Title />
          <Outlet />
          <Footer />
        </userContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
