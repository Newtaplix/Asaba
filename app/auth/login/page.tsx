"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [tokens, setTokens] = useState({access: "" , refresh: ""})
    const router = useRouter()
    const BASEURL = "http://127.0.0.1:8000/"

    const login = async (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try{
            const data = await axios.post(`${BASEURL}api/token/`, {
                username: username,
                password: password
            })
            console.log(data.data)
            setTokens({access: data.data.access, refresh:data.data.refresh})
            router.push("/")
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        if(tokens){
            localStorage.setItem("Aaccess", tokens.access)
            localStorage.setItem("Arefresh", tokens.access)
        }
    }, [tokens])
  return (
    <div className="flex row-reverse h-screen">
        <div className='w-full bg-[url("/sideImg.png")] bg-cover bg-center h-full flex items-center justify-center'>
            <form className='w-full p-2 flex justify-center'>
                <div className='bg-black/50 text-white border-3 shadow-md border-black/20 shadow-md w-full md:w-100 rounded-lg p-2'>
                    <div>
                        <h1 className='text-3xl mb-1 font-bold'>Log In</h1>
                        <p className='text-gray-500'>Welcome back.</p>
                    </div>
                    <Button className='w-full mt-6 bg-gray-200 border-2 border-gray-400 text-black hover:bg-gray-500 mb-3'>Continue with Google</Button>
                    <hr/>
                    <div>
                        <Input type='text' onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='p-2 mt-3 border-none bg-black/40'/>
                        <Input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='p-2 mt-3 border-none bg-black/40'/>
                    </div>
                    <Button onClick={(e) => login(e)} className='cursor-pointer w-full bg-white hover:bg-gray-300 text-black mt-3'>Log In</Button>
                    <div className='text-center justify-center mt-3 w-full'>
                        <p className='text-gray-500 w-full mx-auto text-center flex gap-2'><span>Don&lsquo;t have an account? </span>
                        <span className='text-gray-600 hover:text-white cursor-pointer'>Sign Up</span></p>
                    </div>
                
                </div>
            </form>
        </div>

        {/** Form section */}
       
    </div>
  )
}

export default LoginPage