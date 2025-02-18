// File: pages/index.tsx
import VideoUpload from '../components/VideoUpload';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Upload Your Video</h1>
      <VideoUpload />
    </div>
  );
}
