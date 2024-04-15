import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Post from "../Pages/Post";
import MyJobs from "../Pages/MyJobs";
import UpdateJobs from "../Pages/UpdateJobs";
import Login from "../components/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {path:"/", element: <Home />},
        {path:"/post-job", element: <Post/>},
        {path:"/my-job", element: <MyJobs/>},
        {path:"/login", element: <Login/>},
        {path:"/edit-job/:id", element: <UpdateJobs/>, loader:({params})=> fetch(`http://localhost:5001/job/${params.id}`)},
      ]
    },
  ]);

export default router;