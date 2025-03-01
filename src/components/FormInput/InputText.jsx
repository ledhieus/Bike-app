/* eslint-disable react/prop-types */

const InputText = ({ type= "text", label, placeholder="", name, register, errors, className="text-[18px]"}) => {
  return (
    <div className="mb-2">
      <p className={`mb-1 text-dark-100 ${className}`}>{label}<span className="text-red-500">*</span></p>
      <input
        {...register(name, {required: `${label} không được bỏ trống`})}
        type={type}
        className={`border rounded-sm w-full px-2 py-1 ${errors[name] ? "border-red-500" : "border-gray-300"}`}
        placeholder={placeholder}
      />
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
    </div>
  )
}

export default InputText