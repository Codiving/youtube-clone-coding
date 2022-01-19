import styled from "@emotion/styled";

const VideoListContainer = styled("div")(() => {
  return {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "3em 2em",
    padding: "2em 4em"
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
  const { videos } = props;
  return (
    <VideoListContainer>
      {videos.map(item => {
        const {
          snippet: {
            channelTitle,
            title,
            thumbnails: {
              medium: { url },
              id
            }
          }
        } = item;
        return (
          <VideoWrap key={id}>
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
