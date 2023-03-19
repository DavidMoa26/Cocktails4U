import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  return (
    <ClipLoader
      color="black"
      loading={true}
      css={override}
      size={55}
      speedMultiplier={1}
    />
  );
};
export default Loader;
