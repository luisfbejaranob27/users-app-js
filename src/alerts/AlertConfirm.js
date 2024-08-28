import Swal from 'sweetalert2';

export const alertConfirm = (title, text, type, functionAction, dispatch, dispatchPayload, titleConfirm, entity, action) => {
	const id = dispatchPayload.payload;

	Swal.fire({
		title,
		text,
		icon: type,
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, delete it!'
	}).then((result) => {
		if (result.isConfirmed) {
			setTimeout(() => {
				functionAction(id);
				dispatch(dispatchPayload);
			}, 500);
			Swal.fire({
				title: titleConfirm,
				text: `Your ${entity} has been ${action}.`,
				icon: 'success'
			});
		}
	});
};
