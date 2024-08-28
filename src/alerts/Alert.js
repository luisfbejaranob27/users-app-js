import Swal from 'sweetalert2';

export const alert = (title, text, errors, type) => {
	let list = null;
	if (errors.length > 0) {
		list = document.createElement('div');
		errors.forEach((item) => {
			const div = document.createElement('div');
			div.textContent = item;
			list.appendChild(div);
		});
	}
	Swal.fire({
		title,
		text,
		html: list,
		icon: type
	});
};
