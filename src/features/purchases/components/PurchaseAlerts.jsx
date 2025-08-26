import Sweet from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySweet = withReactContent(Sweet);
const isDarkMode = () => {
  return (
    document.body.dataset.theme === "dark-mode" ||
    document.body.classList.contains("dark-mode")
  );
};

export const ShowSuccess = ({ message } = {}) => {
  const dark = isDarkMode();

  MySweet.fire({
    // text: "You clicked the button!",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 2000,
    background: dark ? "#1e1e1e" : "#fff",
    color: dark ? "#f1f1f1" : "#000",
    iconColor: dark ? "#4caf50" : "#198754",
  });
};

export const ShowDelete = (purchase) => {
  const dark = isDarkMode();
  return MySweet.fire({
    title: (
      <span>
        Por favor "<strong>{purchase.name}</strong>" para confirmar
      </span>
    ),
    input: "text",
    showCancelButton: true,
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#d33",
    focusCancel: true,
    background: dark ? "#1e1e1e" : "#fff",
    color: dark ? "#f1f1f1" : "#000",
    iconColor: dark ? "#4caf50" : "#198754",
    preConfirm: (value) => {
      if (value !== purchase.name) {
        Sweet.showValidationMessage("Type wrong");
        return false;
      }
      return true;
    },
  });
};
