"use client"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import toast from 'react-hot-toast';
import { useState } from "react";
import { useRouter } from 'next/navigation'
import axios from "axios"

export default function DemoCreateAccount() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e:any) => {
    console.log(email, password, "details")
    e.preventDefault()
    const res = await axios.post('http://127.0.0.1:8000/users/', {
      email,
      password
    })
    console.log(res, ' r es')
    if(res.status === 201){
      toast.success('Account Created Successfully')
      localStorage?.setItem('id', res?.data?.id)
      router.push('/login')
    }
    else{
      toast.error('Something went wrong')
    }
  }

    

  return (
    <>
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline">
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="m@example.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" 
          name="password" onChange={(e) => setPassword(e.target.value)} value={password}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full"
        onClick={handleSubmit}
        >Create account</Button>
      </CardFooter>
    </Card>
    <div className="py-3">
       <Link href="/login">
          <p className="text-center text-sm text-gray-500 hover:text-gray-600">
            Already have an account? Login
          </p>
        </Link>
    </div>
        </>
  )
}