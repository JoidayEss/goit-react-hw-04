import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={s.container}>
      <p className={s.error}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
