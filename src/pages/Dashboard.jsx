import Charts from "../components/Charts";
import NavHeader from "../components/Navigation/NavHeader";
import Statictics from "../components/Statictics";
import Trio from "../components/Trio";
import Container from "../components/Container";

const Dashboard = () => {

    return <section >
        
        <NavHeader/>

     <section className="flex">
       
        <div className="w-2/3 h-full rounded-bl-3xl bg-white p-8">
            <Trio/>  
            <Statictics/>
            <Charts/>
        </div>
        <div className="w-1/3 h-full hidden sm:md:block bg-red-500 p-6 ">
           <Container/>
        </div>
         
         
     </section>
         
  
        
       
    </section>
   }
export default Dashboard;
