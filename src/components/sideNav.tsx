import React from 'react';
import { setButtonDisplay } from '@/ReduxStore/slice/SideNavSlice';
import { RootState, useAppSelector} from '@/ReduxStore/Store';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import "../styles/sideNav.css"
import BookOpen from './svgIcon/bookOpen';
import BriefCase from './svgIcon/briefCase';
import User from './svgIcon/user';
import Users from './svgIcon/users';
// import { useDispatch, useSelector } from 'react-redux';
interface Props{
    name: string;
    icon:  React.ReactElement;
    active: boolean;
    onClick: () => void;

}


const SideNavItems: React.FC<Props> = ({name,icon,active,onClick})=>(
    <li 
    className={`flex items-center p-4 cursor-pointer ${active ? 'active-nav-style' : 'nav-style'}`} 
   
    onClick={onClick}
>
    <div className='mx-2'>
     {React.cloneElement(icon, { color: active ? '#008EEF' : '#475661' })}
    </div>
    
    <span>{name}</span>
</li>
)

const SideNav: React.FC = () => {
    const selectedButton = useAppSelector(state=> state.sideNavButton.buttonDisplay)
   
    
    const dispatch = useDispatch();
   
    const activeItem = useAppSelector((state: RootState) => state.sideNavButton.buttonDisplay);
   
    const navItems = [
        { name: 'Cohorts', icon: <Users color={'#475661'}/> },
        { name: 'Programs', icon: <BookOpen color={'#475661'}/> },
        { name: 'Instructors', icon: <BriefCase color={'#475661'}/> },
        { name: 'Learners', icon: <User color={'#475661'}/> },
    ];
  
    return (
        <nav className="border-r bg-white flex gap-8 hidden md:block lg:block py-10 px-8 ">
            <ul>
                {navItems.map((item) => (
                    <SideNavItems
                        key={item.name}
                        name={item.name}
                        icon={item.icon}
                        active={activeItem === item.name.toLowerCase()
                        }

                        onClick={()=> {dispatch(setButtonDisplay(item.name.toLowerCase()))}}
                      
                    />
                ))}
            </ul>
        </nav>
    );
};
export default SideNav;