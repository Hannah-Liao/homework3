import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import loginImg from '../../assets/login.svg';
import { AuthContext } from '../../context/AuthContext.js';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (user.user === username) {
			if (user.pw === password) {
				navigate('/welcome');
			} else {
				alert('Wrong password, please try again');
			}
		} else {
			alert('No user name found,Please try again');
		}
	};

	return (
		<section className='auth'>
			<img src={loginImg} alt='login imgage' />

			<div className='auth-container'>
				<form onSubmit={handleSubmit}>
					<h2>Login</h2>
					<div className='form-group'>
						<input
							type='text'
							id='username'
							placeholder='username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div className='form-group'>
						<input
							type='password'
							id='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button className='auth_btn' type='submit'>
						Login
					</button>
				</form>

				<p>
					Don't have an account? <Link to='/register'>Create</Link>
				</p>
			</div>
		</section>
	);
};

export default Login;
