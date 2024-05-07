import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const UpdateSpot = () => {

    const {id} = useParams();

    const [userData, setUserData] = useState([]);

    console.log(userData);

    useEffect(() => {
        fetch(`http://localhost:5000/singleInfo/${id}`)
        .then(res => res.json())
        .then(data => {
            setUserData(data);
        })
    }, [id])

    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const seasonality = form.get('seasonality');
        const cost = form.get('cost');
        const newInfo = {seasonality, cost};
        fetch(`http://localhost:5000/updateInfo/${id}`, {
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(newInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data?.insertedId){
                alert("data Update")
            }
            console.log(data);
        })
    };

    return (
        <div>
            <h2>This is update page</h2>
            <form onSubmit={handleUpdate} action="">
                <h2>Cost</h2>
                <input className="border border-gray-400" type="text" defaultValue={userData.cost} name="cost" />
                <h2>Season</h2>
                <input className="border border-gray-400" type="text" defaultValue={userData.seasonality} name="seasonality" /> <br /> <br />
                <button className="btn btn-accent">Submit</button>
            </form>
        </div>
    );
};

export default UpdateSpot;