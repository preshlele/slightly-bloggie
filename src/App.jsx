import { Routes, Route } from "react-router-dom";
import "./index.css";
import PostLists from "./pages/PostLists";
import Posts from "./pages/Posts";
import EditPost from "./pages/EditPost";

function App() {

  return (<>
    <Routes>
      <Route path='/' element={<PostLists />}/>
      <Route path='/post/:id' element={<Posts />}/>
      <Route path='/post/:id/edit' element={<EditPost />}/>
    </Routes>
  </>);
}

export default App;
