import List from "../List";


const Trans = () => {
    return (
    <div className="p-10">
        <div className="flex justify-between mt-7 ">
             <p className="font-bold text-lg">Transaction</p> 
             <div className=" w-6 text-center  rounded-md bg-[#FF0000] text-white">+</div> 
        </div>
        <div> <List/></div>
    </div>
)
}
export default Trans;