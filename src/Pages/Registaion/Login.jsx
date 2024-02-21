import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../Context/MyContext';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../FireBase/FireBase';
import Loader from '../../Components/Loder/Loader';

function Login() {
    const [email,setEmail] = useState("");
    const[password,setPassword] = useState("");

        const {loading , setLoading} = useContext(myContext);

    const login = async ()=> {

        setLoading(true);

        if (email==="" || password==="") {
            return toast.error("All felds are required");
        }
        try {

            const result = await signInWithEmailAndPassword(auth,email,password);

            toast.success("Login success");

            localStorage.setItem("user",JSON.stringify(result));

            setTimeout(() => {
                window.location.href ='/';
            }, 800);

            loading(false);

        } catch (error) {
            setLoading(false);
        }

    }
   
    return (
        <div className=' flex justify-center items-center h-screen'>
            {loading && <Loader/>}
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        type="password"
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        onClick={login}
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login