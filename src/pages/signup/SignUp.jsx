import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import registerImg from '../../assets/sign_up.svg';

const SignUp = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		navigate('/login');
	};

	return (
		<section className='auth'>
			<img src={registerImg} alt='' />

			<div className='auth-container'>
				<form onSubmit={handleSubmit}>
					<h2>Register</h2>
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
							type='email'
							id='email'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
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
						Register
					</button>
				</form>

				<p>
					Already have an account? <Link to='/login'>Login</Link>
				</p>
			</div>
		</section>
	);
};

export default SignUp;
