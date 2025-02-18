// File: components/VideoUpload.tsx
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const VideoUpload = () => {
  const [uploading, setUploading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'video/mp4, video/webm',
    maxSize: 31457280, // 30MB limit (adjust as needed)
    onDrop: async (files) => {
      setUploading(true);
      const formData = new FormData();
      formData.append('video', files[0]);

      try {
        // Make sure to change the URL if your backend is hosted elsewhere
        const response = await axios.post('http://localhost:8000/api/upload/', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log('Upload successful, video ID:', response.data.id);
        // Optionally, you could redirect to the video page:
        // router.push(`/video/${response.data.id}`);
      } catch (error) {
        console.error('Error uploading video:', error);
      }
      setUploading(false);
    },
  });

  return (
    <div {...getRootProps()} className="p-6 border-dashed border-2 border-gray-300 rounded text-center">
      <input {...getInputProps()} />
      {uploading ? <p>Uploading...</p> : <p>Drag & drop your video here, or click to select a file</p>}
    </div>
  );
};

export default VideoUpload;
