import { CgProfile } from "react-icons/cg";

const Connect = (
    {
    image, 
    name,
    title,
    content,
    content2,
    content4,
    time,
    time2,
    button,
    }
) => {
    return (
     <div className="w-full h-full bg-white shadow-lg p-10  ">
         <div className="flex gap-5 pb-5">
              <div className="text-[3rem] ">{image}</div>
              <div className="flex flex-col  ">
                 <div className="text-md font-bold ">{name}</div>
                 <div className="opacity-50 text-[16px]">{title}</div>
              </div>
         </div>

         <div className="font-bold text-xl ">{content}</div>

           <div className="flex flex-row gap-4 pt-5">
                <div className="flex gap-4">
                    <div className="text-2xl">{image}</div>
                    <div>{content2}</div> 
                </div>
                <div className="flex gap-4">
                    <div className="text-2xl">{image}</div>
                    <div className="text-[16px]">{time2}</div> 
                </div>
                <div className="flex gap-2">
                    <div className="text-2xl">{image}</div>
                    <div className="">{content4}</div> 
                </div>
            </div>

            <div className="flex justify-between flex-row pt-7">
                <div className="">{time}</div>
                <button className="bg-blue-900 p-4 text-white rounded-full w-[10rem] h-{2rem}">
                   {button}    
                </button>
            </div>
     </div>
 ) 
};

const Charts = () => {
return <section className="flex gap-5 sm:md:lg:flex-row flex-col  ">
    <div className="p-4 shadow-lg w-full ">
        <img src="/images/chart4.png" alt="image 4" className=" h-auto" />
    </div>
    
      <div className="w-full">
         <Connect
          image={<CgProfile />}
          name='Lily Donovan'
          content='How to properly handle your budget ?'
          content2= 'video'
          time2 = '15 mins '
          content4= '12 likes '
          title='Business trainer'
          time= '5 days ago'
          button='connect >'
         />
        

         
      </div>
   
</section>
}
export default Charts;