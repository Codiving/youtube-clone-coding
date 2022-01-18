import styled from "@emotion/styled";

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
    background: "#fcc",
    zIndex: 3,
    transitionProperty: "left",
    transitionDuration: "0.2s"
  };
});

const SidebarDark = styled("div")(props => {
  const { open } = props;
  if (!open) {
    return {
      display: "none"
    };
  }

  return {
    backgroundColor: "black",
    opacity: 0.3,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2
  };
});

const Sidebar = props => {
  const { children, open, onHandleOpen } = props;

  return (
    <SidebarContainer>
      <SidebarMenu open={open}>{children}</SidebarMenu>
      <SidebarDark open={open} onClick={() => onHandleOpen(false)} />
    </SidebarContainer>
  );
};

export default Sidebar;
