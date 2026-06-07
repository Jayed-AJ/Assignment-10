// import cardImg from "../src/assets/cardimage.jpg"


const ProfileCard = ({ user }) => {
    console.log(user);
    return (
        <div className="card bg-base-200 shadow-md bg-[url('../src/assets/cardimage3.jpg')] bg-cover">
            <figure className="px-10 pt-10">
                <img
                    src={user.photo}
                    alt="User's Image"
                    className="rounded-xl w-full h-80 object-cover" />
            </figure>
            <div className="card-body mr-5 text-white">
                <div className="flex items-center">
                    <div className="avatar avatar-online">
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
            </div>
        </div>
    );
};

export default ProfileCard;