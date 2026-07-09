import { useLoaderData, useNavigate } from "react-router";

const Tipdetails = () => {
    const tip = useLoaderData();
    console.log(tip);
    const navigate = useNavigate();
    return (
        <div className="max-w-4xl mx-auto pb-32 pt-5">
            <img
                src={tip.imageUrl}
                className="w-full h-80 md:h-[450px] object-cover rounded-xl md:rounded-2xl lg:rounded-3xl"
            />

            <div className="mt-8 px-2">
                <span className="text-amber-600 font-semibold">
                    {tip.category}
                </span>

                <h1 className=" text-green-700 leading-10 md:leading-14 lg:leading-16 text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
                    {tip.title}
                </h1>

                <div className="flex flex-col gap-1 mt-5 text-gray-500">
                    <p>Creator: {tip.userName}</p>
                    <p>Creation Time: {tip.createdAt}</p>
                    <p>Total Likes: ❤️ {tip.totalLiked}</p>
                </div>

                <div className="mt-10 text-lg leading-9 text-gray-700">
                    {tip.description}
                </div>
                <button onClick={() => navigate(-1)} className="btn btn-sm font-bold bg-green-600 text-white mt-10">Back</button>
            </div>
        </div>
    );
};

export default Tipdetails;