import { useContext } from "react";
import gardenBg from "../src/assets/download.jpg"
import { AuthContext } from "../context/AuthContext";
import Swal from 'sweetalert2';

const ShareGardenTips = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // console.log(formData.entries())
        const newTip = Object.fromEntries(formData.entries());
        console.log(newTip);


        fetch("https://p10-server.vercel.app/tips", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newTip)

        }).then(res => res.json())
            .then(data => {
                if (data) {
                    console.log("data from server");
                    Swal.fire({
                        title: "Tip Shared Successfully!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }
            })
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${gardenBg})` }}
        >
            {/* Blur Overlay */}
            <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>

            {/* Form */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Title */}
                    <div className="md:col-span-1">
                        <label className="block mb-2 font-medium text-white">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="How I Grow Tomatoes Indoors"
                            className="w-full px-4 py-3 rounded-xl bg-white/90 outline-none"
                        />
                    </div>

                    {/* Plant Type */}
                    <div>
                        <label className="block mb-2 font-medium text-white">
                            Plant Type / Topic
                        </label>
                        <input
                            type="text"
                            name="plantType"
                            placeholder="Tomato, Rose, Mango..."
                            className="w-full px-4 py-3 rounded-xl bg-white/90 outline-none"
                        />
                    </div>

                    {/* Difficulty */}
                    <div>
                        <label className="block mb-2 font-medium text-white">
                            Difficulty Level
                        </label>
                        <select name="difficulty" className="w-full px-4 py-3 rounded-xl bg-white/90 outline-none">
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block mb-2 font-medium text-white">
                            Category
                        </label>
                        <select name="category" className="w-full px-4 py-3 rounded-xl bg-white/90 outline-none">
                            <option>Plant Care</option>
                            <option>Composting</option>
                            <option>Vertical Gardening</option>
                            <option>Indoor Gardening</option>
                            <option>Organic Farming</option>
                        </select>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block mb-2 font-medium text-white">
                            Image URL
                        </label>
                        <input
                            name="imageUrl"
                            placeholder="https://example.com/image.jpg"
                            className="w-full px-4 py-3 rounded-xl bg-white/90 outline-none"
                        />
                    </div>

                    {/* Availability */}
                    <div>
                        <label className="block mb-2 font-medium text-white">
                            Availability
                        </label>
                        <select name="availability" className="w-full px-4 py-3 rounded-xl bg-white/90 outline-none">
                            <option>Public</option>
                            <option>Hidden</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="block mb-2 font-medium text-white">
                            Description
                        </label>
                        <textarea
                            rows="6"
                            name="description"
                            placeholder="Share your gardening experience..."
                            className="w-full px-4 py-3 rounded-xl bg-white/90 outline-none resize-none"
                        ></textarea>
                    </div>

                    {/* User Name */}
                    <div>
                        <label className="block mb-2 font-medium text-white">
                            User Name
                        </label>
                        <input
                            type="text"
                            name="userName"
                            value={user?.displayName}
                            readOnly
                            className="w-full px-4 py-3 rounded-xl bg-gray-200 cursor-not-allowed"
                        />
                    </div>

                    {/* User Email */}
                    <div>
                        <label className="block mb-2 font-medium text-white">
                            User Email
                        </label>
                        <input
                            type="email"
                            name="userEmail"
                            value={user?.email}
                            readOnly
                            className="w-full px-4 py-3 rounded-xl bg-gray-200 cursor-not-allowed"
                        />
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition"
                        >
                            Share Garden Tip 🌱
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ShareGardenTips;