
import React, { useState,useEffect } from 'react';
import { setButtonDisplay } from '@/ReduxStore/slice/SideNavSlice';
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
    //get the icon and text for each and still add caret
    //map all the content using map
    //usedispatch and useselector to check which of them in the dropdown
    const dispatch = useDispatch();
    const selectedItem = useAppSelector((state: RootState) => state.sideNavButton.buttonDisplay);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(()=>{
        if(!selectedItem){
            dispatch(setButtonDisplay(items[0].name.toLowerCase()))
        }
      },[dispatch,selectedItem])
    

    return(
        <>
        <div className="small-screen-content relative w-64 md:hidden sm:block">
        <p className="mt-8 px-4">Switch between tabs</p>
      <button 
        onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between p-2 border bg-white w-full rounded-md shadow-sm ring-1 ring-inset">
        <span className="flex items-center">
          <img src={items.find(item => item.name === selectedItem)?.icon} alt="" className="w-6 h-6 mr-2" />
          {selectedItem || 'Select an item'}
        </span>
        <span>
            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"      aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
        </span>
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-full bg-white border">
          {items.map((item) => (
            <li 
              key={item.name}
              active=
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                dispatch(setButtonDisplay(item.name));
                setIsOpen(false);
              }}
            >
              <img src={item.icon} alt={`${item.name} icon`} className="w-6 h-6 mr-2" />
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>




         {/* <div className="flex flex-col justify-center small-screen-content md:hidden sm:block">
                <p className="mt-8 px-4">Switch between tabs</p>
                <div className="relative inline-block text-left w-full p-4">
                    <div>
                        <button type="button" className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                          Options
                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"      aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div> */}
        </>
  
    )
}
export default CohortDropdown;