import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router"
const Register = () => {

    const { createUser, signInGoogle, user, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email,password);          

        const form = e.target;
        const formData = new FormData(form);
        const { name, email, password, photo, ...restUser } = Object.fromEntries(formData.entries());
        const profile = {
            displayName: name,
            photoURL: photo
        };
        console.log(profile)
        createUser(email, password)
            .then(async(result) => {
                if (result.user) {
                    await updateUser(profile);
                    const userinfo = {
                        name,
                        photo,
                        email,
                        password,
                        ...restUser,
                        creationTime: result.user.metadata.creationTime,
                        lastSignInTime: result.user.metadata.lastSignInTime,
                    }
                    fetch('https://p10-server.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userinfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data._id) {
                                console.log(data._id);
                                alert("User is Created Successfully!")
                            }
                        })
                }
                navigate("/welcome")
            }).catch(error => console.log(error))
    }

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                if (result.user) {
                    console.log(result.user);
                    const userinfo = {
                        name: result.user.displayName,
                        email: result.user.email,
                        photo: result.user.photoURL,
                        creationTime: result.user.metadata.creationTime,
                        lastSignInTime: result.user.metadata.lastSignInTime,
                    }
                    console.log(userinfo);
                    fetch("https://p10-server.vercel.app/users", {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userinfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            alert("with google")
                        })
                }
                navigate("/welcome")
            }).catch(error => console.log(error))

    }

    return (
        <div>
            <div className=" min-h-screen">
                <h1 className="text-center font-bold text-4xl italic my-5" >Register Now</h1>
                <div className="card my-10 mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="label text-lg font-semibold text-black">Name</label>
                            <input type="text" name="name" className="input" placeholder="Name" />
                            <label className="label text-lg font-semibold text-black">Address</label>
                            <input type="text" name="address" className="input" placeholder="address" />
                            <label className="label text-lg font-semibold text-black">Photo Url</label>
                            <input type="text" name="photo" className="input" placeholder="photo" />
                            <label className="label text-lg font-semibold text-black">Gender</label>
                            <input type="text" name="gender" className="input" placeholder="Gender" />
                            <label className="label text-lg font-semibold text-black">Status</label>
                            <input type="text" name="status" className="input" placeholder="Status" />
                            <label className="label text-lg font-semibold text-black">Experience</label>
                            <input type="number" name="experience" className="input" placeholder="Experience" />
                            <label className="label text-lg font-semibold text-black">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label text-lg font-semibold text-black">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                            <button className="btn bg-green-400 mt-4 text-white">Register</button>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <p className="text-sm font-semibold mt-2">Allready have an account? then
                            <span style={{ cursor: "pointer" }} onClick={() => navigate("/auth/login")} className="text-blue-600 hover:underline"> Login</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;