import "../styles/displayContent.css";

const AddedCohortList:React.FC = ({ setIsCohortCreated }) =>{
    const cohorts = [
        { id: 1, name: "Cohort 1", modules: 5, imgSrc: "/cohort1.png" },
        { id: 2, name: "Cohort 2", modules: 8, imgSrc: "/cohort2.png" },
        { id: 3, name: "Cohort 3", modules: 12, imgSrc: "/cohort3.png" },
    ]
    return(
        <>
        {/* hide for medium screen */}
        <div className="cohorted-created-component w-full sm:block md:hidden">
             <div className="flex justify-between items-center w-full mb-4">
                <button className="create-cohort-btn text-white w-full p-2 rounded-md mr-2">Create a Cohort</button>
                <button className="bg-white border-3 p-2 w-full border-2 rounded-md ">More Actions</button>
            </div>
            <input type="text" placeholder="Search" className="border p-2 w-full rounded-md mt-2" />
            <ul>
        {cohorts.map(cohort => (
          <li key={cohort.id} className="flex items-center mb-2">
            <img src={cohort.imgSrc} alt={cohort.name} className="w-6 h-6 mr-2" />
            <div>
              <div>{cohort.name}</div>
              <div>{cohort.modules} modules</div>
            </div>
          </li>
        ))}
      </ul>
        </div>  
        {/* hide for small screen   */}

    <div className="cohort-list-container  md:block sm:hidden border-2  p-4">
      <div className="flex justify-between items-center w-full mb-4">
        <button onClick={() => setIsCohortCreated(false)} className="bg-blue-500 text-white p-2 rounded-md">Create a Cohort</button>
        <button className="bg-gray-200 p-2 rounded-md">More Actions</button>
      </div>
      <input type="text" placeholder="Search" className="border p-2 w-full mb-4" />
      <ul>
        {cohorts.map(cohort => (
          <li key={cohort.id} className="flex items-center mb-2">
            <img src={cohort.imgSrc} alt={cohort.name} className="w-6 h-6 mr-2" />
            <div>
              <div>{cohort.name}</div>
              <div>{cohort.modules} modules</div>
            </div>
          </li>
        ))}
      </ul>
    </div>


        {/* <div className="cohorted-created-component w-full md:block hidden flex justify-between border-2">
            <div> <input type="text" placeholder="Search" className="border p-2 rounded-md" /></div>
       
             <div className="">
                <button className="create-cohort-btn text-white p-2 rounded-md mr-2">Create a Cohort</button>
                <button className="bg-white border-3 p-2 border-2 rounded-md ">More Actions</button>
            </div>
           
        </div>           */}
        </>
    )
}
export default AddedCohortList;

// onClick={() => setIsCohortCreated(false)}