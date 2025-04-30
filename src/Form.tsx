import { useState } from "react";
import TextInput from "./TextInput.tsx";
import CVPreview from "./CVPreview.tsx";

export default function Form() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light-primary dark:bg-dark-bg py-20">
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
    <div className="p-6 min-w-3xl mx-auto bg-white dark:bg-dark-surface rounded-lg shadow-lg transition-all">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-dark-font">
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

        <h2 className="text-2xl font-bold mb-6 text-black dark:text-dark-font">
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

        <h2 className="text-2xl font-bold mb-6 text-black dark:text-dark-font">
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
          className="mt-6 px-3 py-2 bg-blue-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-blue-500 ease-in-out duration-300 hover:scale-110 active:scale-100"
          type="submit"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}
