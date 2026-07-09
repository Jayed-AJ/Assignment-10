import { useLoaderData } from "react-router";
// import bgImage from "../src/assets/cardimage3.jpg"
const Gardener = () => {

    const gardener = useLoaderData();

    const {
        address,
        creationTime,
        email,
        experience,
        gender,
        name,
        photo,
        status,
        lastSignInTime,
    } = gardener;

    return (
        <div className="max-w-6xl mx-auto py-10 px-5">

            <h1 className="text-center text-4xl md:text-5xl font-bold text-green-700 mb-10">
                Gardener Details
            </h1>

            <div className="bg-gradient-to-br from-green-50 via-white to-lime-100 rounded-3xl shadow-xl overflow-hidden">

                {/* Top Section */}

                <div className="bg-[url('../src/assets/cardimage2.jpg')] bg-cover py-10 flex flex-col items-center">

                    <img
                        src={
                            photo
                                ? photo
                                : "https://i.ibb.co/JF5wJ2x/user.png"
                        }
                        alt="gardener"
                        className="w-40 h-40 rounded-full border-[6px] border-white object-cover shadow-lg"
                    />

                    <h2 className="text-lime-500 text-3xl font-bold mt-5">
                        {name ? name : "Unknown Gardener"}
                    </h2>

                    <span
                        className={`mt-3 px-5 py-2 rounded-full bg-lime-600 text-white font-semibold`}
                    >
                        Status: {status ? status : "Unavailable"}
                    </span>
                </div>

                {/* Information */}

                <div className="grid md:grid-cols-2 gap-6 p-8">

                    <div className="space-y-5">

                        <div>
                            <p className="font-semibold text-gray-500">
                                Email
                            </p>
                            <p className="text-lg">
                                {email ? email : "Not Provided"}
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-500">
                                Gender
                            </p>
                            <p className="text-lg">
                                {gender ? gender : "Not Provided"}
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-500">
                                Address
                            </p>
                            <p className="text-lg">
                                {address ? address : "Not Provided"}
                            </p>
                        </div>

                    </div>

                    <div className="space-y-5">

                        <div>
                            <p className="font-semibold text-gray-500">
                                Experience
                            </p>
                            <p className="text-lg">
                                {experience
                                    ? `${experience} Years`
                                    : "Not Mentioned"}
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-500">
                                Account Created
                            </p>
                            <p className="text-lg">
                                {creationTime
                                    ? creationTime
                                    : "Unavailable"}
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-500">
                                Last Login
                            </p>
                            <p className="text-lg">
                                {lastSignInTime
                                    ? lastSignInTime
                                    : "Unavailable"}
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Gardener;