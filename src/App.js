import { Video, VideoList } from "components";
import { useCallback, useEffect, useRef, useState } from "react";
import { Footer, Header, Main, Sidebar } from "./layout";

const App = props => {
  const { youtube } = props;
  const [open, setOpen] = useState(false);
  const [pageToken, setPageToken] = useState(null);

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const searchRef = useRef(null);

  const onHandleEmptyVideo = () => setSelectedVideo(null);

  const onHandleOpen = useCallback(() => setOpen(prev => !prev), []);

  const onClose = useCallback(() => setOpen(false), []);

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
      <Sidebar
        open={open}
        onClose={onClose}
        onHandleEmptyVideo={onHandleEmptyVideo}
      />
      <div>
        <Header
          onHandleOpen={onHandleOpen}
          searchRef={searchRef}
          searchVideos={searchVideos}
          onHandleEmptyVideo={onHandleEmptyVideo}
        />
        <Main>
          {selectedVideo && <Video selectedVideo={selectedVideo} />}
          <VideoList
            videos={videos}
            onVideoClick={newVideo => setSelectedVideo(newVideo)}
            selectedVideo={selectedVideo}
          />
        </Main>
      </div>
      <Footer>&copy; Codiving</Footer>
    </div>
  );
};

export default App;
