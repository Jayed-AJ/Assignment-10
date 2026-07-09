// import cardImg from "../src/assets/cardimage.jpg"
import { Link } from "react-router";

const ProfileCard = ({ user,location }) => {
    console.log(location);
    return (
        <div className={`card bg-base-200 shadow-md bg-cover ${location?.pathname === "/exploreGardeners"? "bg-[url('../src/assets/cardimage.jpg')] custom-shadow": "bg-[url('../src/assets/cardimage3.jpg')]" }`}>
            <figure className="px-10 pt-10">
                <img
                    src={user.photo}
                    alt="User's Image"
                    className="rounded-xl w-full h-80 object-cover" />
            </figure>
            <div className="card-body mr-5 text-white">
                <div className="flex items-center">
                    <div className={`avatar ${location?.pathname === "/exploreGardeners" || 'avatar-online'}`}>
                        <div className="w-10 rounded-full">
                            <img src={user.photo} />
                        </div>
                    </div>
                    <h2 className="ml-2 font-semibold">{user.name}</h2>
                </div>
                <p className="font-semibold"> Joined: {new Date(user.creationTime).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}</p>
                {location?.pathname === "/exploreGardeners" &&
                   <Link to={`/gardener/${user.email}`} className="btn btn-sm bg-lime-400 text-white font-semibold  flex justify-center items-center w-full ml-auto"> Explore</Link> }
            </div>
        </div>
    );
};

export default ProfileCard;