import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    // const handleSignOut = () => {
    //     logOut()
    //         .then(result => {
    //             console.log(result.user)
    //             alert('User Sign Out Successfully');

    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }



    const navLinks = <>

        <li><NavLink to={'/'}><span className="text-base font-medium text-[#1E1E1E]">Home</span></NavLink></li>
        <li><NavLink to={'/all-tourists-spot'}><span className="text-base font-medium text-[#1E1E1E]">All Tourists Spot</span></NavLink></li>
        <li><NavLink to={'/add-tourists-spot'}><span className="text-base font-medium text-[#1E1E1E]">Add Tourists Spot</span></NavLink></li>
        <li><NavLink to={'/update'}><span className="text-base font-medium text-[#1E1E1E]">Update Profile</span></NavLink></li>
        <li><NavLink to={'/my-list'}><span className="text-base font-medium text-[#1E1E1E]">My List</span></NavLink></li>

    </>

    // const userLogin = <>

    //     <NavLink to={'/login'}><span className="btn text-base font-medium text-[#1E1E1E]">Login</span></NavLink>

    // </>


    return (
        <div className="my-10">
            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <NavLink to={'/'}><a className="text-lg md:text-2xl lg:text-4xl font-extrabold text-[#1E1E1E]">Paradise of Earth</a></NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user
                                ?
                                <div onClick={logOut}><span className="btn text-sm lg:text-base font-medium text-[#1E1E1E]">Sign out</span></div>
                                :
                                <div>
                                    <NavLink to={'/login'}><span className="mr-4 btn text-base font-medium text-[#1E1E1E]">Login</span></NavLink>
                                    <NavLink to={'/reg'}><span className="btn text-base font-medium text-[#1E1E1E]">Registration</span></NavLink>
                                </div>

                        }
                        {/* {userLogin}
                        <div onClick={handleSignOut}><span className="btn text-base font-medium text-[#1E1E1E]">Sign out</span></div> */}
                        <div className="ml-4 w-14 rounded-full">
                            {
                                user
                                    ?
                                    <div className="tooltip" data-tip={user?.displayName || "Unknown"}>
                                        <img className="rounded-full" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                        {/* <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity">
                                        <p className="text-sm font-bold border w-fit border-orange-900 bg-orange-500 text-center text-white">{user?.displayName || "Unknown"}</p>
                                    </div> */}
                                    </div>
                                    :
                                    <div></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;