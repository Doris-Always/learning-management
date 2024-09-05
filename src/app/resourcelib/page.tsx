'use client'
import SmallScreenHeader from "@/components/smallScreenHeader";
import Hero from "@/components/heroSection"
import Header from "@/components/header";
import FooterSmallScreen from "@/components/footerSmallScreen";

const ResourceLib = () =>{
    return(
        <>
        <Header/>
       <SmallScreenHeader/>
       <Hero/>
            <main className="flex min-h-screen justify-center items-center ">
            <div className='border-2 w-[50%] h-32 flex justify-center items-center bg-blue-300'>
              <h1 className='text-md font-bold' >Resource library: Page is not ready</h1>
             
            </div>
              
            </main>
            <FooterSmallScreen/>
        </>
    )
}
export default ResourceLib;