import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Properties from "./components/Properties";

const router = createBrowserRouter([
  { index: true, element: <App /> },
  { path: "location/:id", element: <Properties /> },
]);

export default router;
