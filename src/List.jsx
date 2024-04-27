import { FaTaxi } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";


const Items = ({svg , title , time , amount }) => {
    return (
    <div className="">
         <div className="py-4 flex justify-between ">
              <div className="gap-5 flex ">
                    <div className="bg-white w-10 h-8 p-2 flex justify-center rounded-md text-[#FF0000]">{svg}</div>

                    <div className="flex flex-col ">
                        <h3 className="text-sm">{title}</h3>
                        <p className="text-[12px] opacity-50">{time}</p>
                    </div>
             </div>
              <div className="text-[13px] font-semibold" >
                {amount}
              </div>
         </div>
    </div>
  
)
};

const List = () => {
    return (
    <div>
          <Items
           svg={<FaTaxi />}
           title= 'Taxi'
           time= '01:21PM'
           amount='-$9,20'
          />
          <Items
           svg={ <FaLock />}
           title= 'Shopping'
           time= '011:15AM'
           amount='-$142,0'
          />
          <Items
           svg={<RiNetflixFill />}
           title= 'Netflix'
           time= 'jan 10,2020'
           amount='-$9,20'
          />
    </div>
  
)
}
export default List;