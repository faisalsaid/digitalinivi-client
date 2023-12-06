import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { printLog } from './hook/helper';
import PageNotFound from './components/template/pageNotFound';
import SigninComponent from './feature/signin/SigninComponent';
import SignupComponent from './feature/signup/SignupComponent';
import DashboardComponent from './feature/dashboard/DashboardComponent';
import Layout from './components/template/Layout';
import ProfileComponent from './feature/profile/ProfileComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SigninComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route element={<Layout />}>
            <Route path="/" element={<DashboardComponent />} />
            <Route path="/dashboard" element={<DashboardComponent />} />
            <Route path="/profile" element={<ProfileComponent />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
