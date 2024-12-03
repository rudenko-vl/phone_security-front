import { ColorRing } from "react-loader-spinner";
import { Wrapper } from "./Loader.styled";
import PropTypes from "prop-types";

export const Loader = ({ size = 50 }) => {
  return (
    <Wrapper>
      <ColorRing
        // colors={["#b8c480", "#B2A3B5", "#F4442E", "#51E5FF", "#429EA6"]}
        colors={["#c9052d", "#e0f000", "#eeefe7", "#00c431", "#e0ef0d"]}
        height={size}
        width={size}
      />
    </Wrapper>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
};
