"use client"
import React from 'react'
import CardWrapper from './card-wrapper'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { LoginSchema } from '@/app/schema'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { z } from 'zod'
import { useFormStatus } from 'react-dom'
import { useState } from 'react'
import Image from 'next/image'


const LoginForm = () => {

    const [loading, setLoading] = useState(false)

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = (data: z.infer<typeof LoginSchema>) => {
        setLoading(true)
        console.log(data)
    }

    const {pending} = useFormStatus();
    return (
        <div className="w-full flex flex-col justify-center items-center p-8">
        <div className="flex items-center mb-8">
          <Image src="/favicon.ico" alt="FI Logo" width={50} height={50} />
          <div className="ml-4">
            <h2 className="text-orange-500 font-bold text-xl">FUSION INTELLIGENCE</h2>
            <p className="text-black">Fusing business and technology</p>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-2">WELCOME BACK</h1>
        <p className="text-gray-500 mb-8">Welcome back, please log in to your mosaid</p>
     <CardWrapper
            label="Login to your account"
            title="Login"
            backButtonHref="/auth/register"
            backButtonLabel="Don't have an account? Register here."
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="email" placeholder='efemena@gmail.com' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" placeholder='**' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                    </div>
                    <Button type='submit' className='w-full' disabled={pending}>
                        {loading ? "loading":"Login"}
                    </Button>
                </form>
            </Form>
        </CardWrapper>

        {/* <form className="w-3/4 max-w-md">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-4 p-2 border border-gray-400 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border border-gray-400 rounded"
            required
          />
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" />
              Remember password
            </label>
            <a href="/forgot-password" className="text-red-500">Forgot Password</a>
          </div>
          <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded">Log In</button>
        </form> */}
      </div>
        

    )
}

export default LoginForm