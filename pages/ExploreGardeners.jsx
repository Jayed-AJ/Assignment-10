import { useLoaderData, useLocation } from "react-router";
import ProfileCard from "../components/ProfileCard";

const ExploreGardeners = () => {
    const users = useLoaderData();
    console.log(users);
    const location = useLocation();
    console.log(location);
    return (
        <div className="pb-32">
            <h1 className="text-3xl md:text-4xl lg:text-5xl italic font-bold text- text-center text-green-600 py-5">Explore Gardeners</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-20 px-2">
                {
                    users.map(user => <ProfileCard key={user._id} user={user} location={location}></ProfileCard>)
                }
            </div>
        </div>
    );
};

export default ExploreGardeners;