import { useAppSelector } from "@/ReduxStore/Store";
import CohortDropdown from "./dropdown";
import "../../styles/displayContent.css"

const Cohorts = () =>{
    const selectedButton = useAppSelector(state=> state.sideNavButton.buttonDisplay)
    // console.log("my cohort members " + selectedButton)
    return(
        <>
         <div className="flex flex-col ">
            <h2 className="hidden md:block font-semibold text-lg m-10">Cohorts</h2>
            
            {/* {} */}
            <CohortDropdown/>
            <div className="empty-contents p-8 flex flex-col justify-center items-center lg:mx-60">
                <img src="/empty.png" alt="this is an image displayed when this content is empty"/>
                <h4 className="font-semibold pb-2">Empty Space</h4>
                <p className="mb-8 hidden md:block text-sm empty-message">No cohort has been created yet, let's get you started by <br className="hidden md:block"/>
                <span className="text-sm pb-4 md:mx-24 empty-message"> clicking on the button below</span></p>
                <p className="md:hidden sm:block px-2 text-md leading-7 mb-3 empty-message">No cohort has been created yet, let's get you <br className="hidden md:block"/>
                <span className=" pb-4 empty-message">started by clicking on the button below</span></p>
                <button className=" create-cohort-btn w-44 h-10 rounded text-white ">Create a Cohort</button>
            </div>
        </div>
       
    </>
    )
}
export default Cohorts;