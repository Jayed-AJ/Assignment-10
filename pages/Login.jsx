import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
    const { signInUser, signInGoogle, user } = useContext(AuthContext);
    console.log(user);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location?.state);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(res => {
                console.log(res.user);
                navigate(location?.state || "/");
            }).catch(error => console.log(error))
    }

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                if (result.user) {
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
                            alert("Login with google")
                        })
                }
                // const userinfo = {
                //     creationTime: result.user.metadata.creationTime,
                //     lastSignInTime: result.user.metadata.lastSignInTime,
                // };
                // fetch("")
                navigate(location?.state || "/welcome");

            }).catch(error => console.log(error))

    }

    return (
        <div>
            <div className=" min-h-screen">
                <h1 className="text-center font-bold text-4xl italic my-5" >Login Now</h1>
                <div className="card my-10 mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                            <button className="btn bg-green-400 mt-4 text-white">Login</button>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <p className="text-sm font-semibold">First time in this platform? then <Link className="text-blue-600 hover:underline cursor-pointer" to="/auth/register" >Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;