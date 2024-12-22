import { useNavigate } from "react-router-dom";

const routes = {
  "01": "/inicio",
  "02": "/video",
  "03": "/fotografia",
  "04": "/motion",
  "05": "/multimedia",
  "06": "/produccion",
  "07": "/desarrollo",
  "08": "/contacto",
  "00": "/",
};

export const Carrusel = ({ titulo, num1, num2 }) => {
  const navigate = useNavigate();

  const handleNavigation = (num) => {
    navigate(routes[num] || "/");
  };

  const handlePrevious = () => {
    const previousNum = (parseInt(num1) - 1).toString().padStart(2, "0");
    handleNavigation(previousNum);
  };

  const handleNext = () => {
    const nextNum = (parseInt(num1) + 1).toString().padStart(2, "0");
    handleNavigation(nextNum);
  };

  return (
    <div className="w-5/6 h-36 mx-auto flex justify-between pt-10 items-center overflow-hidden">
      <div className="flex flex-col items-center cursor-pointer w-10 h-auto">
        <i
          className="bx bx-chevron-up text-4xl leading-6"
          onClick={handlePrevious}
        ></i>
        <i className="bx bx-minus text-amber-500 text-3xl leading-6 cursor-auto"></i>
        <i
          className="bx bx-chevron-down text-4xl leading-6"
          onClick={handleNext}
        ></i>
      </div>

      <h3>{titulo}</h3>
      <div className="flex flex-col items-center cursor-pointer w-10 h-auto">
        <div
          className="text-amber-500 font-mono font-bold mt-10"
          onClick={() => handleNavigation(num1)}
        >
          {num1}
        </div>
        <i className="bx bx-minus text-gray-50 text-3xl leading-6 cursor-auto"></i>
        <div
          className="text-amber-500 font-mono font-bold mb-10"
          onClick={() => handleNavigation(num2)}
        >
          {num2}
        </div>
      </div>
    </div>
  );
};
