import styled from "@emotion/styled";
import { faClock, faHistory, faHome } from "@fortawesome/free-solid-svg-icons";
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
    padding: "56px 0"
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
  const { open, onClose } = props;

  return (
    <SidebarContainer>
      <SidebarMenu open={open}>
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
