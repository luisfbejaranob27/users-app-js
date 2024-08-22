import { FormUser } from '../../components/form-user/FormUser.jsx';
import './Register.css';

export const Register = () => {
	return (
		<>
			<div className={'row'}>
				<div className={'col'}>
					<div className={'register'}>
						<div className={'card'}>
							<div className={'card-header'}>
								<h3 className={'card-title'}>Register</h3>
							</div>
							<div className={'card-body'}>
								<FormUser />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
