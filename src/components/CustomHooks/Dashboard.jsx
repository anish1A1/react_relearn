
import {useToggle} from "../../../hooks/useToggle";

export default function Dashboard() {
    const [isOpen, toogleOpen] = useToggle(false);

    return (
        <div className="p-6">

            <button onClick={toogleOpen}>
                {isOpen ? 'Hide Options' : ' Show Options'}
            </button>

            {isOpen && <p className="mt-4">Here is your custom hook toggled content!</p>}

        </div>
    );
}