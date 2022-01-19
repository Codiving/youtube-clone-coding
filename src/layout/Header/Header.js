import styled from "@emotion/styled";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faKeyboard,
  faMicrophone,
  faSearch,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconSize = {
  width: 20,
  height: 20
};

const searchContainerWidth = 60;

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
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: 40
  };
});

const InputContainer = styled("div")(() => {
  return {
    width: "60%",
    maxWidth: 600,
    height: "inherit",
    position: "relative",
    display: "flex",
    alignItems: "center"
  };
});

const Input = styled("input")(() => {
  return {
    width: `calc(100% - ${searchContainerWidth}px)`,
    height: "inherit"
  };
});

const InputInnerIcon = styled(FontAwesomeIcon)(props => {
  const { right } = props;
  const { width, height } = iconSize;
  return {
    width: `${width}px !important`,
    height,
    position: "absolute",
    right: `calc(${searchContainerWidth}px + ${right}px)`
  };
});

const InputSearchContainer = styled("div")(() => {
  return {
    width: `${searchContainerWidth}px !important`,
    height: "inherit",
    border: "1px solid",
    borderLeft: "none",
    background: "lightgray",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
});

const InputSearchIcon = styled(FontAwesomeIcon)(() => {
  const { width, height } = iconSize;
  return {
    width: `${width}px !important`,
    height,
    position: "absolute"
  };
});

const MicrophoneIcon = styled(FontAwesomeIcon)(() => {
  return {
    width: "40px !important",
    height: 40,
    backgroundColor: "rgb(230, 230, 230)",
    padding: 10,
    marginLeft: 10,
    borderRadius: 24
  };
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
        <InputContainer>
          <Input placeholder="검색" />
          <InputInnerIcon icon={faTimes} right={35} />
          <InputInnerIcon icon={faKeyboard} right={10} />
          <InputSearchContainer>
            <InputSearchIcon icon={faSearch} />
          </InputSearchContainer>
        </InputContainer>
        <MicrophoneIcon icon={faMicrophone} />
      </HeaderMid>
      <HeaderRight>오른쪽 영역</HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
