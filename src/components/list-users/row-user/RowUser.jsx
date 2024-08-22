import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext.jsx';
import PropTypes from 'prop-types';
import './RowUser.css';

export const RowUser = ({ user }) => {
	const { handlerSelectUser, handleRemoveUser } = useContext(UserContext);
	const { id, name, username, email, role } = user;
	return (
		<>
			<tr>
				<td>{name}</td>
				<td>{username}</td>
				<td>{email}</td>
				<td>{role}</td>
				<td className={'row-actions'}>
					<button className={'btn btn-warning'} onClick={() => handlerSelectUser(user)}>
						<span className={'material-symbols-outlined'}>edit</span>
					</button>
					<button className={'btn btn-danger'} onClick={() => handleRemoveUser(id)}>
						<span className={'material-symbols-outlined'}>delete</span>
					</button>
				</td>
			</tr>
		</>
	);
};

RowUser.propTypes = {
	user: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		role: PropTypes.string.isRequired
	})
};
