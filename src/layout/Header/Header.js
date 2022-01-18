import styled from "@emotion/styled";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderContainer = styled("div")(() => {
  return {
    height: 56,
    padding: "0 36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid lightgray"
  };
});

const HeaderLeft = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center"
  };
});

const YoutubeLogo = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginLeft: 30
  };
});

const YoutubeText = styled("span")(() => {
  return {
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: -2.5,
    position: "relative",
    top: 2
  };
});

const YoutubeLang = styled("span")(() => {
  return {
    fontSize: 10,
    position: "absolute",
    top: 0,
    right: -13,
    textTransform: "uppercase"
  };
});

const HeaderMid = styled("div")(() => {
  return {};
});

const HeaderRight = styled("div")(() => {
  return {};
});

const Header = props => {
  const { onHandleOpen } = props;
  return (
    <HeaderContainer>
      <HeaderLeft>
        <FontAwesomeIcon
          style={{ fontSize: 24 }}
          icon={faBars}
          onClick={() => onHandleOpen(true)}
        />
        <YoutubeLogo>
          <FontAwesomeIcon icon={faYoutube} size="2x" color="red" />
          <YoutubeText>YouTube</YoutubeText>
          <YoutubeLang>KR</YoutubeLang>
        </YoutubeLogo>
      </HeaderLeft>
      <HeaderMid>
        <input style={{ width: "60%" }} />
      </HeaderMid>
      <HeaderRight>오른쪽 영역</HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
