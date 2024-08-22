import Swal from 'sweetalert2';

export const alert = (title, text, type) => {
	Swal.fire({
		title,
		text,
		icon: type
	});
};
