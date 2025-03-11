import React from "react";

interface IProps {
  setDownload: (value: boolean) => void;
  setErrorType: (type: string) => void;
}

const Network: React.FC<IProps> = ({ setDownload, setErrorType }) => {
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
