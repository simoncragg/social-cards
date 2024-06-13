import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NewPost  from "./components/NewPost";
import SocialFeed from "./components/SocialFeed";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<SocialFeed />} />
          <Route path="/new-post" element={<NewPost/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
