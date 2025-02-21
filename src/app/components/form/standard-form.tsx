import { SettingsProps } from "@/components/utils/interface";
import { useState } from "react";

export const StandardForm = ({ settings }: SettingsProps) => {
  const [formData, setFormData] = useState({
    name: "",
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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      customerType: value,
    }));
  };

  const handleCheckBox = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/standard-form", {
        method: "POST",
        headers: { content: "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          name: "",
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
    <div className="md:w-[90%] lg:w-[55%] p-4">
      {settings && (
        <>
          <h2 className="text-center">{settings.title_flexible_trips}</h2>

          <form className="mt-10 w-[100%] lg:mb-16" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder={settings.name}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder={settings.email}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                name="number"
                id="number"
                placeholder={settings.phone}
                value={formData.number}
                onChange={handleInputChange}
              />
              <select
                name="customerType"
                id="customerType"
                value={formData.customerType}
                onChange={handleSelectChange}
              >
                <option value="" disabled>
                  {settings.select_customer_type}
                </option>
                <option value="Privatperson">{settings.private_person}</option>
                <option value="Företag">{settings.business}</option>
              </select>
            </div>

            <textarea
              name="message"
              id="message"
              placeholder={settings.message}
              className="resize-none h-32"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>

            <div className="flex items-start gap-4">
              <input
                type="checkbox"
                name="policy"
                id="policy"
                className="mt-2"
                checked={isChecked}
                onChange={handleCheckBox}
              />
              <div>{settings.policy_text}</div>
            </div>

            <button
              className="w-[128px] h-[50px] text-[14px] bg-[#28303d] text-white mt-4"
              type="submit"
            >
              {settings.button}
            </button>
          </form>
        </>
      )}
    </div>
  );
};
