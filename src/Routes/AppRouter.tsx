import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes";

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};
