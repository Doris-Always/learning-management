import { ReactNode, useEffect } from "react";
import SideNav from "./sideNav";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/ReduxStore/Store";
import SideBarMainContent from "../components/sideBarContents"
import Cohorts from "./displayedContents/cohorts";
import Programs from "./displayedContents/programs";
import Instructors from "./displayedContents/instructors";
import Learners from "./displayedContents/learners";
interface MainSectionProps{
    children: ReactNode;
}

const MainSection: React.FC<MainSectionProps> = ({children}) =>{


    return(
        <>
        <div className = ' md:flex flex-row'>
        <SideNav/>
        <SideBarMainContent/>
      </div>

            {/* <div className="flex">
                <div className="flex h-screen">
                    <SideNav/>
                </div>
                <div>
                    <div>er</div>
                    <SideBarMainContent/>
                </div>

            </div> */}
        {/* <div className="flex h-screen">
            <SideNav/>
       
            <main className="flex-1 p-4">
           
                 <div className="">
                    <SideBarMainContent/>
                </div>
            </main> 
       
        </div> */}
     
        </>
        // {activeItem === 'Cohorts' && <div><h1>cohort</h1></div>}
        // {activeItem === 'Programs' && "programs"}
        // {activeItem === 'Instructors' && "instructors"}
        // {activeItem === 'Learners' && "learners"}

    )
}
export default MainSection;