/* eslint-disable no-unused-vars */
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { set, ref } from 'firebase/database';
import { database } from '../firebase/firebase';

function Compose() {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.email?.status);

  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    const emailRef = ref(database, `inbox/${Date.now().toString()}`);
    const time = Date.now().toString();
    set(emailRef, { to, subject, message, time, id: Number(time) });
    toast('Email sent successfully');
    handleDiscard();
  };

  const handleDiscard = () => {
    setTo('');
    setSubject('');
    setMessage('');
  };

  // ReactQuill provides string directly for input
  const handleMessageChange = (message) => {
    setMessage(message);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Compose Mail</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="toEmail" className="form-label">
            To
          </label>
          <input
            type="email"
            className="form-control"
            id="toEmail"
            placeholder="Recipient's email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Message</label>
          <ReactQuill
            theme="snow"
            value={message}
            onChange={handleMessageChange}
            placeholder="Write your message here..."
            style={{
              height: '200px',
              marginBottom: '20px',
            }}
          />
        </div>
        <h1 style={{ color: 'white' }}>.</h1>
        <div className="container d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={handleDiscard}
          >
            Discard
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginLeft: '10px' }}
            onClick={handleSend}
          >
            {status === 'sending' ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Compose;
