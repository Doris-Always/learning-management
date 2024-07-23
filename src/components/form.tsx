import DragAndDop from "./dragAndDrop";

const Form:React.FC = () =>{
    return(
        <>
         <div className="form-container">
            <h2>Create a Cohort</h2>
            <form>
                <label>Cohort name</label>
                <input/>
                <label>Description</label>
                <textarea></textarea>
                <label>Program</label>
                <button className="flex items-center justify-between p-2 border bg-white w-full rounded-md shadow-sm ring-1 ring-inset mt-2">
                    <span>add</span>
                    <span>
                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"      aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                   </span>
                </button>
                <DragAndDop/>
            </form>
         </div>
        </>
    )

}
export default Form;