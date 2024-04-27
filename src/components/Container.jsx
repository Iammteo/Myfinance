
import Mycards from "./Mycards";
import Trans from "./Trans";

const Container = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div><img src="images/percentage.png"  className="w-[18rem]" alt="percentage image" /></div>
                <div>
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