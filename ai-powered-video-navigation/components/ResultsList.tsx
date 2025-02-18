// File: components/ResultsList.tsx
interface Result {
    timestamp: number;
    text?: string;
  }
  
  interface ResultsListProps {
    results: Result[];
  }
  
  const ResultsList = ({ results }: ResultsListProps) => {
    // When a result is clicked, we try to seek the video player (assumes an element with ID "video-player")
    const handleClick = (timestamp: number) => {
      const videoElement = document.getElementById('video-player') as HTMLMediaElement;
      if (videoElement) {
        videoElement.currentTime = timestamp;
        videoElement.play();
      }
    };
  
    return (
      <div className="my-4">
        <h2 className="text-xl font-semibold mb-2">Search Results:</h2>
        {results && results.length > 0 ? (
          results.map((result, index) => (
            <button
              key={index}
              onClick={() => handleClick(result.timestamp)}
              className="block w-full text-left p-2 border border-gray-300 rounded mb-2 hover:bg-gray-100"
            >
              <div>
                <span className="font-bold">Timestamp:</span> {result.timestamp.toFixed(2)} sec
              </div>
              {result.text && <div className="text-sm text-gray-600">{result.text}</div>}
            </button>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    );
  };
  
  export default ResultsList;
  