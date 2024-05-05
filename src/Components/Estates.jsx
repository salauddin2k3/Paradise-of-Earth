import { useEffect, useState } from "react";
import Estate from "./Estate";


const Estates = () => {

    const [estates, setEstates] = useState([]);

    useEffect(() => {
        fetch('/prime-residence.json')
            .then(res => res.json())
            .then(data => setEstates(data))
    }, [])



    return (
        <div>
            <h2 className="text-5xl font-bold text-center mt-20">Estates:</h2>
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    estates.map(estate => <Estate
                    estate={estate}
                    key={estate.id}
                    ></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;