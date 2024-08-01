import React from "react";
import {usePathname} from "next/navigation";
import styles from "../styles/header.module.css";
import FooterNavItems from "../components/footerNavItems"


interface Props{
    name: string;
    icon: string;
    link: string;
    active: boolean;
   

}

const FooterSmallScreen:React.FC = () =>{
  

    const menuItems = [
        {name:"Home",link:"/",icon:"/home.png"},
        {name:"Workspaces",link:"/workspace",icon:"/layout.png"},
        { name:"Resources", link:"/resourcelib",icon:"/book-open.png"},
        {name:"Schedule",link:"/schedule",icon:"/calendar.png"}
    ];
    return(
        <>

           <footer className="w-full flex justify-between item-center mt-auto shadow-xl bg-white md:hidden sm-block ">
           <ul className="flex justify-between items-center w-full">
            {menuItems.map((item) => (
            <FooterNavItems key={item.name} name={item.name} icon={item.icon} link={item.link} />
            ))}
          </ul>
                
                  
           </footer>
        </>
    )
}
export default FooterSmallScreen;
