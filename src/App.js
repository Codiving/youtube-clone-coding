import { VideoList } from "components";
import { useCallback, useEffect, useRef, useState } from "react";
import { Footer, Header, Sidebar } from "./layout";

const App = props => {
  const { youtube } = props;
  const [open, setOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState(null);
  const searchRef = useRef(null);

  const onHandleOpen = useCallback(newOpen => setOpen(newOpen), []);

  const searchVideos = word => {
    youtube.searchVideos(word, pageToken).then(result => {
      const { nextPageToken, videos } = result;

      setVideos(videos);
      setPageToken(nextPageToken);
    });
  };

  useEffect(() => {
    youtube.searchMostPopular().then(result => {
      const { nextPageToken, videos } = result;

      setVideos(videos);
      setPageToken(nextPageToken);
    });
  }, [youtube]);

  return (
    <div>
      <Sidebar open={open} onHandleOpen={onHandleOpen} />
      <div>
        <Header
          onHandleOpen={onHandleOpen}
          searchRef={searchRef}
          searchVideos={searchVideos}
        />
        <VideoList videos={videos} />
      </div>
      <Footer>&copy; Codiving</Footer>
    </div>
  );
};

export default App;
