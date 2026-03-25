import Swal from "sweetalert2";

export const showAlert = (title: string) => {
  console.log(title);
  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  }).fire({
    icon: "success",
    title: title,
  });
};
