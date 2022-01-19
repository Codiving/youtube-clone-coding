import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconSize = {
  width: 20,
  height: 20
};

const Icon = styled(FontAwesomeIcon)(props => {
  const { width = IconSize.width, height = IconSize.height } = props;
  return {
    width: `${width}px !important`,
    height,
    cursor: "pointer"
  };
});

export default Icon;
export { IconSize };
