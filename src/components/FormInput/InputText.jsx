/* eslint-disable react/prop-types */

const InputText = ({ type= "text", onChange, name, value, placeholder}) => {
  return (
    <div className="">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded-sm w-full px-2 py-1"
        required
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputText