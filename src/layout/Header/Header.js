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
import { Icon } from "components";
import { IconSize } from "components/Icon/Icon";

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
    marginLeft: 30,
    cursor: "pointer"
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
    height: 40,
    minWidth: 240
  };
});

const InputContainer = styled("div")(() => {
  return {
    width: "60%",
    minWidth: 140,
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
    height: "inherit",
    border: "1px solid #ccc",
    borderRadius: 0,
    paddingRight: searchContainerWidth
  };
});

const InputInnerIcon = styled(FontAwesomeIcon)(props => {
  const { right } = props;
  const { width, height } = IconSize;
  return {
    width: `${width}px !important`,
    height,
    position: "absolute",
    right: `calc(${searchContainerWidth}px + ${right}px)`,
    cursor: "pointer"
  };
});

const InputSearchContainer = styled("div")(() => {
  return {
    width: `${searchContainerWidth}px !important`,
    height: "inherit",
    border: "1px solid #ccc",
    borderLeft: "none",
    background: "lightgray",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  };
});

const MicrophoneIcon = styled(FontAwesomeIcon)(() => {
  return {
    width: "40px !important",
    height: 40,
    backgroundColor: "rgb(230, 230, 230)",
    padding: 10,
    marginLeft: 10,
    borderRadius: 24,
    cursor: "pointer"
  };
});

const HeaderRight = styled("div")(() => {
  return {};
});

const Link = styled("a")(() => {
  return {
    textDecoration: "none"
  };
});

const PersonalInfoContainer = styled("div")(() => {
  return {
    padding: 8,
    backgroundColor: "lightgray",
    borderRadius: 24,
    color: "white"
  };
});

const Header = props => {
  const { onHandleOpen, searchRef, searchVideos } = props;
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Icon
          width={24}
          height={24}
          icon={faBars}
          onClick={() => onHandleOpen(true)}
        />
        <YoutubeLogo>
          <Icon
            width={24}
            height={24}
            icon={faYoutube}
            color="red"
            onClick={() => onHandleOpen(true)}
          />
          <YoutubeText>YouTube</YoutubeText>
          <YoutubeLang>KR</YoutubeLang>
        </YoutubeLogo>
      </HeaderLeft>
      <HeaderMid>
        <InputContainer>
          <Input
            placeholder="검색"
            ref={searchRef}
            onKeyPress={e => {
              if (e.key === "Enter") {
                searchVideos(searchRef.current.value);
                searchRef.current.value = "";
              }
            }}
          />
          <InputInnerIcon icon={faTimes} right={35} />
          <InputInnerIcon icon={faKeyboard} right={10} />
          <InputSearchContainer>
            <Icon icon={faSearch} />
          </InputSearchContainer>
        </InputContainer>
        <MicrophoneIcon icon={faMicrophone} />
      </HeaderMid>
      <HeaderRight>
        <Link
          href="https://www.github.com/Codiving"
          target="_blank"
          rel="noreferrer"
        >
          <PersonalInfoContainer>
            <span>Codiving</span>
          </PersonalInfoContainer>
        </Link>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
