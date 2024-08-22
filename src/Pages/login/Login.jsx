import { FormLogin } from '../../components/form-login/FormLogin.jsx';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = () => {
	const navigate = useNavigate();

	const handleRegister = () => {
		navigate('/register');
	};

	return (
		<>
			<div className={'container-fluid login'}>
				<div className={'row '}>
					<div className={'col'}>
						<FormLogin />
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
