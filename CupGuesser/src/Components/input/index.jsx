export const Input = ({ name, label, ...props }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-bold text-grey-500 mb-2">
        {label}
      </label>
      <input
        className="p-3 border border-grey-700 rounded-xl"
        {...props}
        id={name}
        name={name}
      />
    </div>
  );
};
