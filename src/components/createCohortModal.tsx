import React from 'react';
import {useState} from "react"
import DragAndDrop from "./dragAndDrop";
import "../styles/displayContent.css";


interface CreateCohortModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateCohortModal: React.FC<CreateCohortModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const handleFileUpload = (file: File) => {
    setFormData({ ...formData, imageFile: file });
  };


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

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-h-[100vh] overflow-y-auto custom-scrollbar">
        <div className='flex items-center justify-between py-3'>
           <div><h2 className="text-xl font-semibold mb-4">Create a Cohort</h2></div> 
           <div>
           <svg onClick={onClose} className="w-6 h-6 cursor-pointer"fill="none"stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
           </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Form fields here */}
          <label className="block mb-1 text-sm font-sm ">Cohort Name</label>
          <input type="text-sm"
           placeholder="Ex. Cohort 1"
           name="cohortName"
           value={formData.cohortName}
           onChange={handleInputChange}
           className="border-2 p-2 mb-4 w-full rounded-md"/>

          <label className="block mb-1 text-sm font-sm ">Description</label>
          <textarea 
          placeholder="Ex. A space for python developers" 
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="text-sm shadow-sm border-2 ring-inset p-3 mb-4 w-full rounded-md mt-3 h-32 "></textarea>

          <label className="block mb-1 text-sm font-sm ">Program</label>
                <button className="flex items-center mb-4 justify-between p-2 border-2 bg-white w-full rounded-md shadow-sm ring-inset mt-2">
                    <span></span>
                    <span>
                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"      aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                   </span>
                </button>
          <div className='flex items-center mb-4'>
            <div className='mb-4'>
                <label className="block mb-2 text-sm font-sm ">Start Date</label>
                <input type="date"
                 placeholder='23 Dec 2021' 
                 name="startDate"
                 value={formData.startDate}
                 onChange={handleInputChange}
                 className="border-2 p-2 rounded-md"/>
            </div>
           
            <div className='mb-4 ml-4'>
            <label className="block mb-2 text-sm font-sm  ">End Date</label>
                <input type="date" 
                placeholder='23 Dec 2021' 
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="border-2 rounded-md p-2"/>
            </div>
           
          </div>
          <DragAndDrop onFileUpload={handleFileUpload}/>
          {/* <label className="block mb-1 text-sm font-sm ">Add a cohort avatar</label>
          <input type="file" className="border p-2  w-full"/>
          <p className='text-sm font-sm'>you can do this later</p> */}
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="cancel-btn bg-gray-200 p-3 rounded-md mr-2">Cancel</button>
            <button type="submit" className="create-cohort-btn text-white p-3 rounded-md">Create Cohort</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCohortModal;