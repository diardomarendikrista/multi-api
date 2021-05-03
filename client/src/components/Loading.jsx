import Loader from "react-loader-spinner";

export default function Loading () {
  return (
    <Loader
      className="loading"
      type="Circles"
      color="#F1584F"
      height={100}
      width={100}
      timeout={15000} //15 secs
    />
  );
}