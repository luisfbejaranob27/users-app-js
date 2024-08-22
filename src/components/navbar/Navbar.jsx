import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

export const Navbar = ({ auth, handleAuthenticated }) => {
	const { username } = auth;
	return (
		<>
			<nav className={'navbar navbar-expand-lg bg-body-tertiary'} data-bs-theme={'dark'}>
				<div className={'container-fluid'}>
					<h2>Cart App:</h2>
					<button
						className={'navbar-toggler'}
						type={'button'}
						data-bs-toggle={'collapse'}
						data-bs-target={'#navbarSupportedContent'}
						aria-controls={'navbarSupportedContent'}
						aria-expanded={'false'}
						aria-label={'Toggle navigation'}
					>
						<span className={'navbar-toggler-icon'}></span>
					</button>
					<div className={'collapse navbar-collapse'} id={'navbarSupportedContent'}>
						<ul className={'navbar-nav me-auto mb-2 mb-lg-0'}>
							<li className={'nav-item'}>
								<NavLink className={'nav-link'} to={'/users'}>
									Home
								</NavLink>
							</li>
						</ul>
					</div>
					<div className={'user-logout text-end'}>
						<span>{username}</span>
						<button type={'button'} className={'btn btn-secondary'} onClick={() => handleAuthenticated({ isAuthenticated: false })}>
							Logout
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

Navbar.propTypes = {
	auth: PropTypes.shape({
		username: PropTypes.string.isRequired,
		isAuthenticated: PropTypes.bool.isRequired
	}),
	handleAuthenticated: PropTypes.func.isRequired
};
