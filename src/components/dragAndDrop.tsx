import React, {useCallback,useRef, useState } from "react";
import { useDropzone } from 'react-dropzone';
import { FaFileUpload } from "react-icons/fa";

interface FileUploadProps{
    onFileUpload:(file:File) =>void;
}
const DragAndDrop: React.FC<FileUploadProps> = ({onFileUpload}) =>{
    
        const fileInputRef = useRef<HTMLInputElement>(null);
        const [file, setFile] = useState<File | null>(null);
      
        const onDrop = useCallback((acceptedFiles: File[]) => {
          if (acceptedFiles.length > 0) {
            const selectedFile = acceptedFiles[0];
            setFile(selectedFile);
            onFileUpload(selectedFile);
          }
        }, [onFileUpload]);
      
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
            onDrop,
            multiple: false,
            maxSize: 1048576, 
            accept:{
                "image/jpeg": [".jpeg", ".jpg"],
                "image/png": [".png"],
                "image/bmp": [".bmp"],
                "image/webp": [".webp"]
            }
          });
        
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      onFileUpload(selectedFile);
    }
      };
    
    return(
        <>
          <label className="block mb-1 text-sm font-sm ">Add a cohort avatar</label>
        <div {...getRootProps()} className="file-upload border-dashed border-2 rounded-lg border-blue-300 p-6 text-center cursor-pointer ">
        <div className="flex flex-col justify-center text-center items-center mb-3">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 15V19C21.5 19.5304 21.2893 20.0391 20.9142 20.4142C20.5391 20.7893 20.0304 21 19.5 21H5.5C4.96957 21 4.46086 20.7893 4.08579 20.4142C3.71071 20.0391 3.5 19.5304 3.5 19V15" stroke="#475661" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.5 8L12.5 3L7.5 8" stroke="#475661" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5 3V15" stroke="#475661" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
       
        <input {...getInputProps()} />
        <div onClick={() => fileInputRef.current?.click()} >
            <p className="mb-2">{isDragActive ? 'Drop the files here...' : (
               <>
                  Drag and drop or <span className="text-blue-500">choose file</span>
               </> 
            
              )}
            </p>
            <p className="text-gray-500 font-normal text-xs">240x240 px Recommended, max size 1MB</p>
            {file && <p>Selected file: {file.name}</p>}
        </div>
        <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
        />
        </div>
        <p className='text-sm font-sm mb-4'>you can do this later</p> 
        </>
    )
}
export default DragAndDrop;