import DragAndDop from "./dragAndDrop"; // Uncomment if needed
import { useState } from "react";
import "../styles/displayContent.css";

interface ChildComponentProps {
  handleCancelFormMobile: () => void;
  cancelForm: boolean;
}

const CreateCohortForm: React.FC<ChildComponentProps> = ({ cancelForm, handleCancelFormMobile }) => {
  const [formData, setFormData] = useState({
    cohortName: '',
    description: '',
    programs: '',
    startDate: '',
    endDate: '',
    imageFile: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (file: File) => {
    setFormData({ ...formData, imageFile: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { cohortName, description, programs, startDate, endDate } = formData;

    const data = {
        cohortName,
        description,
        programs,
        startDate,
        endDate,
        // image: imageFile // Convert the image to base64 if needed
    };

    const response = await fetch('/api/cohorts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result =  response.json;
    if (response.ok) {
        console.log('Cohort created successfully', result);
    } else {
        console.error('Error creating cohort:', result);
    }
};


//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Submitting form...");

//     const { cohortName, description, programs, startDate, endDate} = formData;
//     const formDataObj = new FormData();
//     formDataObj.append('cohortName', cohortName);
//     formDataObj.append('description', description);
//     formDataObj.append('programs', programs);
//     formDataObj.append('startDate', startDate);
//     formDataObj.append('endDate', endDate);
//     // if (imageFile) {
//     //     formDataObj.append('imageFile', imageFile);
//     // }

//     try {
//         const response = await fetch('/api/cohorts', {
//             method: 'POST',
//             body: formDataObj,
//         });

//         const text = await response.text();
//         console.log('Raw response:', text);

//         try {
//             const result = JSON.parse(text);
//             if (response.ok) {
//                 console.log('Cohort created successfully', result);
//             } else {
//                 console.error('Error creating cohort:', result.error);
//             }
//         } catch (jsonError) {
//             console.error('Error parsing JSON:', jsonError);
//             console.error('Response was:', text);
//         }
//     } catch (error) {
//         console.error('Error during fetch:', error);
//     }
// };


  return (
    <>
      {cancelForm ? null : 
        <div className="bg-white md:hidden sm:block h-screen">
          <div className='flex items-center justify-between '>
            <h2 className="text-xl font-semibold mb-2">Create a Cohort</h2>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Form fields here */}
            <label className="block mb-1 text-sm font-sm ">Cohort Name</label>
            <input 
              type="text"
              placeholder="Ex. Cohort 1" 
              className="border-2 p-2 text-sm mb-4 w-full rounded-md"
              name="cohortName"
              value={formData.cohortName}
              onChange={handleInputChange}
            />
            
            <label className="block mb-1 text-sm font-sm ">Description</label>
            <textarea 
              placeholder="Ex. A space for python developers"
              className="text-sm shadow-sm border-2 ring-inset p-3 mb-4 w-full rounded-md mt-3 h-32"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
            
            <label className="block mb-1 text-sm font-sm ">Program</label>
            <button className="flex items-center mb-4 justify-between p-2 border-2 bg-white w-full rounded-md shadow-sm ring-inset mt-2">
              <span></span>
              <span>
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
            
            <div className='flex items-center justify-between mb-4'>
              <div className='mb-4'>
                <label className="block mb-2 text-sm font-sm ">Start Date</label>
                <input 
                  type="date" 
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  placeholder='23 Dec 2021' 
                  className="border-2 p-2 rounded-md"
                />
              </div>
              <div className='mb-4 ml-4'>
                <label className="block mb-2 text-sm font-sm  ">End Date</label>
                <input 
                  type="date"
                  placeholder='23 Dec 2021'  
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="border-2 rounded-md p-2"
                />
              </div>
            </div>

            {/* Uncomment if file upload is needed */}
            {/* <DragAndDop onFileUpload={handleFileUpload} /> */}

            <div className="flex flex-col relative z-10">
              <button type="submit" className="create-cohort-btn bg- w-full text-white p-3 mb-3 rounded-md">Create Cohort</button>
              <button type="button" onClick={handleCancelFormMobile} className="cancel-btn bg-gray-200 w-full p-3 rounded-md">Cancel</button>
            </div>
          </form>
        </div>
      }
    </>
  );
};

export default CreateCohortForm;
