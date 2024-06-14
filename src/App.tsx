import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Layout from "./components/Layout";
import NewPost  from "./components/NewPost";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/echoes" />} />
        <Route path="/" element={<Layout />}>
          <Route path="/echoes" element={<Feed />} />
          <Route path="/new-echo" element={<NewPost/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
