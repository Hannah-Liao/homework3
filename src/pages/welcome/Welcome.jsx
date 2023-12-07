import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext.js';

const Welcome = () => {
	const { dispatch } = useContext(AuthContext);
	const navigate = useNavigate();

	const logout = () => {
		dispatch({ type: 'LOGOUT' });
		navigate('/');
	};

	return (
		<section className='welcome'>
			<h1>Welcome! You log in successfully!</h1>

			<button className='logout_btn' onClick={logout}>
				SignOut
			</button>
		</section>
	);
};

export default Welcome;
