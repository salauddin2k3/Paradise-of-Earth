import { Link } from "react-router-dom";
import Aos from "aos";


Aos.init();



const Estate = (estate) => {
    return (
        <div data-aos="fade-up" data-aos-duration="3000" >
            <div className='mx-2'>
                <div className='rounded-xl mt-7 border-[#dddcdc] border p-6 h-full'>
                    <div>
                        <div className='bg-[#F3F3F3] py-7 px-7 rounded-xl'>
                            <div className='flex justify-center items-center'>
                                <img className='rounded-xl' src={estate.estate.image} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className='mt-6 flex flex-col md:flex-col lg:flex-row lg:items-center gap-4'>
                                {/* <h2 className='text-base font-medium text-[#23BE0A] font-work bg-[#23be0a0d] px-4 py-1 rounded-full w-fit'>Young Adult</h2> */}
                                {/* {
                                        estate.tags.map((tags, idx) => <p className='text-base font-medium text-[#23BE0A] font-work bg-[#23be0a0d] px-4 py-1 rounded-full w-fit' key={idx}>{tags}</p>)
                                    } */}
                            </div>
                            <div className='mt-5'>
                                <h2 className='text-2xl font-bold text-[#131313]'>{estate.estate.estate_title} <span className="mt-2 text-sm font-semibold">{estate.estate.segment_name}</span></h2>
                                <h3 className="mt-2 text-sm font-semibold"></h3>
                                <p className='mt-6 text-base font-medium text-[#131313cc] font-work'>{estate.estate.description}</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <div className='mt-6 flex justify-between items-center'>
                                <div className="flex flex-col lg:flex-row gap-4">
                                    {/* <h3 className='text-base font-medium text-[#131313cc] font-work'>Facilities:{estate.estate.}</h3> */}
                                    {
                                        estate.estate.facilities.map((tags, idx) => <p className='text-base font-medium text-[#23BE0A] font-work bg-[#23be0a0d] px-4 py-1 rounded-full w-fit' key={idx}>{tags}</p>)
                                    }
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div><img src="/src/assets/star.svg" alt="" /></div>
                                </div>
                            </div>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <div className="mt-5 flex justify-around items-center">
                                <div><h3 className='text-base font-medium text-[#131313cc] font-work'> <span className="font-bold">Area:</span> {estate.estate.area}</h3></div>
                                <div className="flex gap-2 items-center">
                                    <div>
                                        <img className="w-3" src="/src/assets/location-dot-solid.svg" alt="" />
                                    </div>
                                    <div>
                                        <h3 className='text-base font-medium text-[#131313cc] font-work'>{estate.estate.location}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <div className="mt-5 flex items-center justify-between">
                                <div>
                                    <h3 className='text-base font-medium text-[#131313cc] font-work'> <span className="font-bold">Price:</span> {estate.estate.price}</h3>
                                </div>
                                <div>
                                    <h3 className='text-base font-bold underline text-[#131313cc] font-work italic'> <span>For </span>{estate.estate.status}</h3>
                                </div>
                                <div>
                                    <Link to={`/details/${estate.estate.id}`}><button className="btn btn-outline btn-accent">View Property</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;