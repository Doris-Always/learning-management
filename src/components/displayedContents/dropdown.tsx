
import React, { useState,useEffect } from 'react';
import { setButtonDisplay} from '@/ReduxStore/slice/SideNavSlice';
import { RootState, useAppSelector} from '@/ReduxStore/Store';
import { useDispatch } from 'react-redux';


 
const CohortDropdown:React.FC = () =>{
    interface DropdownItem {
        name: string;
        icon: string;
      }
      
      const items: DropdownItem[] = [
        { name: 'Cohorts', icon: '/users.png' },
        { name: 'Programs', icon: '/book-open.png' },
        { name: 'Instructors', icon: '/briefcase.png' },
        { name: 'Learners', icon: '/user.png' },
      ];
    
    const dispatch = useDispatch();
    const buttonDisplay = useAppSelector((state: RootState) => state.sideNavButton.buttonDisplay);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(items[0].name);
    useEffect(()=>{
      console.log("use effect is working 1")
        if(!buttonDisplay){
            dispatch(setButtonDisplay(items[0].name && items[0].icon))

        }
      },[dispatch,buttonDisplay,items])

      const handleSelectItem = (item: DropdownItem) => {
        console.log("handle select worked now 2")
        setSelectedItem(item.name)
        setIsOpen(false)
      };

    return(
        <>
        <div className="small-screen-content relative w-full p-5 md:hidden sm:block">
        <p className="mt-8 ">Switch between tabs</p>
      <button 
        onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between p-2 border bg-white w-full rounded-md shadow-sm ring-1 ring-inset mt-2">
        <span className="flex items-center">
          <>
          <img src={items.find(item => item.name === selectedItem)?.icon }  alt="" className="w-6 h-6 mr-2" />
          {selectedItem}
          </>
         
        </span>
     

       
           {/* {items.find(item => item.name === selectedItem)?.icon} */}
        <span>
            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"      aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
        </span>
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-full bg-white border px-4">
          {items.map((item) => (
            <li 
              key={item.name}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelectItem(item)}
              // onClick={() => {
              //   dispatch(setButtonDisplay(item.name));
              //   setIsOpen(false);
              // }}
            >
              <img src={item.icon} alt={`${item.name} icon`} className="w-6 h-6 mr-2" />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
        </>
  
    )
}
export default CohortDropdown;