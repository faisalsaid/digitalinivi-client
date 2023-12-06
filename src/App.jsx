import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { printLog } from './hook/helper';
import PageNotFound from './components/template/pageNotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Halo Bandsu</h1>} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
