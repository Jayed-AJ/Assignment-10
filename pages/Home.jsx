import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import ProfileCard from "../components/ProfileCard";


const Home = () => {
    const { users, tips } = useLoaderData();
    console.log(users);
    console.log(tips);
    return (
        <div>
            <Banner></Banner>
            {/* active gardenders */}
            <div className="mt-32">
                <h1 className="mb-5 text-center font-semibold italic text-3xl md:text-4xl lg:text-4xl text-orange-700">Active Users</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-14 px-2">
                    {
                        users.map(user => <ProfileCard key={user._id} user={user}></ProfileCard>)
                    }
                </div>
            </div>
            {/* top trending tips */}
            <div className="mt-32">
                <h1 className="mb-5 text-center font-semibold italic text-3xl md:text-4xl lg:text-4xl text-lime-300">Top-Tips</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                </div>
            </div>
        </div>
    );
};

export default Home;