import useStore from "@/components/lib/store";
import { useState } from "react";

export const BookingForm = ({ settings }: any) => {
  const { openCalender } = useStore();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
    customerType: "",
    numberOfPeople: "",
    level: "",
    gender: "",
    departureDate: "",
    arrivalDate: "",
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
      const response = await fetch("/api/booking-form", {
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
          numberOfPeople: "",
          level: "",
          gender: "",
          departureDate: "",
          arrivalDate: "",
        });
        setIsChecked(false);
      }
    } catch {
      throw new Error("failed");
    }
  };
  const {
    title,
    subtitle,
    name,
    email,
    phone,
    button,
    gender,
    message,
    business,
    people_2,
    people_4,
    people_8,
    people_12,
    gender_men,
    gender_female,
    level_hobby,
    policy_text,
    level_amatuer,
    level_advanced,
    level_beginner,
    gender_optional,
    level_hobby_plus,
    select_player_level,
    select_customer_type,
    select_number_of_people,
    level_intermediate,
    private_person,
    departure,
    arrival,
  } = settings;
  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>

      <div>{subtitle}</div>

      <input
        type="text"
        name="name"
        id="name"
        placeholder={name}
        value={formData.name}
        onChange={handleInputChange}
        required
        className="w-full"
      />

      {openCalender && (
        <div className="grid grid-cols-2 gap-4 w-[100%] m-auto ">
          <input
            type="datetime-local"
            name="departureDate"
            id=""
            placeholder={departure}
            value={formData.departureDate}
            onChange={handleInputChange}
            className="w-[150px] h-[60px] lg:w-[100%]"
          />
          <input
            type="datetime-local"
            name="arrivalDate"
            id=""
            placeholder={arrival}
            value={formData.arrivalDate}
            onChange={handleInputChange}
            className="w-[150px] h-[60px] lg:w-[100%]"
          />
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="email"
          id="email"
          placeholder={email}
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="number"
          id="number"
          placeholder={phone}
          value={formData.number}
          onChange={handleInputChange}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <select
          name="customerType"
          id=""
          value={formData.customerType}
          onChange={handleSelectChange}
        >
          <option value="" disabled>
            {select_customer_type}
          </option>
          <option value="Privatperson">{private_person}</option>
          <option value="Företag">{business}</option>
        </select>
        <select
          name="numberOfPeople"
          id=""
          value={formData.numberOfPeople}
          onChange={handleSelectChange}
        >
          <option value="" disabled>
            {select_number_of_people}
          </option>
          <option value="2">{people_2}</option>
          <option value="4">{people_4}</option>
          <option value="8">{people_8}</option>
          <option value="12">{people_12}</option>
        </select>
      </div>

      <textarea
        name="message"
        id="message"
        placeholder={message}
        className="resize-none h-[20vh] lg:h-[10vh]"
        value={formData.message}
        onChange={handleInputChange}
      ></textarea>

      <select
        name="level"
        id=""
        value={formData.level}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          {select_player_level}
        </option>
        <option value="Nybörjare">{level_beginner}</option>
        <option value="Amatör">{level_amatuer}</option>
        <option value="Motion">{level_hobby}</option>
        <option value="Motion plus">{level_hobby_plus}</option>
        <option value="Medel">{level_intermediate}</option>
        <option value="Anvancerad">{level_advanced}</option>
      </select>

      <select
        name="gender"
        id=""
        value={formData.gender}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          {gender}
        </option>
        <option value="Man">{gender_men}</option>
        <option value="Kvinna">{gender_female}</option>
        <option value="Okänd">{gender_optional}</option>
      </select>

      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          name="checkbox"
          id=""
          className="mt-2"
          checked={isChecked}
          onChange={handleCheckBox}
        />
        <div>{policy_text}</div>
      </div>

      <button
        className="w-[128px] h-[50px] text-[14px] bg-[#28303d] text-white mt-4"
        type="submit"
      >
        {button}
      </button>
    </form>
  );
};
