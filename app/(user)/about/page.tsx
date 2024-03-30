import React from 'react'
import {Metadata} from "next";

export const metadata : Metadata = {
  title : "ISTAD Ecommerce About us",
  description : "We are providing the best service for you!.",

}
export default function page() {
  return (
      <div className='h-screen grid place-content-center text-6xl'>About Page</div>
  )
}
