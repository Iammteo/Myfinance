
import Mycards from "./Mycards";
import Trans from "./Trans";

const Container = () => {
    return (
        <div className="border border-green-500">
            <div className="flex flex-col justify-center items-center border border-red-500 ">
                <div><img src="images/percentage.png"  className="border-blue-500" alt="percentage image" /></div>
                <div  className="border-blue-500">
                    <Mycards/>
                </div>
            </div>

            <div>
                <Trans/>
               
            </div>
        </div>
    );
}

export default Container;