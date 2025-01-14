import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Inbox() {
  // Sample email data
  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: 'example1@example.com',
      subject: 'Meeting Reminder',
      time: '10:00 AM',
    },
    {
      id: 2,
      sender: 'example2@example.com',
      subject: 'Invoice #12345',
      time: '12:30 PM',
    },
    {
      id: 3,
      sender: 'example3@example.com',
      subject: 'Follow-up on Proposal',
      time: '3:15 PM',
    },
  ]);

  // Function to delete an email
  const deleteEmail = (id) => {
    setEmails(emails.filter((email) => email.id !== id));
  };

  // Function to view an email (for now, it will just log it)
  const viewEmail = (email) => {
    console.log('Viewing Email:', email);
    alert(`Viewing Email:\n\nFrom: ${email.sender}\nSubject: ${email.subject}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Inbox</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">From</th>
            <th scope="col">Subject</th>
            <th scope="col">Time</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr key={email.id}>
              <td>{email.sender}</td>
              <td>{email.subject}</td>
              <td>{email.time}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={() => viewEmail(email)}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteEmail(email.id)}
                  style={{ marginLeft: '10px' }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {emails.length === 0 && (
        <p className="text-center text-muted mt-3">Your inbox is empty!</p>
      )}
    </div>
  );
}

export default Inbox;
