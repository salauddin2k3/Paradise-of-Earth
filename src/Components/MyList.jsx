import { useContext, useEffect, useState, } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import MyListInfo from "./MyListInfo";


const MyList = () => {

    const { user } = useContext(AuthContext);

    const [control, setControl] = useState(false);

    const [info, setInfo] = useState([]);

    console.log(info)

    console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5000/myInfo/${user?.email}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setInfo(data);
            });
    }, [user, control]);


    return (
        <div>
            <Helmet><title>My List</title></Helmet>
            <h2>Test</h2>
            <div className="border border-red-900">
                <div>
                    {
                        info?.map(info => <MyListInfo
                            info={info}
                            key={info._id}
                            control={control}
                            setControl={setControl}
                        ></MyListInfo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyList;