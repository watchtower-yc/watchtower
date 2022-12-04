import { useState } from "react";

import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CopyToClipboard from "react-copy-to-clipboard";
import { Fade } from "react-reveal";

const CopyText = ({ number }) => {
  const [copied, setCopied] = useState();

  const copyTextToClipboard = () => {
    console.log("copied");
  };

  const showCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div className="relative flex items-center justify-between py-1 rounded-md bg-gray-100 outline-0 mt-4 px-4 mr-4 w-4/5 mt-2">
      <p className="text-sm">Zenith Bank – 1015638967</p>
      <CopyToClipboard text={number} onCopy={copyTextToClipboard}>
        <span className="p-2 cursor-pointer" onClick={showCopied}>
          <ContentCopyRoundedIcon fontSize="small" />
        </span>
      </CopyToClipboard>
      {copied && (
        <Fade>
          <div className="absolute -top-5 bg-green-300 p-2 rounded-md shadow-md">
            Copied!
          </div>
        </Fade>
      )}
    </div>
  );
};

export default CopyText;
