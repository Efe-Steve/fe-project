"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import AuthHeader from './auth-header'
import BackButton from './back-button'


interface CardWrapperProps {
    label: String
    title: String
    backButtonHref: String
    backButtonLabel: String
    children: React.ReactNode
}

const CardWrapper = ({label, title, backButtonHref, backButtonLabel, children }:CardWrapperProps) => {
    return (
       <Card className='xl:w-1/4 md:-1/2 shadow-md'>
            <CardHeader>
                <AuthHeader label={label} title={title}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref}/>
            </CardFooter>

       </Card>
    )
}

export default CardWrapper