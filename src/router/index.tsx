import { createBrowserRouter } from "react-router-dom";
import ProjectList from "../pages/project/project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectList />,
  },

]);

export default router