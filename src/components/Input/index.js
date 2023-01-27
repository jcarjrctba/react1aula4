function Input(props) {
  return (
    <div>
      <label for="input">{props.label}</label>
      <input type={props.type} name="input" />
    </div>
  );
}

export default Input;
