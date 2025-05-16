import styles from "./Button.module.css";

function Button({ text, onClick, className, type = "submit" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className || ""}`}
    >
      {text}
    </button>
  );
}

export default Button;
