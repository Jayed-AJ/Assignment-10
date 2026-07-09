import { Link } from "react-router";

const TopTip = ({ tip }) => {
    return (
        <div>
            <div className="bg-white rounded-2xl overflow-hidden tip-shadow h-full">
                <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="h-56 w-full object-cover"
                />

                <div className="p-5">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {tip.category}
                    </span>

                    <h2 className="text-xl font-bold mt-3">
                        {tip.title}
                    </h2>

                    <p className="text-gray-600 mt-2 line-clamp-3">
                        {tip.description.slice(0,1000)}...
                    </p>

                    <div className="flex justify-between items-center mt-4">
                        <div>
                            <p className="font-medium">{tip.userName}</p>
                            <p className="text-sm text-gray-500">
                                {tip.plantType}
                            </p>
                        </div>
                        <Link to={`/tipDetails/${tip._id}`}>
                            <button className="bg-green-600 text-white font-semibold btn">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopTip;