import Profile from "@/assets/icons/user";
import Chevron from "@/assets/icons/chevron";
const SmallScreenHeader:React.FC = () =>{
    return(
        <nav className="w-100 border bg-white md:hidden sm:block flex justify-between p-3">
            <div className="logo">
            <svg data-v-6d36f692="" width="21" height="33" viewBox="0 0 37 43" fill="none" xmlns="http://www.w3.org/2000/svg" className="tw-mr-2"><g data-v-6d36f692="" clip-path="url(#clip0)"><circle data-v-6d36f692="" cx="19.3806" cy="15.8819" r="10.5384" stroke="#008EEF" stroke-width="7.98716"></circle> <path data-v-6d36f692="" fill-rule="evenodd" clip-rule="evenodd" d="M33.7918 33.0854C32.6021 31.665 30.4967 31.5084 28.8902 32.4315C25.769 34.2248 22.1823 35.1107 18.5407 34.9501C14.899 34.7896 11.4042 33.5915 8.45298 31.5304C6.93395 30.4696 4.82295 30.4403 3.51284 31.7504C2.20274 33.0605 2.19135 35.205 3.66028 36.3342C7.81554 39.5283 12.8692 41.3976 18.1557 41.649C18.1855 41.6504 18.2154 41.6518 18.2452 41.6531C18.275 41.6544 18.3048 41.6557 18.3346 41.6569C23.6228 41.8717 28.8213 40.4544 33.2416 37.6384C34.8042 36.6429 34.9816 34.5057 33.7918 33.0854Z" fill="#008EEF"></path></g> <defs data-v-6d36f692=""><clipPath data-v-6d36f692="" id="clip0"><rect data-v-6d36f692="" width="35.4003" height="41.3003" fill="white" transform="translate(1.15332 0.965332)"></rect></clipPath></defs></svg>
            </div>
            <div className="profile flex justify-between ">
                <div className="px-2">
                <svg width="25" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0991 12.1104C22.0991 10.3865 21.4143 8.73321 20.1953 7.51422C18.9763 6.29523 17.323 5.61041 15.5991 5.61041C13.8752 5.61041 12.2219 6.29523 11.0029 7.51422C9.78394 8.73321 9.09912 10.3865 9.09912 12.1104C9.09912 19.6937 5.84912 21.8604 5.84912 21.8604H25.3491C25.3491 21.8604 22.0991 19.6937 22.0991 12.1104Z" stroke="#475661" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.4733 26.1938C17.2828 26.5221 17.0095 26.7947 16.6806 26.9841C16.3516 27.1736 15.9787 27.2733 15.5991 27.2733C15.2196 27.2733 14.8466 27.1736 14.5177 26.9841C14.1888 26.7947 13.9154 26.5221 13.725 26.1938" stroke="#475661" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="22.5968" cy="8.89259" r="7.8" fill="#008EEF"/>
                <path d="M21.4473 12.4438V6.41176L20.2721 6.68216V5.87096L21.8841 5.16376H22.5913V12.4438H21.4473Z" fill="white"/>
                </svg> 
                </div>
                <div className="">
                <img src="/Ellipse 131.png" alt="" className="w-6" />
                
                </div>

            </div>
        </nav>
    )
}
export default SmallScreenHeader;