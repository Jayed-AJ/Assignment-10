// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import Loading from "./Loading";
import { Link, useLoaderData } from "react-router";
import { IoEye } from "react-icons/io5";
const BrowseTips = () => {
    // const {loading} = useContext(AuthContext);
    const tips = useLoaderData();
    console.log(tips);
    return (
        <div className="bg-base-200 pb-32 pt-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold italic">BrowseTips</h1>
            <div className="max-w-7xl mx-auto mt-20 custom-shadow">
                <table className="w-full bg-white  rounded-2xl ">
                    <thead className="border border-gray-300">
                        <tr>
                            <th className="py-2 md:py-5">Title</th>
                            <th className="py-2 md:py-5">Category</th>
                            <th className="py-2 md:py-5">Image</th>
                            <th className="py-2 md:py-5">Detail</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            tips.map(tip => tip.availability === 'Public' &&
                                <tr key={tip._id} className="border border-gray-300 border-collapse h-full">
                                    <td className=" max-w-20 py-5 text-center">{tip.title}</td>
                                    <td className=" py-5 text-center">{tip.category}</td>
                                    <td className=" py-5 text-center"><img className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-lg" src={tip.imageUrl} alt="" /></td>
                                    <td className=" py-5 text-center"><Link to={`/tipDetails/${tip._id}`} className="btn btn-sm py-5 bg-lime-200 "><IoEye className="text-gray-500 text-lg" /></Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BrowseTips;