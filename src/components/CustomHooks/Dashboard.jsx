
import {useToggle} from "../../../hooks/useToggle";
import {useWindowSize} from "../../../hooks/useWindowSize";

export default function Dashboard() {
    const [isOpen, toogleOpen] = useToggle(false);
    const {width, height} = useWindowSize();

    return (
        <div className="p-6">

            <button onClick={toogleOpen}>
                {isOpen ? 'Hide Options' : ' Show Options'}
            </button>

            {isOpen && <p className="mt-4">Here is your custom hook toggled content!</p>}

            <h3>{width < 768 ? 'This is Mobile View Port' : 'This is Desktop View Port'}</h3> (from useWindowSize Hook)

        </div>
        
    );
}