import spinner from "./assets/spinner.gif";
import spinner2 from "./assets/spinner2.gif";
import spinner3 from "./assets/spinner3.gif";
import spinner4 from "./assets/spinner4.gif";
import spinner5 from "./assets/spinner5.gif";


function Spinner() {
    const spinRand = Math.floor(Math.random() * 5);
    const spins = [spinner,spinner2,spinner3,spinner4,spinner5]
    return (
        <div className='w-100 mt-20'>
            <img src={spins[spinRand]} alt="Loading..." className="text-center mx-auto" width={180}/>
        </div>
    );
}

export default Spinner;