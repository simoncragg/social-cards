import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import Layout from './components/Layout';
import NewPost from './components/NewPost';
import SocialFeed from './components/SocialFeed';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/echoes" replace/>}/>
      <Route path="/" element={<Layout />}>
        <Route path="/echoes" element={<SocialFeed />} />
        <Route path="/new-echo" element={<NewPost />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
};

export default App;
