import Mycards from "./Mycards";

const Container = () => {
    return (
        <section className="bg-[#F5F5FC] w-full h-[38rem] rounded-lg flex justify-center p-8">
            
            <div className="bg-white rounded-full w-[70%] h-[50%] flex justify-center items-center relative border-4 border-purple-600">
                <div className="absolute inset-0 flex justify-center items-center text-center">
                    <div className="bg-white rounded-full w-[50%] h-[50%] shadow-lg flex justify-center items-center">
                        <div className="text-[#3326AE] text-2xl font-bold">38%</div>
                    </div>
                </div>
            </div>

          
        </section>
    );
}

export default Container;

// import Mycards from "./Mycards";

// const Container = () => {
//     return (
//         <section className="bg-[#F5F5FC] w-full h-full rounded-lg flex justify-center p-8">
//             <div className="bg-white rounded-full w-[70%] h-[50%] flex justify-center items-center relative border-4 border-purple-600">
//                 <div className="absolute inset-0 flex justify-center items-center text-center">
//                     <div className="bg-white rounded-full w-[50%] h-[50%] shadow-lg flex justify-center items-center">
//                         <div className="text-[#3326AE] text-2xl font-bold">38%</div>
//                     </div>
//                 </div>
//             </div>

//             <div className="mt-8">
//                <Mycards/>
//             </div>
           
//         </section>
//     );
// }

// export default Container;
