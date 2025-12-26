export default function TextInput({
  labelClassName,
  labelText,
  inputId,
  inputType,
  inputPlaceholder,
  inputName,
  handleChange,
  value,
}) {
  return (
    <>
      <label htmlFor={inputId} className={labelClassName}>
        {labelText}
      </label>
      <input
        id={inputId}
        type={inputType}
        placeholder={inputPlaceholder}
        name={inputName}
        onChange={handleChange}
        value={value}
      />
    </>
  );
}
