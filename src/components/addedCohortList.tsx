import "../styles/displayContent.css";
import { useState } from "react";
import UseWindowWidth from "../components/screenResizingComp/useWindowWith";


const AddedCohortList = ({ cohorts,handleCreateCohort  }: { cohorts: any[],handleCreateCohort : () => void }) =>{

  const windowWidth = UseWindowWidth();
  const [searchTerm, setSearchTerm] = useState('');

  // const filteredCohorts = cohorts.filter((cohort) =>
  // cohort.cohortName.toLowerCase().includes(searchTerm.toLowerCase())
  // )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
  
    const suffix = (day: number) => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
  
    return `Created ${day}${suffix(day)} ${month} ${year}`;

   
  };
  const filteredCohorts = cohorts.filter((cohort) =>
  cohort.cohortName.toLowerCase().includes(searchTerm.toLowerCase())
  )


  console.log("frommmm =======>", cohorts)

    return(
        <>
        {/* hide for medium screen */}

        
    <div className=" hidden md:block w-full ">
        <div className="flex justify-between items-center mb-4">
        <div className="w-[50%]">
            <input type="text"
             placeholder="Search"
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             className="border p-2 w-full mb-4" />
         </div>

         <div className="">
          <button onClick={handleCreateCohort } className="bg-[#008EEF] mr-4 text-white p-2 rounded-md">Create a Cohort</button>
          <button className="bg-white border-2 p-2 rounded-md">More Actions</button>
         </div>
          
         
               

    </div>
    <ul className="">
          {filteredCohorts.length > 0 ? (
            filteredCohorts.map((cohort) => (
              <li key={cohort.id} className="flex items-center mb-2 shadow-sm p-4">
                <img src="/unsplash_gbNuQfm9hTE.png" alt="cohort" className="mr-2" />
                <div className="cohort-info bg-white flex ml-4 justify-between items-center w-full py-4">
                  <div className="flex flex-row items-center w-[55%]">
                    <div className="cohort-comp mr-8 w-[30%]">
                      <h3 className="truncate font-normal">{cohort.cohortName}</h3>
                      <p className="truncate text-xs font-medium text-gray-500">{cohort.programs}</p>
                    </div>

                    <div className="flex flex-row w-[35%] text-sm">
                      <div className="mr-2">
                        <img src="/user.png" className="w-[15px] pt-4" alt="" />
                      </div>
                      <p className="text-gray-600 pt-4">25 Learners</p>
                    </div>
                  </div>
                  <div className="date-comp">
                    <p className="text-sm text-gray-500">{formatDate(cohort.startDate)}</p>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li>No cohorts found</li>
          )}
        </ul>
      
    
    </div>

        <div className="cohorted-created-component w-full sm:block md:hidden">
             <div className="flex justify-between items-center w-full mb-4">
                <button onClick={handleCreateCohort} className="create-cohort-btn text-white w-full p-2 rounded-md mr-2">Create a Cohort</button>
                <button className="bg-white border-3 p-2 w-full border-2 rounded-md ">More Actions</button>
            </div>
            <input type="text"
             placeholder="Search" 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 w-full rounded-md mt-2" />

<ul className="pt-4">
          {filteredCohorts.length > 0 ? (
            filteredCohorts.map((cohort) => (
              <li key={cohort.id} className="flex bg-white items-center shadow-sm p-4 mb-2">
                <img src="/unsplash_gbNuQfm9hTE.png" alt="cohort" className="w-6 h-6" />
                <div className="cohort-info flex ml-4 justify-between items-center w-full">
                  <div className="flex flex-col items-center">
                    <div className="cohort-comp mr-8">
                      <h3 className="truncate font-normal">{cohort.cohortName}</h3>
                      <p className="truncate text-xs font-medium text-gray-500">{cohort.programs}</p>
                    </div>
                  </div>
                  <div className="flex flex-row text-sm">
                    <div className="">
                      <img src="/user.png" className="w-[15px] pt-2" alt="" />
                    </div>
                    <p className="text-gray-600 pt-2">25 Learners</p>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li>No cohorts found</li>
          )}
        </ul>
           
        </div>  
        {/* hide for small screen   */}



       
        </>
    )
}
export default AddedCohortList;
