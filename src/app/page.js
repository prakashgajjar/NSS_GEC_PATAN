import Header from '@/components/home/Header'
import Home from '@/components/home/Home.js'
import React from 'react'

const page = () => {
  return (
    <div>
      
      <div className="pt-20"> {/* Add padding-top to account for fixed header */}
        <Home/>
      </div>
    </div>
  )
}

export default page