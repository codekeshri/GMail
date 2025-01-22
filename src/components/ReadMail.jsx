import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReadMail() {
  const [value, setValue] = useState('');

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Mail</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="toEmail" className="form-label">
            From
          </label>
          <input
            type="email"
            className="form-control"
            id="toEmail"
            placeholder="Recipient's email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Enter subject"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Message</label>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Sender's message here..."
            style={{
              height: '200px',
              marginBottom: '20px',
            }}
          />
        </div>
        <h1 style={{ color: 'white' }}>.</h1>
        <div className="container d-flex justify-content-end">
          <button type="button" className="btn btn-secondary mr-2">
            Discard
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginLeft: '10px' }}
          >
            Reply
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReadMail;
