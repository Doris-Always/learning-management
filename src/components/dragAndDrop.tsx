import { FaFileUpload } from "react-icons/fa";
const DragAndDop = () =>{
    return(
        <>
              <label>Add a class avatar</label>
                <div className="w-full border border-2">
                    <div>for svg</div>
                    <FaFileUpload className="ml-2 mb-2" />
                    <div>Drag and drop or <a>choose file</a></div>
                    <p>240 x 240px Recommended, max size 1MB</p>

                </div>
        </>
    )
}
export default DragAndDop;