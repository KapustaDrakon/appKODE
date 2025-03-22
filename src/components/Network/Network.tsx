import { useData } from "../../providers/DataProviders";

const Network = () => {
  const { setDownload, setErrorType } = useData();

  window.onoffline = () => {
    setErrorType("network");
  };
  window.ononline = () => {
    setErrorType("null");
    setDownload(true);
    setTimeout(() => setDownload(false), 2000);
  };
  return <></>;
};

export default Network;
