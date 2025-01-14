/* eslint-disable no-unused-vars */
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    navigate('/');
    localStorage.removeItem('idToken');
    localStorage.removeItem('localId');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('email');
  };

  const verifyHandler = async () => {
    try {
      await axios.post(
        import.meta.env.VITE_VERIFY_EMAIL,
        {
          requestType: 'VERIFY_EMAIL',
          idToken: localStorage.idToken,
        },
        { headers: { 'Content-Type': 'application/json' } }
      );
      toast.success(
        'Verification link has been sent to your email successfully'
      );
      alert('Verification link has been sent to your email successfully');
    } catch (error) {
      toast.error('Unable to send mail', error);
    }
  };

  const editDetails = (e) => {
    e.preventDefault();
    navigate('/profile');
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand"
          href="#"
          style={{ marginLeft: '60px', fontWeight: 'bold' }}
        >
          GMail
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <div className="justify-content-end">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="#"
                  style={{ marginLeft: '1600px' }}
                  onClick={logout}
                >
                  Logout
                </a>
              </li>
            </div>
            {/* </div> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
