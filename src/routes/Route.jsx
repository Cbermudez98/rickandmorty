import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { CharacterPage } from "../../pages/CharacterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/character/:id",
    element: <CharacterPage/>
  }
]);

export default router;