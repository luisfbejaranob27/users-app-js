import { FormLogin } from '../../components/form-login/FormLogin.jsx';
import { useFormLogin } from '../../hooks/useFormLogin.js';
import PropTypes from 'prop-types';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export const Login = ({ handleAuthenticated }) => {
	const { handleChange, handleSubmit } = useFormLogin(handleAuthenticated);
	const navigate = useNavigate();

	const handleRegister = () => {
		navigate('/register');
	};

	return (
		<>
			<div className={'container-fluid login'}>
				<div className={'row '}>
					<div className={'col'}>
						<FormLogin handleSubmit={handleSubmit} handleChange={handleChange} />
					</div>
					<div className={'col'}>
						<div className={'btn-register'}>
							<button type={'button'} className={'btn btn-secondary'} onClick={handleRegister}>
								Register
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

Login.propTypes = {
	handleAuthenticated: PropTypes.func.isRequired
};
