import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password); 

        createUser(email,password)
        .then(res => {
            console.log(res.user)
        }).catch(error => console.log(error))
        
    }

    return (
        <div>
            <div className=" min-h-screen">
                    <h1 className="text-center font-bold text-4xl italic my-5" >Register Now</h1>
                    <div className="card my-10 mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                                <button className="btn bg-green-400 mt-4">Register</button>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Register;