import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from '../pages/auth.jsx';
import NotFound from '../pages/NotFound';
import Layout from '../shared/Layout/Layout';
import Compose from '../components/Compose.jsx';
import Inbox from '../components/Inbox.jsx';
import Sent from '../components/Sent.jsx';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/compose" element={<Compose />} />
                <Route path="/sent" element={<Sent />} />
                <Route path="/inbox" element={<Inbox />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
