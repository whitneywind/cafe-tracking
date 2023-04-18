import { useAppContext } from "../../context/appContext"
import styles from 'styled-components'
import Alert from '../../components/Alert'
import { useState } from 'react'

const Profile = () => {
  const { user, showAlert, updateUser } = useAppContext();
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [location, setLocation] = useState(user.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    updateUser({ username, email, location })
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        {showAlert && <Alert />}
        <p>Profile</p>
        <div class="form-main">
          <div className="form-row">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" className="form-input" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-row">
            <label htmlFor="location">Location</label>
            <input type="text" name="location" className="form-input" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
        </div>
        <button type="submit" class="profile-btn">Save Changes</button>
      </form>
    </Wrapper>
  )
}
export default Profile

const Wrapper = styles.div`
  form {
    max-width: 940px;
    margin: 0 auto;
    background: var(--mainColor1Alt);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding: 1rem 2rem 2rem;
    font-size: 1.4rem;
    border-radius: 0.25rem;
    
  }
  p {
    font-size: 1.8rem;
    margin-top: 0;
  }
  .form-main {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0 1rem;
  }
  .form-row input {
    display: block;
  }
  .profile-btn {
    width: 100%;
    cursor: pointer;
    color: var(--mainBlack);
    background: var(--mainColor5Light);
    border: transparent;
    border-radius: 0.25rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-2);
    display: inline-block;
    margin-top: 40px;
  }

  @media (min-width: 300px) {
    .form-main {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0 1rem;
    }
    .form-input {
    }

  }

  `