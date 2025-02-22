import { SettingsProps } from "@/components/utils/interface";
import { useState } from "react";

export const TravelReqForm = ({ settings }: SettingsProps) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    number: "",
    email: "",
    message: "",
    customerType: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckBox = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/travel-req-form", {
        method: "POST",
        headers: { content: "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          companyName: "",
          contactPerson: "",
          number: "",
          email: "",
          message: "",
          customerType: "",
        });
        setIsChecked(false);
      }
    } catch {
      throw new Error("failed");
    }
  };

  return (
    <form
      className="mt-4 md:mt-10 md:w-[90%] lg:w-[50%] mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="companyName"
          id="companyName"
          placeholder={settings.company_name}
          value={formData.companyName}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="contactPerson"
          id="contactPerson"
          placeholder={settings.contact_person}
          value={formData.contactPerson}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="email"
          id="email"
          placeholder={settings.email}
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="number"
          id="number"
          placeholder={settings.phone}
          value={formData.number}
          onChange={handleInputChange}
        />
      </div>

      <textarea
        name="message"
        id="message"
        placeholder={settings.message}
        className="resize-none h-32"
        value={formData.message}
        onChange={handleInputChange}
      />

      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          name=""
          id=""
          className="mt-2"
          checked={isChecked}
          onChange={handleCheckBox}
        />
        <div>{settings.policy_text}</div>
      </div>
      <button
        className="mb-6 md:mb-0 w-[128px] h-[50px] text-[14px] bg-[#28303d] text-white mt-4"
        type="submit"
      >
        {settings.button}
      </button>
    </form>
  );
};
