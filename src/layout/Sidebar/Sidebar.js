import styled from "@emotion/styled";
import {
  faClock,
  faHistory,
  faHome,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "components";
import { useCallback } from "react";

const width = 240;

const SidebarContainer = styled("div")(props => {});

const SidebarMenu = styled("div")(props => {
  const { open } = props;

  return {
    position: "fixed",
    top: 0,
    left: open ? 0 : -width,
    width: width,
    height: "100%",
    background: "#fff",
    zIndex: 3,
    transitionProperty: "left",
    transitionDuration: "0.3s",
    padding: "1em 0"
  };
});

const SidebarIconWrap = styled("div")(() => {
  return {
    textAlign: "right",
    margin: "0 1em 1em 0"
  };
});

const SidebarListWrap = styled("ul")(() => {});

const SidebarItem = styled("li")(() => {
  return {
    padding: "10px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "lightgray"
    },
    "& > svg": {
      marginRight: 15
    }
  };
});

const SidebarDark = styled("div")(props => {
  const { open } = props;

  const css = open
    ? {
        visibility: "visible",
        opacity: 0.7
      }
    : {
        visibility: "hidden",
        opacity: 0
      };

  return {
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
    transition: "0.3s ease-in-out",
    ...css
  };
});

const Sidebar = props => {
  const { open, onHandleOpen } = props;

  const onClose = useCallback(() => onHandleOpen(false), [onHandleOpen]);

  return (
    <SidebarContainer>
      <SidebarMenu open={open}>
        <SidebarIconWrap>
          <Icon icon={faTimes} width={32} height={32} onClick={onClose} />
        </SidebarIconWrap>
        <SidebarListWrap>
          <SidebarItem>
            <Icon icon={faHome} width={28} height={28} />
            <span>Home</span>
          </SidebarItem>
          <SidebarItem>
            <Icon icon={faHistory} width={24} height={24} />
            <span style={{ marginLeft: 4 }}>시청 기록</span>
          </SidebarItem>
          <SidebarItem>
            <Icon icon={faClock} width={24} height={24} />
            <span style={{ marginLeft: 4 }}>보관함</span>
          </SidebarItem>
        </SidebarListWrap>
      </SidebarMenu>
      <SidebarDark open={open} onClick={onClose} />
    </SidebarContainer>
  );
};

export default Sidebar;
