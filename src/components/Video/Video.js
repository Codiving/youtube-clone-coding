import styled from "@emotion/styled";

const VideoContainer = styled("div")(() => {
  return {
    flex: 1
  };
});

const VideoInfoWrap = styled("div")(() => {
  return {
    marginTop: "1.5em",
    "& h2": {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "1em"
    },
    "& p": {
      marginBottom: "1em",
      fontSize: "1.15rem"
    },
    "& pre": {
      whiteSpace: "pre-wrap"
    }
  };
});

const Video = props => {
  const {
    selectedVideo: {
      id,
      snippet: { title, channelTitle, description }
    }
  } = props;

  return (
    <VideoContainer>
      <div>
        <iframe
          type="text/html"
          width="100%"
          height={500}
          title={title}
          src={`https://www.youtube.com/embed/${id}`}
        />
        <VideoInfoWrap>
          <h2>{title}</h2>
          <p>{channelTitle}</p>
          <pre>{description}</pre>
        </VideoInfoWrap>
      </div>
    </VideoContainer>
  );
};

export default Video;
