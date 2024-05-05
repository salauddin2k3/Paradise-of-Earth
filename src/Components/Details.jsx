import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const residenceDetails = useLoaderData();
    const { id } = useParams();
    const detailInt = parseInt(id);
    const detail = residenceDetails.find(detail => detail.id === detailInt);

    console.log(detail);

    return (
        <div>
            <Helmet><title>Residence Details</title></Helmet>
            <div className="mt-16 mx-2 flex flex-col items-center gap-11">
                <div className="p-4 lg:p-16 bg-[#1313130d] rounded-xl flex justify-center">
                    <img className="w-fit rounded-xl" src={detail.image} alt="" />
                </div>
                <div className="p-3 flex flex-col lg:flex-row gap-4">
                    <div className="lg:w-2/3 border-2 border-gray-400 rounded-lg p-9">
                        <h1 className="text-3xl lg:text-4xl font-bold text-[#131313] font-playfire">{detail.estate_title} <span className="text-base italic">({detail.segment_name})</span></h1>
                        <p className="mt-4 text-xl font-medium text-[#131313cc] font-work">Description : {detail.description} </p>
                        <div className="mt-5 flex flex-col lg:flex-row lg:items-center gap-4">
                            <p className="text-base font-bold text-[#131313] font-work">Facilities :</p>
                            {
                                detail.facilities.map((facilities, idx) => <p className='text-base font-medium text-[#23BE0A] font-work bg-[#23be0a0d] px-4 py-1 rounded-full w-fit' key={idx}>{facilities}</p>)
                            }
                        </div>
                    </div>
                    <div className="lg:w-1/3 border-2 border-gray-400 rounded-lg p-9">
                        <p className="mt-4 text-lg font-bold text-[#131313cc] font-work">Location : {detail.location} </p>
                        <p className="mt-4 text-lg font-bold text-[#131313cc] font-work">Price : {detail.price} </p>
                        <p className="mt-4 text-lg font-bold text-[#131313cc] font-work">Area : {detail.area} </p>
                        <p className="mt-4 text-lg font-bold text-[#131313cc] font-work underline text-end">({detail.status}) </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;