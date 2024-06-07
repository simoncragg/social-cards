import './App.css';
import NewPost from './components/NewPost';
import SocialFeed from './components/SocialFeed';
import {
  Navigate,
  Route,
  Routes
} from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/echos" replace/>}/>
      <Route path="/echos" element={<SocialFeed />} />
      <Route path="/new-echo" element={<NewPost />} />
    </Routes>
  )
};

export default App;
