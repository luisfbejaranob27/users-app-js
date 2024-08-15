import Swal from 'sweetalert2';

export const alertConfirm = (title, text, type, dispatch, payload, titleConfirm, entity, action) => {
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
        dispatch(payload);
      }, 500);
      Swal.fire({
        title: titleConfirm,
        text: `Your ${entity} has been ${action}.`,
        icon: 'success'
      });
    }
  });
};
