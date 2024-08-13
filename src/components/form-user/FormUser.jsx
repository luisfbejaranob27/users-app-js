import { roles } from './Roles.js';
import './FormUser.css';

export const FormUser = () => {
  return (
    <>
      <form className={'form-user'}>
        <div className={'row'}>
          <div className={'col'}>
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input type="text" className="form-control" id="name" name="name" />
          </div>
          <div className={'col'}>
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input type="text" className="form-control" id="username" name="username" />
          </div>
          <div className={'col'}>
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input type="password" className="form-control" id="password" name="password" />
          </div>
          <div className={'col'}>
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input type="email" className="form-control" id="email" name="email" />
          </div>
          <div className={'col'}>
            <label htmlFor="role" className="form-label">
              Role:
            </label>
            <select className="form-select" aria-label="role">
              {roles.map((role) => (
                <option key={role.id} value={role.name}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={'row'}>
          <div className={'col form-buttons'}>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button type="button" className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
