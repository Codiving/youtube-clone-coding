import styled from "@emotion/styled";

const VideoListContainer = styled("div")(props => {
  const { selectedVideo } = props;
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${selectedVideo ? 1 : 4}, 1fr)`,
    gridGap: "3em 2em",
    maxWidth: !selectedVideo ? "auto" : 300
  };
});

const VideoWrap = styled("div")(() => {
  return {
    cursor: "pointer",
    transition: "transform 250ms ease-in",
    "&:hover": {
      transform: "scale(1.04)"
    }
  };
});

const VideoThumbnail = styled("img")(() => {
  return {
    width: "100%"
  };
});

const VideoMetaWrap = styled("div")(() => {
  return {
    paddingTop: "0.5em",
    "& .title": {
      fontSize: "1.2rem",
      fontWeight: "bold"
    },
    "& .channelTitle": {
      paddingTop: "0.5em"
    }
  };
});

const VideoList = props => {
  const { videos, onVideoClick, selectedVideo } = props;
  return (
    <VideoListContainer selectedVideo={selectedVideo}>
      {(selectedVideo ? videos.slice(0, 5) : videos).map(video => {
        const {
          snippet: {
            channelTitle,
            title,
            thumbnails: {
              medium: { url },
              id
            }
          }
        } = video;
        return (
          <VideoWrap key={id} onClick={() => onVideoClick(video)}>
            <VideoThumbnail alt={title} src={`${url}`} />
            <VideoMetaWrap>
              <p className="title">{title}</p>
              <p className="channelTitle">{channelTitle}</p>
            </VideoMetaWrap>
          </VideoWrap>
        );
      })}
    </VideoListContainer>
  );
};

export default VideoList;
