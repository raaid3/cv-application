export default function CVPreview({
  formData,
  editEventHandler,
}: {
  formData: {
    general: { name: string; email: string; phone: string };
    education: { school: string; degree: string; graduationYear: string };
    practical: { company: string; position: string; yearsWorked: string };
  };
  editEventHandler: () => void;
}) {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">CV Preview</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Name</h3>
        <p className="text-gray-600">{formData.general.name}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Email</h3>
        <p className="text-gray-600">{formData.general.email}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
        <p className="text-gray-600">{formData.general.phone}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">School</h3>
        <p className="text-gray-600">{formData.education.school}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Degree</h3>
        <p className="text-gray-600">{formData.education.degree}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Graduation Year</h3>
        <p className="text-gray-600">{formData.education.graduationYear}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Company</h3>
        <p className="text-gray-600">{formData.practical.company}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Position</h3>
        <p className="text-gray-600">{formData.practical.position}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Years Worked</h3>
        <p className="text-gray-600">{formData.practical.yearsWorked}</p>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={editEventHandler}
      >
        Edit Information
      </button>
    </div>
  );
}
