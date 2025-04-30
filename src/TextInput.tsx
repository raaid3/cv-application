export default function TextInput({
  labelName,
  name,
  changeHandler,
  val,
}: {
  labelName: string;
  name: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  val: string;
}) {
  return (
    <div className="mb-4">
      <label
        htmlFor={labelName}
        className="block text-sm font-medium text-black mb-1 dark:text-dark-font"
      >
        {labelName}
      </label>
      <input
        name={name}
        type="text"
        value={val}
        onChange={changeHandler}
        // required={true}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
      />
    </div>
  );
}
