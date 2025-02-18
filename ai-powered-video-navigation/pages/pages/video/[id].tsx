// File: pages/video/[id].tsx
import { useRouter } from 'next/router';
import { useState } from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import SearchBar from '@/components/SearchBar';
import ResultsList from '@/components/ResultsList';
// import ChatBox from '../../components/ChatBox'; // (Bonus: Uncomment if implementing chat)

export default function VideoPage() {
  const router = useRouter();
  const { id } = router.query; // Retrieves the video ID from the URL
  const [results, setResults] = useState([]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Video Player</h1>
      <VideoPlayer videoId={id} />
      <SearchBar videoId={id} onResults={setResults} />
      <ResultsList results={results} />
      {/* Uncomment the following line to enable chat (after setting it up) */}
      {/* <ChatBox videoId={id} /> */}
    </div>
  );
}
