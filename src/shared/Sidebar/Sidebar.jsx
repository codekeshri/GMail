import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const goToInboxPage = () => {
    navigate('/inbox');
  };
  const goToSentPage = () => {
    navigate('/sent');
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-grey">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-black min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none"
              ></a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i>{' '}
                    <span
                      className="ms-1 d-none d-sm-inline"
                      onClick={goToInboxPage}
                    >
                      Inbox
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-speedometer2"></i>
                    <span
                      className="ms-1 d-none d-sm-inline"
                      onClick={goToSentPage}
                    >
                      Sent
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
