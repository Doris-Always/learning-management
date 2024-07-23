import { setButtonDisplay } from '@/ReduxStore/slice/SideNavSlice';
import { RootState, useAppSelector} from '@/ReduxStore/Store';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import "../styles/sideNav.css"
// import { useDispatch, useSelector } from 'react-redux';
interface Props{
    name: string;
    icon: string;
    active: boolean;
    onClick: () => void;

}


const SideNavItems: React.FC<Props> = ({name,icon,active,onClick})=>(
    <li 
    className={`flex items-center p-4 cursor-pointer ${active ? ['active-nav-style'] : 'nav-style'}`} 
    onClick={onClick}
>
    {/* <span className="mr-2">{icon}</span> */}
    <img src={icon} alt={`${name} icon`} className="mr-4" />
    <span>{name}</span>
</li>
)

const SideNav: React.FC = () => {
    const selectedButton = useAppSelector(state=> state.sideNavButton.buttonDisplay)
    // console.log("This is the button selected .... "+ selectedButton);
    
    const dispatch = useDispatch();
    // const dispatch = useDispatch();
    const activeItem = useAppSelector((state: RootState) => state.sideNavButton.buttonDisplay);
   
    const navItems = [
        { name: 'Cohorts', icon: '/users.png' },
        { name: 'Programs', icon: '/book-open.png' },
        { name: 'Instructors', icon: '/briefcase.png' },
        { name: 'Learners', icon: '/user.png' },
    ];
    const[display, setDisplay] = useState(navItems[0])
    useEffect(()=>{
        if(!activeItem){
            dispatch(setButtonDisplay('cohorts'))
        }
    },[dispatch, activeItem])

    return (
        <nav className="w-72 border-r bg-white flex gap-8 hidden md:block lg:block">
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