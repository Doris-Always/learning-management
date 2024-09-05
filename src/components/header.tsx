'use client'
import Link from 'next/link';
import EnumLogo from "@/assets/icons/enum";
import Profile from "@/assets/icons/user";
import BellIcon from "@/assets/icons/bell"
import Chevron from "@/assets/icons/chevron";
import Hamburger from "@/assets/icons/hamburger";
import {usePathname } from 'next/navigation';
import styles from "../styles/header.module.css"
import SmallScreenHeader from "./smallScreenHeader";

interface MenuItem{
    name: string;
    link: string;
}


const Header: React.FC = () =>{
    // const router = useRouter();
    const pathname:string = usePathname();
  
    const menuItems:MenuItem[] = [
        {
          name:"Home",
          link:"/"  
        },
        {
            name:"Work Spaces",
            link:"/workspace"  
        },
        {
            name:"Resource library",
            link:"/resourcelib"  
        }
    ]
    return(
        <>  
            <nav className="w-100 border bg-white hidden md:block lg:block">
                <div className="w-100 border px-6 py-3 flex items-center justify-between">
                <div className="logo mx-10 space-x-4">
                    <EnumLogo/>
                    
                </div>
                <div className="navigation">
                    <ul className="flex space-x-4">
                        {menuItems.map((item)=>(
                            <li key={item.name} className="link">
                                <Link href={item.link}
                                    className={`${styles.link} ${pathname === item.link ? styles['link-active'] : styles['link-inactive']}`}
                                >{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                   
                </div>
                <div className="profile flex justify-between space-x-3">
                    <BellIcon/>
                    <div className="flex justify-between space-x-1">
                    <Profile/>
                    <span>Onowomano</span><span><Chevron/></span>
                    </div>
                    
                    <Hamburger/>
                </div>
                </div>
               
            </nav>
        </>
    )
}
export default Header;