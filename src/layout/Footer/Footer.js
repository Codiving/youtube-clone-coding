import styled from "@emotion/styled";

const FooterHeight = 30;

const FooterContainer = styled("div")(() => {
  return {
    position: "fixed",
    width: "100%",
    bottom: 0,
    textAlign: "center",
    padding: 5,
    backgroundColor: "gray",
    height: FooterHeight,
    lineHeight: `${FooterHeight - 5}px`
  };
});

const FooterLink = styled("a")(() => {
  return {
    textDecoration: "none"
  };
});

const FooterText = styled("span")(() => {
  return {
    cursor: "pointer",
    color: "white"
  };
});

const Footer = props => {
  const { children } = props;
  return (
    <FooterContainer>
      <FooterLink
        href="https://www.github.com/Codiving"
        target="_blank"
        rel="noreferrer"
      >
        <FooterText>{children}</FooterText>
      </FooterLink>
    </FooterContainer>
  );
};

export { FooterHeight };
export default Footer;
