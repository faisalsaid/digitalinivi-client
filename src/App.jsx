import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { printLog } from './hook/helper';
import PageNotFound from './components/template/pageNotFound';
import SigninComponent from './feature/signin/SigninComponent';
import SignupComponent from './feature/signup/SignupComponent';
import DashboardComponent from './feature/dashboard/DashboardComponent';
import Layout from './components/template/Layout';
import ProfileComponent from './feature/profile/ProfileComponent';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import TemplatesComponent from './feature/templates/TemplatesComponent';
import VIewTemplateComponents from './feature/templates/VIewTemplateComponents';
import MasterTemplate from './feature/templates/invitationTemplate/MasterTemplate';
import StoreComponent from './feature/store/StoreComponent';
import StoreDetails from './feature/store/StoreDetails';
import OrderComponent from './feature/order/OrderComponent';

function App() {
  const { curentUser } = useSelector((state) => state.user);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<div>Landing Page</div>} />
          <Route path="home" element={<div>Landing Page</div>} />
          <Route element={<PrivateRoute authenticated={!curentUser} />}>
            <Route path="signin" element={<SigninComponent />} />
            <Route path="signup" element={<SignupComponent />} />
          </Route>
          <Route element={<PrivateRoute authenticated={curentUser} />}>
            <Route element={<Layout />}>
              <Route path="dashboard" element={<DashboardComponent />} />
              <Route path="store" element={<StoreComponent />} />
              <Route path="store/:storeId" element={<StoreDetails />} />
              <Route path="profile" element={<ProfileComponent />} />
            </Route>
          </Route>
          <Route path="template" element={<TemplatesComponent />} />
          <Route path="template/:id" element={<VIewTemplateComponents />} />
          <Route path=":store">
            <Route path=":order" element={<OrderComponent />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
