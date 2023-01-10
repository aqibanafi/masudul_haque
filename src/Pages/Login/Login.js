import React from 'react';

const Login = () => {
    return (
        <div className='flex justify-center mt-20 mb-20'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-2xl border dark:text-gray-100">
                <h1 className="text-3xl font-bold text-center text-primary mb-10">Login</h1>
                <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block text-primary">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 shadow-xl dark:text-black focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block text-primary">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 shadow-xl dark:text-black focus:dark:border-violet-400" />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm bg-primary text-white hover:bg-accent">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;