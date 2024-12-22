export const Carrusel = ({titulo, num1 , num2}) => {
return (
    <>
    <div className=" w-5/6 h-36 mx-auto flex justify-between   pt-10 items-center overflow-hidden">
        <div className=" flex flex-col items-center cursor-pointer w-10 h-auto ">
        <i class="bx bx-chevron-up text-4xl   leading-6"></i>
        <i class="bx bx-minus text-amber-500 text-3xl  leading-6 cursor-auto"></i>
        <i class="bx bx-chevron-down text-4xl  leading-6"></i>
        </div>

        <h3>{titulo}</h3>
        <div className=" flex flex-col items-center cursor-pointer w-10 h-auto ">
        <div className=" text-amber-500 font-mono font-bold mt-10 "> {num1} </div>
        <i class="bx bx-minus text-gray-50 text-3xl  leading-6 cursor-auto"></i>
        <div className=" text-amber-500  font-mono font-bold mb-10"> {num2} </div>
        </div>
    </div>
    </>
);
};
