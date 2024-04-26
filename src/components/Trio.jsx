

const  Trio = () => {
return  (
<section className="flex gap-4">
       
     <div className=" flex p-4 bg-[#FFFFFF] w-full  rounded-md shadow-lg h-[7rem]">
          <div className="flex  justify-between border border-green-500">
               <img className="" src="/images/chart1.png" alt="first chart" />
               <div className=" flex flex-col justify-center border border-red-500 px-2 "> 
                    <p >Visitors</p>
                    <p className="text-2xl font-bold">10,320</p>
               </div>
         </div>     
     </div>

       <div className=" flex p-4 bg-[#FFFFFF] w-full  rounded-md shadow-lg  h-[7rem]">
           <img src="/images/chart2.png" alt="second chart" />
           <div>bfhbshf</div>
       </div>

       <div className=" flex p-4 bg-[#FF392B] w-full  rounded-md shadow-lg h-[7rem]">
            <img src="/images/chart3.png" alt="third chart" />
            <div>jnjfsf</div>
       </div>

</section>
)}
export default Trio;