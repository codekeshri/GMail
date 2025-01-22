import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ref, onValue, remove } from 'firebase/database';
import { database } from '../firebase/firebase';
import toast from 'react-hot-toast';

function Sent() {
  // Sample email data
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const emailRef = ref(database, 'inbox');

    onValue(emailRef, (snapshot) => {
      const data = snapshot.val();
      setEmails(Object.values(data));
    });
  }, []);

  // Function to delete an email
  const deleteEmail = async (email) => {
    console.log(emails);
    try {
      const emailToDeleteRef = ref(database, `inbox/${email.id}`);
      await remove(emailToDeleteRef);
      toast('email deleted successfully');
    } catch (err) {
      console.log(err);
    }
  };

  // Function to view an email (for now, it will just log it)
  const viewEmail = (email) => {
    console.log('Viewing Email:', email);
    alert(`Viewing Email:\n\nFrom: ${email.sender}\nSubject: ${email.subject}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Sent</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">To</th>
            <th scope="col">Subject</th>
            <th scope="col">Time</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr key={email.time}>
              <td>{email.to}</td>
              <td>{email.subject}</td>
              <td>
                {(() => {
                  const date = new Date(Number(email.time));
                  return `${date.toLocaleString('en-US', {
                    month: 'short',
                  })} ${date.getDate()},  ${date
                    .getHours()
                    .toString()
                    .padStart(2, '0')}:${date
                    .getMinutes()
                    .toString()
                    .padStart(2, '0')}`;
                })()}
              </td>

              <td>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  onClick={() => viewEmail(email)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => deleteEmail(email)}
                  style={{ marginLeft: '10px' }}
                />
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

export default Sent;
