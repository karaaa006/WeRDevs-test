import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import "./App.css";
import { fetchCurrency } from "./redux/operations/currencyOperations";
import { AppRouter } from "./Routes/AppRouter";
import { Layout } from "./Routes/Layout";

function App() {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
