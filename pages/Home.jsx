import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import ProfileCard from "../components/ProfileCard";
import TopTip from "../components/TopTip";

const Home = () => {
    const { users, tips } = useLoaderData();


        return (
            <div>
                <Banner></Banner>
                {/* active gardenders */}
                <div className="mt-32 pt-3 pb-20 custom-shadow bg-[url('../src/assets/cardimage2.jpg')] bg-cover object-cover">
                    <h1 className="mb-5 text-center font-semibold italic text-3xl md:text-4xl lg:text-4xl text-orange-700">Active Users</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-14 px-2">
                        {
                            users.map(user => <ProfileCard key={user._id} user={user}></ProfileCard>)
                        }
                    </div>
                </div>
                {/* top trending tips */}
                <div className="mt-32 py-10 tip-shadow bg-base-100 md:px-1 xl:px-20">
                    <h1 className="mb-15 text-center font-semibold italic text-3xl md:text-4xl lg:text-4xl text-lime-300">Top-Tips</h1>
                    {/* top tip container */}
                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-8">
                        {tips.map(tip => <TopTip key={tip._id} tip={tip}></TopTip>)}
                    </div>
                </div>
            </div>
        );
};

export default Home;