import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Layout from "./components/Layout";
import NewPost  from "./components/NewPost";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Feed />} />
          <Route path="/new-post" element={<NewPost/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
