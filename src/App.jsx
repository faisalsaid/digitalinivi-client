import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { printLog } from './hook/helper';
import PageNotFound from './components/template/pageNotFound';
import SigninComponent from './feature/signin/SigninComponent';
import SignupComponent from './feature/signup/SignupComponent';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SigninComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
