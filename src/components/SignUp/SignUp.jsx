import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const createdAt = result.user?.metadata?.creationTime;
                const user = { email, createdAt  };

                fetch('https://coffee-store-server-civ98h280-ieee-mostafas-projects.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(user),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            console.log('User added to the database');
                        }
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="input input-bordered"
                            placeholder="Email"
                        />

                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            className="input input-bordered"
                            placeholder="Password"
                        />

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>

                        <button className="btn btn-neutral mt-4">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
