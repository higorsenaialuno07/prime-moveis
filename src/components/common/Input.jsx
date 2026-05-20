function Input({
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      className="default-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input