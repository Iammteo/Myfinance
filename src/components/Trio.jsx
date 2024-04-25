;


const  Trio = () => {
return <section className="  flex gap-4">
       
         <div className="relative p-4 bg-[#FFFFFF] w-1/3 rounded-md shadow-lg h-[7rem]">
      <img src="/images/chart1.png" alt="first chart" />
      <div className="relative left-[10rem] bottom-[5rem] flex   px-4">
        {/* <div className="text-[#000013]">
          <h1 className="text-lg font-semibold">Visitors</h1>
          <p className="text-sm">10000</p>
        </div> */}
      </div>
    </div>
       <div className="p-4 bg-[#FFFFFF] w-1/3 rounded-md shadow-lg  h-[7rem]">
       <img src="/images/chart2.png" alt="second chart" />
       </div>
       <div className="p-4 bg-[#FF392B] w-1/3 rounded-md shadow-lg h-[7rem]">
       <img src="/images/chart3.png" alt="third chart" />
       </div>

</section>
}
export default Trio;