'use client'
import React from 'react'
import SmallScreenHeader from "@/components/smallScreenHeader";
import Hero from "@/components/heroSection"
import Header from "@/components/header";
import FooterSmallScreen from "@/components/footerSmallScreen";



const Schedule= () =>{
  return(
      <>
       <Header/>
       <SmallScreenHeader/>
       <Hero/>
          <main className="flex justify-center items-center min-h-screen">
            <div className='border-2 w-[50%]  h-32 flex justify-center items-center bg-blue-300'>
              <h1 className='text-md font-bold' >Schedule: Page is not ready</h1>
             
            </div>
             
          </main>
        <FooterSmallScreen/>
      </>
  )
}
export default Schedule;