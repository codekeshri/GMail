import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from '../pages/auth.jsx';
import NotFound from '../pages/NotFound';
import Layout from '../shared/Layout/Layout';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
              </Routes>
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
