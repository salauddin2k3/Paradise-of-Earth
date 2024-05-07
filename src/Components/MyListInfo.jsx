
import { Link } from "react-router-dom";


const MyListInfo = (info, control, setControl) => {

    


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    setControl(!control);
                    alert("Deleted")
                }
            });
    }

    return (
        <div className="border border-gray-500 rounded-xl p-5">
            <h2 className="mt-3">Spot Name........{info.info.spotName}</h2>
            <h2 className="mt-3">Season........{info.info.seasonality}</h2>
            <h2 className="mt-3">Cost........{info.info.cost}</h2>
            <div className="mt-3 flex gap-4 w-fit">
                <Link to={`/update-spot/${info.info._id}`}><button className="btn btn-accent btn-sm">Update</button></Link>
                <button onClick={() => handleDelete(info.info._id)} className="btn btn-error btn-sm">Delete</button>
            </div>
        </div>
    );
};

export default MyListInfo;