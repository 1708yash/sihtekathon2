"use client"
import React from 'react'
import { Upload } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios';
import toast from 'react-hot-toast';

const Report = () => {
  const [latitude, setLatitude] = React.useState<number>(28.602535)
  const [longitude, setLongitude] = React.useState<number>(77.262171)
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [picture, setPicture] = React.useState<File|null>(null)

  const getMyLocation = () => {
    const location = window.navigator && window.navigator.geolocation

    if (location) {
      location.getCurrentPosition((position) => {
        // @ts-ignore
        setLatitude(position.coords.latitude)
        // @ts-ignore
        setLongitude(position.coords.longitude)
      }, (error) => {
        console.log(error)
      })
    }
    console.log(latitude, longitude)
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', title as string);
    formData.append('content', description as string);
    formData.append('published', 'true');
    formData.append('latitude', latitude as any);
    formData.append('longitude', longitude as any);
    formData.append('image', picture as any);
    console.log(title,description,picture,latitude,longitude, ' form data')

    // if(title && description && picture && latitude && longitude){
      const res = await axios.post('http://127.0.0.1:8000/posts/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage?.getItem('access_token')}`
          }
          }
          )
          toast.success('Report Submitted Successfully')
    console.log(res, ' r es')

        }
      // }
  
  
  return (
    <>
    <div>
    <h2 className='text-2xl py-5 md:mt-12 text-center font-semibold leading-none tracking-tight'>Report Anomaly</h2>
    <div className='my-2 flex justify-center mx-12'>
       
    </div>
    <div className='my-4 mx-8 md:px-24'>
        <form className='flex flex-col gap-y-5'>
        <div className="grid w-full max-w-sm md:max-w-full items-center gap-5">
      <Label htmlFor="picture">
        Picture
      </Label>
      <Input id="picture" type="file" 
      multiple={true}
      // @ts-ignore
      onChange={(e) => setPicture(e.target.files[0])}
      // value={picture}
      />
    </div>
    <div>
      <button className="bg-black w-full mt-4 text-white font-bold py-2 px-4 rounded"
      onClick={getMyLocation}
      >
          Get Location
      </button>
    </div>
        <div className="grid w-full max-w-sm md:max-w-full items-center gap-5">
          
      <Label htmlFor="nearLoaction">
        Title
      </Label>
      <Input type="text" id="nearLoaction" placeholder=""
      onChange={(e) => setTitle(e.target.value)}
      value={title}
      />
    </div>
    {/* <div className="grid w-full max-w-sm md:max-w-full items-center gap-5">
      <Label htmlFor="city">
        City Name
      </Label>
      <Input type="text" id="city" placeholder="" />
    </div> */}
    <div className="grid w-full max-w-sm md:max-w-full items-center gap-5">
      <Label htmlFor="city">
        Description of Situation
      </Label>
      <Textarea 
      placeholder="Type here..."
      rows={5}
      onChange={(e) => setDescription(e.target.value)}
      // value={description}
       />
    </div>
    <div>
        <button
        onClick={handleSubmit}
        className="bg-black w-full mt-4 text-white font-bold py-3 px-4 rounded">
            Submit
        </button>
    </div>
        </form>

    </div>
    </div>
    
    </>
  )
}

export default Report