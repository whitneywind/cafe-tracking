import { useAppContext } from "../../context/appContext"
import Alert from '../../components/Alert'
import { useState } from 'react'
import Wrapper from '../../assets/wrappers/ProfileWrapper'

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