import { useState } from "react";

export const PopUpModal = () => {
  const [close, setClose] = useState(false);

  const handleClick = () => {
    setClose(true);
  };

  if (close) {
    return null;
  }

  return (
    <div
      id="default-modal"
      tabIndex={-1}
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
      onClick={handleClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] lg:w-[45%] lg:h-[40vh] flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Meddelandet har skickats</h3>
          <button
            type="button"
            className="text-gray-400 text-2xl"
            onClick={handleClick}
          >
            &times;
          </button>
        </div>

        <p className="mt-4 text-lg">
          Tack för ditt meddelande! Vi återkommer till dig så snart som möjligt.
        </p>

        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="bg-blue-700 text-white px-4 py-2 rounded"
            onClick={handleClick}
          >
            Stäng
          </button>
        </div>
      </div>
    </div>
  );
};
