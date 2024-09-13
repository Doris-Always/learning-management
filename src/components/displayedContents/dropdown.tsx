
import React, { useState,useEffect } from 'react';
import { setButtonDisplay} from '@/ReduxStore/slice/SideNavSlice';
import { RootState, useAppSelector} from '@/ReduxStore/Store';
import { useDispatch } from 'react-redux';
import BookOpen from '../svgIcon/user';
import BriefCase from '../svgIcon/briefCase';
import User from '../svgIcon/user';
import Users from '../svgIcon/users';
const CohortDropdown:React.FC = () =>{
    interface DropdownItem {
        name: string;
        icon:  React.ReactElement;
       
      }
      
      const items: DropdownItem[] = [
        { name: 'Cohorts', icon: <Users color={'#475661'}/> },
        { name: 'Programs', icon: <BookOpen color={'#475661'}/> },
        { name: 'Instructors', icon: <BriefCase color={'#475661'}/> },
        { name: 'Learners', icon: <User color={'#475661'}/> },
      ];
    
    const dispatch = useDispatch();
   
    const activeItem = useAppSelector((state: RootState) => state.sideNavButton.buttonDisplay);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<DropdownItem>(items[0]);
    useEffect(()=>{
   
        if(!activeItem){
            dispatch(setButtonDisplay(items[0].name.toLowerCase()))

        }  else {
          const currentItem = items.find(item => item.name.toLowerCase() === activeItem);
          if (currentItem && currentItem !== selectedItem) {
            setSelectedItem(currentItem);
          }}
        
      },[dispatch,activeItem])
     

      const handleSelectItem = (item: DropdownItem) => {
        setSelectedItem(item);
        dispatch(setButtonDisplay(item.name.toLowerCase()));
        setIsOpen(false);

      };

    return(
        <>
        <div className="small-screen-content relative w-full p-5 md:hidden sm:block">
        <p className="mt-8 ">Switch between tabs</p>
      <button 
        onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between p-2 border bg-white w-full rounded-md shadow-sm ring-1 ring-inset mt-2">
        <span className="flex items-center">
          <>
          <div className="mx-2">
                {React.cloneElement(selectedItem.icon, {
                color: activeItem === selectedItem.name.toLowerCase() ? '#008EEF' : '#475661',
                })}
          </div>
         
             <span
                  className={`font-semibold ${
                  activeItem === selectedItem.name.toLowerCase() ? 'text-[#008EEF]' : 'text-[#475661]'
                  }`}>{selectedItem.name}
              </span>
           
          
          </>
         
        </span>
        <span>
            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"      aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </span>
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-full bg-white border px-3">
          {items.map((item) => (
            <li 
              key={item.name}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelectItem(item)}
             
            >
               <div className="mr-2">
                    {React.cloneElement(item.icon, {
                        color: activeItem === item.name.toLowerCase() ? '#008EEF' : '#475661',
                    })}
                </div>
                <span
                      className={`font-semibold ${
                      activeItem === item.name.toLowerCase() ? 'text-[#008EEF]' : 'text-[#475661]'
                      }`}>
                      {item.name}
                   </span>
             
            </li>
          ))}
        </ul>
      )}
    </div>
        </>
  
    )
}
export default CohortDropdown;

