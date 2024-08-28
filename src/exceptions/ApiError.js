export class ApiError extends Error {
	constructor(message, errors = []) {
		super(message);
		this.name = this.constructor.name;
		this.errors = errors;
		Error.captureStackTrace(this, this.constructor);
	}
}
