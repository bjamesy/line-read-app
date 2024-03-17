"use client"
import { useForm } from 'react-hook-form'
import postLogin from '@/src/app/actions'

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    
    return (
        <div className=" h-screen flex items-center justify-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(postLogin)}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        type="email"
                        id="email"
                        placeholder="sophie@example.com"
                        {...register('email', { required: true })}
                    />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        type="password" 
                        placeholder="******************"
                        {...register('email', { required: true })}
                    />
                    {errors.password && <span>This field is required</span>}
                    <p className="text-red-500 text-xs italic">Please provide password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 p-1" href="/password-reset">
                    Forgot Password?
                    </a>
                </div>
            </form>
        </div>
    )
}