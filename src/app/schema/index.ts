import * as z from "zod"

export const RegisterSchema = z.object({
    firstName: z.string().min(1, {
        message:"Please enter your first name"
    }),
    lastName: z.string().min(1, {
        message:"Please enter your last name"
    }),
    organizationName: z.string().min(1, {
        message:"Please enter the name of your organization"
    }),
    organizationAddress: z.string().min(1, {
        message:"Please enter your office address"
    }),
    email: z.string().email({
        message: "Please enter a valid email"
    }),
    password: z.string().min(6, {
        message: "password must be atleast 6 characters long"
    }),
    confirmPassword: z.string().min(6, {
        message: "password must be atleast 6 characters long"
    }),
})


export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email"
    }),
    password: z.string().min(6, {
        message: "password must be atleast 6 characters long"
    }),
})