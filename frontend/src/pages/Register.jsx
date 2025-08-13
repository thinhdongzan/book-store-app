import background from '../assets/images/logo/bannerLogin.jpg';
function Register() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
            </div>
            <div className="w-1/2 h-full bg-white p-20">
                <div className="flex items-center justify-start">
                    <a href="/" className="text-sm text-gray-500">Back to Home</a>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-2xl font-bold">Register</h1>
                    <h2 className="text-sm text-gray-500">Welcome to our website</h2>
                    <form className="flex flex-col gap-2 w-full">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="username">Username</label>
                            <input className="border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none" type="text" id="username" name="username" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password">Password</label>
                            <input className="border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none" type="password" id="password" name="password" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input className="border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none" type="password" id="confirmPassword" name="confirmPassword" />
                        </div>
                        <button className="bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-600" type="submit">Register</button>
                    </form>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <label className="text-sm text-gray-500">Already have an account?</label>
                        <a href="/login" className="text-blue-500">Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;