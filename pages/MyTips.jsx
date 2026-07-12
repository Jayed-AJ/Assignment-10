import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";
import { IoEye } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
const MyTips = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email);
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch(`https://p10-server.vercel.app/usertips/${user.email}`)
            .then(res => res.json())
            .then(data => setTips(data))
    }, []);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(_id);
                fetch(`https://p10-server.vercel.app/tips/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tip has been deleted.",
                                icon: "success"
                            })
                            const remainingTips = tips.filter(tip => tip._id !== _id);
                            setTips(remainingTips);
                        }
                    })
            };
        });

    }

    return (
        <div className="bg-base-200 pb-32">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold italic text-green pt-5">My Tips</h1>
            <div className="max-w-7xl mx-auto mt-20 custom-shadow">
                <table className="w-full bg-white  rounded-2xl ">
                    <thead className="border border-gray-300">
                        <th className="py-2 md:py-5">Title</th>
                        <th className="py-2 md:py-5">Category</th>
                        <th className="py-2 md:py-5">Tools</th>
                    </thead>
                    <tbody className="">
                        {
                            tips.map(tip => <tr className="border border-gray-300 border-collapse h-full">
                                <td className=" py-5 text-center"><img className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-lg" src={tip.imageUrl} alt="" /></td>
                                <td className=" max-w-20 py-5 text-center">{tip.title}</td>
                                {/* <td className=" max-w-20 py-5 text-center">{tip.category}</td> */}
                                <td className=" py-5 text-center">
                                    <Link to={`/tipDetails/${tip._id}`} className="btn btn-sm py-2 md:py-4  bg-lime-200 "><IoEye className="text-gray-500 text-lg" /></Link>
                                    <Link to={`/updateTip/${tip._id}`} className="btn btn-sm py-2 md:py-4  bg-emerald-500 mx-1 "><GrUpdate className="text-lg text-white" /></Link>
                                    <button onClick={() => handleDelete(tip._id)} className="btn btn-sm py-2 md:py-4 bg-red-600"><MdOutlineDeleteOutline className="text-white text-lg"></MdOutlineDeleteOutline></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTips;