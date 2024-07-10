'use client'
import heroImage from "../assets/images/unsplash_LWfFfA5U5z8.png";
import "../styles/hero.css"
import { setButtonDisplay } from '../ReduxStore/slice/SideNavSlice';
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/ReduxStore/Store";
import {FaArrowRight} from 'react-icons/fa'

const Hero: React.FC = () =>{
    const selectedButton = useAppSelector(state=> state.sideNavButton.buttonDisplay)
    // console.log("This is the button selected .... "+ selectedButton);
    
    const dispatch = useDispatch();
    return(
        <section className="relative h-44">
        
            <img src={heroImage.src} className="w-full h-full" alt="hero-image"/>
            <div className="content md:m-16 m-4 bg-white bg-opacity-20 inset-0 flex flex-col px-4  absolute mt-8">
                <div className="top pt-2">
                    <span><button className="border logo-container w-8 h-8 bg-indigo-600 font-semibold rounded-sm text-md text-white">S</button></span> <span className="font-bold text-white text-md">Semicolon Africa</span>
                </div>
                <div className="profile-btn my-2 pt-2">
                    <button className="border-2 w-44 rounded px-2 h-9 bg-white font-bold text-md text-black">
                        <span className="relative">View Profile</span><span className="absolute mt-1 ml-2"><FaArrowRight/></span> </button>
                </div>
            </div>
        </section>
    )
}
export default Hero;