import { useState } from "react"
import Wrapper from '../assets/wrappers/RegisterWrapper.js'
import coffeeLogo from "../assets/images/coffee.svg"
import Alert from "../components/Alert"
import { useAppContext } from "../context/appContext.js"


const initialUserState = {
    username: '',
    email: '',
    password: '',
    isMember: false,
}

const Register = () => {
    const [userValues, setUserValues] = useState(initialUserState);

    const { 
        isLoading,
        showAlert,
        showDangerAlert,
        showSuccessAlert,
        clearAlert, 
    } = useAppContext();

    const toggleIsMember = () => {
        setUserValues({...userValues, isMember: !userValues.isMember});
    }

    const onChange = (e) => {
        setUserValues({...userValues, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, isMember } = userValues;
        if ((!username && !isMember) || !email || !password ) {
            showDangerAlert();
            clearAlert()
            toggleIsMember();
            return;
        }
        showSuccessAlert();
        clearAlert();
        console.log(userValues);
    }

  return (
    <Wrapper>
        <form className="form" onSubmit={onSubmit}>
            <img src={coffeeLogo} className="logo" alt="logo" />
            <h1>Login</h1>
            {showAlert && <Alert />}

            {userValues.isMember && (
                <div className="form-row">
                <label htmlFor="username" className="form-label">username</label>
                <input type="text" name="username" value={userValues.username} onChange={onChange} className="form-input" />
            </div>
            )}
            <div className="form-row">
                <label htmlFor="email" className="form-label">email</label>
                <input type="text" name="email" value={userValues.email} onChange={onChange} className="form-input" />
            </div>
            <div className="form-row">
                <label htmlFor="password" className="form-label">password</label>
                <input type="password" name="password" value={userValues.password} onChange={onChange} className="form-input" />
            </div>

            <button type='submit' className="btn btn-submit" onClick={toggleIsMember}>{userValues.isMember ? 'Login' : 'Register'}</button>

            <button type="button" onClick={toggleIsMember} className="member-btn">{userValues.isMember ? 'Already a member?' : 'Not a member yet?'}</button>
        </form>
    </Wrapper>
  )
}

export default Register