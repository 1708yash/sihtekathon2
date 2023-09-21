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
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleSubmit = async (e:any) => {
    // console.log(email, password, "details")
    // e.preventDefault()
    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    if(username){
      const res = await axios.post('http://127.0.0.1:8000/login', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          }
          }
          )
    console.log(res, ' r es')
    if(res.status === 200){
      toast.success('Login Successfully')
      localStorage?.setItem('access_token', res?.data?.access_token)
      // localStorage?.setItem('role', res?.data?.role)
      router.push('/')
    }
    else{
      toast.error('Something went wrong')
    }
    }
  }

  return (
    <>
    <Card className="md:mx-24 md:border-none h-full mt-5 md:mt-12">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">
            Login
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
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
          <Label htmlFor="username">Email</Label>
          <Input id="username" type="email" placeholder="m@example.com"
           onChange={(e) => setUsername(e.target.value)}
           value={username}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full"
        onClick={handleSubmit}
        >Login</Button>
      </CardFooter>
    </Card>
    <div className="py-3">
        <Link href="/register">
          <p className="text-sm text-center text-muted-foreground">
            Don{"'"}t have an account? Create one
          </p>
        </Link>
      </div>
    </>
  )
}