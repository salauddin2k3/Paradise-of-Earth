import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import Estate from "./Estate";


const AllTouristsSpot = () => {
    const { user } = useContext(AuthContext);

    // const [control, setControl] = useState(false);

    const [info, setInfo] = useState([]);

    // console.log(info);

    useEffect(() => {
        fetch('http://localhost:5000/allInfo')
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                setInfo(data);
            });
    }, [user]);


    return (
        <div>
            <Helmet><title>Spot List</title></Helmet>
            <h2 className="text-5xl font-bold text-center mt-20">All Spots:</h2>
            <div className="mt-6 flex justify-end">
                <table>
                    <select className="select select-ghost w-full max-w-xs border-gray-300 border">
                        <option disabled selected>Find Your Preferred Data</option>
                        <option>Low Budget</option>
                        <option>High Budget</option>
                    </select>
                </table>
            </div>
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    info?.map(info => <Estate
                        info={info}
                        key={info._id}
                    ></Estate>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;