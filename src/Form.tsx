import { useState } from "react";
import TextInput from "./TextInput.tsx";
import CVPreview from "./CVPreview.tsx";

export default function Form() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <GeneralInfoForm />
    </div>
  );
}

function GeneralInfoForm() {
  const [formData, setFormData] = useState({
    general: {
      name: "",
      email: "",
      phone: "",
    },
    education: {
      school: "",
      degree: "",
      graduationYear: "",
    },
    practical: {
      company: "",
      position: "",
      yearsWorked: "",
    },
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  type SectionType = "general" | "education" | "practical";

  function handleChange(
    section: SectionType,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name]: value,
      },
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  function edit() {
    setIsSubmitted(false);
  }

  return isSubmitted ? (
    <CVPreview formData={formData} editEventHandler={edit} />
  ) : (
    <div className="p-4 min-w-lg mx-auto bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          General Information
        </h2>
        <TextInput
          labelName="Name"
          name="name"
          changeHandler={(e) => handleChange("general", e)}
          val={formData.general.name}
        />
        <TextInput
          labelName="Email"
          name="email"
          changeHandler={(e) => handleChange("general", e)}
          val={formData.general.email}
        />
        <TextInput
          labelName="Phone Number"
          name="phone"
          changeHandler={(e) => handleChange("general", e)}
          val={formData.general.phone}
        />

        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Educational Experience
        </h2>
        <TextInput
          labelName="School Name"
          name="school"
          changeHandler={(e) => handleChange("education", e)}
          val={formData.education.school}
        />
        <TextInput
          labelName="Degree"
          name="degree"
          changeHandler={(e) => handleChange("education", e)}
          val={formData.education.degree}
        />
        <TextInput
          labelName="Graduation Year"
          name="graduationYear"
          changeHandler={(e) => handleChange("education", e)}
          val={formData.education.graduationYear}
        />

        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Practical Experience
        </h2>
        <TextInput
          labelName="Company Name"
          name="company"
          changeHandler={(e) => handleChange("practical", e)}
          val={formData.practical.company}
        />
        <TextInput
          labelName="Position Title"
          name="position"
          changeHandler={(e) => handleChange("practical", e)}
          val={formData.practical.position}
        />
        <TextInput
          labelName="Years Worked"
          name="yearsWorked"
          changeHandler={(e) => handleChange("practical", e)}
          val={formData.practical.yearsWorked}
        />

        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          type="submit"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}
