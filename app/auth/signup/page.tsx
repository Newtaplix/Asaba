import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className="flex row-reverse h-screen">
        <div className='w-full bg-[url("/sideImg.png")] bg-cover bg-center h-full flex items-center justify-center'>
            <form className='w-full p-2 flex justify-center'>
                <div className='bg-black/50 text-white border-3 shadow-md border-black/20 shadow-md w-full md:w-100 rounded-lg p-2'>
                    <div>
                        <h1 className='text-3xl mb-1 font-bold'>SignUp</h1>
                        <p className='text-gray-500'>For a greater driving experience.</p>
                    </div>
                    <Button className='w-full mt-6 bg-gray-200 border-2 border-gray-400 text-black hover:bg-gray-500 mb-3'>Continue with Google</Button>
                    <hr/>
                    <div>
                        <Input type='text' placeholder='Username' className='p-2 mt-3 border-none bg-black/40'/>
                        <Input type='email' placeholder='Email' className='p-2 mt-3 border-none bg-black/40'/>
                        <Input type='password' placeholder='Password' className='p-2 mt-3 border-none bg-black/40'/>
                    </div>
                    <Button className='cursor-pointer w-full bg-white hover:bg-gray-300 text-black mt-3'>Sign Up</Button>
                    <div className='text-center justify-center mt-3 w-full'>
                        <p className='text-gray-500 w-full mx-auto text-center flex gap-2'><span>Already have an account? </span>
                        <span className='text-gray-600 hover:text-white cursor-pointer'>login</span></p>
                    </div>
                
                </div>
            </form>
        </div>

        {/** Form section */}
       
    </div>
  )
}

export default SignUpPage