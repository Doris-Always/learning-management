import { useAppSelector } from "@/ReduxStore/Store";
import CohortDropdown from "./dropdown";
import "../../styles/displayContent.css"

const Learners = () =>{
    return(
        <>
            <div className="flex flex-col ">
                <h2 className="hidden md:block font-semibold text-lg m-10">Programs</h2>
                
                {/* <div className="flex flex-col justify-center small-screen-content md:hidden sm:block ">
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
                <CohortDropdown/>
                <div className="empty-contents p-8 flex flex-col justify-center items-center lg:mx-60">
                    <img src="/empty.png" alt="this is an image displayed when this content is empty"/>
                    <h4 className="font-semibold pb-2">Empty Space</h4>
                    <p className="mb-8 hidden md:block text-sm empty-message">No cohort has been created yet, let's get you started by <br className="hidden md:block"/>
                    <span className="text-sm pb-4 md:mx-24 empty-message"> clicking on the button below</span></p>
                    <p className="md:hidden sm:block px-2 text-md leading-7 mb-3 empty-message">No cohort has been created yet, let's get you <br className="hidden md:block"/>
                    <span className=" pb-4 empty-message">started by clicking on the button below</span></p>
                    <button className=" create-cohort-btn w-44 h-10 rounded text-white ">Add learners</button>
                </div>
            </div>
        </>
    )
}
export default Learners;