import Charts from "../components/Charts";
import NavHeader from "../components/Navigation/NavHeader";
import Statictics from "../components/Statictics";
import Trio from "../components/Trio";
import Container from "../components/Container";

const Dashboard = () => {

    return <div className="w-full bg-white lg:md:rounded-l-3xl lg:md:ml-20 p-5" >
        
        <NavHeader/>

     <section className="flex">
       
        <div className=" w-full sm:md:lg:w-2/3 h-full rounded-bl-3xl bg-white p-6 md:lg:p-4 sm:md:p-8">
            <Trio/>  
            <Statictics/>
            <Charts/>
        </div>
        <div className="w-full h-[100vh] bg-[#F5F5FC] sm:md:lg:w-1/3 sm:md:lg:h-full hidden sm:md:lg:block  sm:md:lg:p-6 ">
           <Container/>
        </div>
         
         
     </section>
         
  
        
       
    </div>
   }
export default Dashboard;
