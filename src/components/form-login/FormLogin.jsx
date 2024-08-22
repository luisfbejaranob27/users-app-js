import PropTypes from 'prop-types';
import './FormLogin.css';

export const FormLogin = ({ handleSubmit, handleChange }) => {
	return (
		<>
			<div className={'card w-25'}>
				<div className={'card-header'}>
					<h3 className={'card-title'}>Login</h3>
				</div>
				<form onSubmit={handleSubmit}>
					<div className={'card-body'}>
						<div className={'row login-inputs'}>
							<div className={'col'}>
								<label htmlFor={'username'} className={'form-label'}>
									Username:
								</label>
								<input type={'text'} className={'form-control'} id={'username'} name={'username'} onChange={handleChange} />
							</div>
							<div className={'col'}>
								<label htmlFor={'password'} className={'form-label'}>
									Password:
								</label>
								<input type={'password'} className={'form-control'} id={'password'} name={'password'} onChange={handleChange} />
							</div>
						</div>
					</div>
					<div className="card-footer">
						<button type={'submit'} className={'btn btn-primary'}>
							Login
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

FormLogin.propTypes = {
	handleSubmit: PropTypes.func,
	handleChange: PropTypes.func
};
