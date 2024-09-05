'use client'
import { useAppSelector } from "@/ReduxStore/Store";
import {useEffect} from 'react'
import CohortDropdown from "./dropdown";
import { useState } from "react";
import UseWindowWidth from "../screenResizingComp/useWindowWith";
import "../../styles/displayContent.css";
import CreateCohortForm from "../createCohortForm";
import CreateCohortModal from "../createCohortModal";
import AddedCohortList from "../addedCohortList";

const Cohorts = () =>{
    const selectedButton = useAppSelector(state=> state.sideNavButton.buttonDisplay)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCohortCreated, setIsCohortCreated] = useState(false);
    const [showInlineForm, setShowInlineForm] = useState(false);
    const [formForMobile, showFormForMobile] = useState(false)
    const [cancelForm, setCancelForm] = useState(false)
    const [cohorts, setCohorts] = useState([])

    const windowWidth = UseWindowWidth();

    useEffect(() => {
        const fetchCohorts = async () => {
          try {
            const response = await fetch('/api/cohorts', {
              method: 'GET',
            });
      
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
      
            const text = await response.text();
            console.log('Raw response:', text);
    
            if (text) {
              const result = JSON.parse(text);
              console.log('Cohorts fetched successfully', result);
              setCohorts(result);
            } else {
              console.error('Response is empty');
            }
          } catch (error) {
            console.error('Error fetching cohorts:', error);
          }
        };
      
        fetchCohorts();
      }, []);
      
     

    const handleCreateCohort = () =>{
        console.log("A click has happened");
        showFormForMobile(true);
        setShowInlineForm(true);
        
      
        // Handle the case where 'windowWidth' might be null
        if (windowWidth !== null && windowWidth >= 768) {
          setIsModalOpen(true);
        } else {
          setShowInlineForm(true);
        }
        // console.log("a click has happened")
        // showFormForMobile(true)
        // if(windowWidth >= 768){
        //     setIsModalOpen(true)
        // }else{
        //     setShowInlineForm(true)
        // }
    };
    const handleFormCancel = () =>{
      setShowInlineForm(false);
      setIsModalOpen(false)
    }

    const handleCancelFormMobile = () => {
        console.log("logggggggggggggggggggggggggggggggggged ===> >> > > > ")
        setCancelForm(true)
    }


    const handleFormSubmit = () => {
        setIsCohortCreated(true);
        setShowInlineForm(false);
        setIsModalOpen(false);
      };

    return(
        <>
         <div className="w-full">
            <h2 className="hidden md:block font-semibold text-lg m-10">Cohorts</h2>
            {/* <AddedCohortList/> */}
            
            
            <div className="empty-contents p-8 flex flex-col justify-center items-center ">
            {/* {formForMobile && <Form />} */}
                {/* if cohort has not been created before 
                      then if inlineForm is not showing for small screen,
                        show the content displayed for when cohort is empty
                        else display the inlineForm for small screen
                    else(for large screen) display the modal that has the form
                */}
                {cohorts.length == 0 ? (
                 <>
                   {!showInlineForm ?  (
                        <>
                        <div className="hidden md:block flex flex-col justify-between items-center ">
                        <img src="/empty.png"className="mx-24" alt="this is an image displayed when this content is empty"/>
                        <h4 className="font-semibold pb-2 pt-4 flex justify-center items-center ">Empty Space</h4>
                        <p className="mb-8 hidden md:block text-sm empty-message ">No cohort has been created yet, let's get you started by <br className=""/>
                        <span className="text-sm pb-4 empty-message mx-24"> clicking on the button below</span></p>
                        <button onClick={handleCreateCohort} className="mb-28 mt-3 mx-24 create-cohort-btn w-44 h-10 rounded text-white ">Create a Cohort</button>
                        </div>
                       

                        <div className="md:hidden sm:block flex flex-col justify-between items-center">
                        <img src="/empty.png"className="" alt="this is an image displayed when this content is empty"/>
                        <h4 className="font-semibold pb-2">Empty Space</h4>
                            <p className="md:hidden sm:block px-2 text-md leading-7 mb-3 empty-message">No cohort has been created yet, let's get you <br className="hidden md:block"/>
                            <span className=" pb-4 empty-message">started by clicking on the button below</span></p>
                            <button onClick={handleCreateCohort} className=" mb-28 mt-3 create-cohort-btn w-44 h-10 rounded text-white ">Create a Cohort</button>
                        </div>
                        </>
                       
                        ):
   
                            !cancelForm  && <div>
                            <CreateCohortForm cancelForm = {cancelForm} handleCancelFormMobile={handleCancelFormMobile} />
                           </div>

                    }
                </>
                     
                ):(
                 <>
                                          <AddedCohortList cohorts = {cohorts} handleCreateCohort={handleCreateCohort }/>
                    {/* <div className="flex justify-between items-center w-full mb-4">
                    <button onClick={() => setIsCohortCreated(false)} className="bg-blue-500 text-white p-2 rounded-md">Create a Cohort</button>
                    <button className="bg-gray-200 p-2 rounded-md">More Actions</button>
                    </div>
                    <input type="text" placeholder="Search" className="border p-2 w-full" /> */}
                 </>
                )}
    
                
            </div>

            <CreateCohortModal isOpen={isModalOpen} onClose={handleFormCancel}/>
            
        </div>
      
    </>
    )
}
export default Cohorts;





