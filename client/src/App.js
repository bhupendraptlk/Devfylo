import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from './Components/Home';
import Profiles from './Components/Profiles';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Error from './Components/Error';
import TargetProfile from './Components/TargetProfile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/register" element={<Signup />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/profile/all" element={<Profiles />} />
      <Route path="/profile/:username" element={<TargetProfile />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
