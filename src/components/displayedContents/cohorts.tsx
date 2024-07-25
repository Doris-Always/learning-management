import { useAppSelector } from "@/ReduxStore/Store";
import CohortDropdown from "./dropdown";
import { useState } from "react";
import UseWindowWidth from "../screenResizingComp/useWindowWith";
import "../../styles/displayContent.css";
import Form from "../createCohortForm";
import CreateCohortModal from "../createCohortModal";

const Cohorts = () =>{
    const selectedButton = useAppSelector(state=> state.sideNavButton.buttonDisplay)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCohortCreated, setIsCohortCreated] = useState(false);
    const [showInlineForm, setShowInlineForm] = useState(false);

    const windowWidth = UseWindowWidth();

    const handleCreateCohort = () =>{
        console.log("a click has happened")
        if(windowWidth >= 768){
            setIsModalOpen(true)
        }else{
            setShowInlineForm(true)
        }
    };
    const handleFormCancel = () =>{
      setShowInlineForm(false);
      setIsModalOpen(false)
    }
    const handleFormSubmit = () => {
        setIsCohortCreated(true);
        setShowInlineForm(false);
        setIsModalOpen(false);
      };
    return(
        <>
         <div className="flex flex-col ">
            <h2 className="hidden md:block font-semibold text-lg m-10">Cohorts</h2>
            
            <CohortDropdown/>
            <div className="empty-contents p-8 flex flex-col justify-center items-center lg:mx-60">
                {/* if cohort has not been created before 
                      then if inlineForm is not showing for small screen,
                        show the content displayed for when cohort is empty
                        else display the inlineForm for small screen
                    else(for large screen) display the modal that has the form
                */}
                {!isCohortCreated ? (
                 <>
                   {!showInlineForm ?  (
                        <>
                        <img src="/empty.png" alt="this is an image displayed when this content is empty"/>
                        <h4 className="font-semibold pb-2">Empty Space</h4>
                        <p className="mb-8 hidden md:block text-sm empty-message">No cohort has been created yet, let's get you started by <br className="hidden md:block"/>
                        <span className="text-sm pb-4 md:mx-24 empty-message"> clicking on the button below</span></p>
                        <p className="md:hidden sm:block px-2 text-md leading-7 mb-3 empty-message">No cohort has been created yet, let's get you <br className="hidden md:block"/>
                        <span className=" pb-4 empty-message">started by clicking on the button below</span></p>
                        <button onClick={handleCreateCohort} className="mb-28 mt-3 create-cohort-btn w-44 h-10 rounded text-white ">Create a Cohort</button>
                        </>
                       
                        ):(
    
                        <Form/>
    
                    )}
                </>
                     
                ):(
                 <>
                    <div className="flex justify-between items-center w-full mb-4">
                    <button onClick={() => setIsCohortCreated(false)} className="bg-blue-500 text-white p-2 rounded-md">Create a Cohort</button>
                    <button className="bg-gray-200 p-2 rounded-md">More Actions</button>
                    </div>
                    <input type="text" placeholder="Search" className="border p-2 w-full" />
                 </>
                )}
              
                
                
            </div>

            <CreateCohortModal isOpen={isModalOpen} onClose={handleFormCancel}/>
        </div>
       
    </>
    )
}
export default Cohorts;