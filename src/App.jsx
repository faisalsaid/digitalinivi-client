import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { printLog } from './hook/helper';
import PageNotFound from './components/template/pageNotFound';
import SigninComponent from './feature/signin/SigninComponent';
import SignupComponent from './feature/signup/SignupComponent';
import DashboardComponent from './feature/dashboard/DashboardComponent';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SigninComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
