import { Box } from '@mui/material';
import { FileUpload } from 'primereact/fileupload';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BsTrash } from 'react-icons/bs';
import DeleteFile from 'utils/fileUpload/DeleteFile';
import UploadImage from 'utils/fileUpload/UploadImage';
import DocImage from 'assets/images/doc.svg';
import CustomFileUpload from './CustomFileUpload';
function DocUpload({ setDocUrl, imageMode, className, docUrl = '' }) {
  const [doc, setDoc] = useState('');
  const handleDocChange = async (fileData) => {
    const file = fileData.files[0];
    console.log(file);
    toast.promise(UploadImage({ srcData: file, folderName: 'driving_school/' }), {
      loading: 'Uploading document...',
      success: (data) => {
        console.log(data);
        setDocUrl && setDocUrl(data);
        setDoc(data); // Assuming 'data' is the URL or relevant information about the uploaded image
        return 'Document uploaded successfully';
      },
      error: (error) => {
        console.error(error);
        return 'Something went wrong';
      }
    });
  };
  const handleDocDelete = async () => {
    toast.promise(DeleteFile({ imageUrl: doc }), {
      loading: 'Deleting Document...',
      success: (data) => {
        console.log(data);
        // Handle success, if needed
        setDocUrl && setDocUrl();
        setDoc('');
        return 'Document deleted successfully';
      },
      error: (error) => {
        console.error(error);
        // Handle error, if needed
        return 'Something went wrong';
      }
    });
  };
  useEffect(() => {
    setDoc(docUrl);
  }, [docUrl]);
  return (
    <Box sx={{ width: '100%', height: '100% ' }}>
      {doc ? (
        <div className=" w-full h-full ">
          <div className={'w-full h-full relative overflow-hidden group flex justify-center items-center ' + className}>
            <img src={imageMode ? doc : DocImage} alt="list" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <BsTrash className="text-white text-4xl cursor-pointer" onClick={handleDocDelete} />
            </div>
          </div>
        </div>
      ) : (
        // <CustomFileUpload />
        <FileUpload mode="basic" name="demo[]" maxFileSize={1000000} customUpload uploadHandler={handleDocChange} multiple />
      )}
    </Box>
  );
}
export default DocUpload;