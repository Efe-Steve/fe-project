"use client"
import React from 'react'
import CardWrapper from './card-wrapper'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { RegisterSchema } from '@/app/schema'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { z } from 'zod'
import { useFormStatus } from 'react-dom'
import { useState } from 'react'
import Image from 'next/image'
import { schema } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js'



const RegisterForm = () => {

    const [loading, setLoading] = useState(false)

    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            firstName:"",
            lastName: "",
            organizationName:"",
            organizationAddress:"",
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
        setLoading(true)
        console.log(data)
    }

    const {pending} = useFormStatus();
    return (
    <div className="w-full flex flex-col justify-center items-center p-8">
        <CardWrapper
            label="Create an account"
            title="Register"
            backButtonHref="/auth/login"
            backButtonLabel="Already have an account? Login here."
        >
            <div className="flex items-center mb-8">
          <Image src="/favicon.ico" alt="FI Logo" width={50} height={50} />
          <div className="ml-4">
            <h2 className="text-orange-500 font-bold text-xl">FUSION INTELLIGENCE</h2>
            <p className="text-black">Fusing business and technology</p>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Welcome To An Amazing Business Experience</h1>
        <p className="text-gray-500 mb-8">Welcome, please provide the details below to create your mosaic account</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4'>
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder='Efe' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder='Steve' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="organizationName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Organizations Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder='Google' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="organizationAddress"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Organizations Address</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder='7/12 Rumens Road ikoyi lagos' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} type='email' placeholder='EfemenaSteve@gmail.com' />
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
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" placeholder='**' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                    </div>
                    <Button type='submit' className='w-full' disabled={pending}>
                    {loading ? "loading":"Register"}
                    </Button>
                </form>
            </Form>
        </CardWrapper>
      </div>

    )
}

export default RegisterForm