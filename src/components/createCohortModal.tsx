import React from 'react';

interface CreateCohortModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateCohortModal: React.FC<CreateCohortModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Create a Cohort</h2>
        <form>
          {/* Form fields here */}
          <input type="text" placeholder="Cohort Name" className="border p-2 mb-4 w-full"/>
          <textarea placeholder="Description" className="border p-2 mb-4 w-full"></textarea>
          <input type="date" className="border p-2 mb-4 w-full"/>
          <input type="date" className="border p-2 mb-4 w-full"/>
          <input type="file" className="border p-2 mb-4 w-full"/>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="bg-gray-200 p-2 rounded-md mr-2">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Create Cohort</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCohortModal;