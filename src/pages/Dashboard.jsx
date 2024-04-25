import Charts from "../components/Charts";
import NavHeader from "../components/Navigation/NavHeader";
import Statictics from "../components/Statictics";
import Trio from "../components/Trio";
import Container from "../components/Container";

const Dashboard = () => {

    return <section >
        
        <NavHeader/>

     <section className="flex">
       
        <div className=" w-full sm:md:lg:w-2/3 h-full rounded-bl-3xl bg-white p-6 sm:md:p-8">
            <Trio/>  
            <Statictics/>
            <Charts/>
        </div>
        <div className=" sm:md:lg:w-1/3 sm:md:lg:h-full hidden sm:md:lg:block bg-white sm:md:lg:p-6 ">
           <Container/>
        </div>
         
         
     </section>
         
  
        
       
    </section>
   }
export default Dashboard;
