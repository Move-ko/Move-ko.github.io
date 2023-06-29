import { CopyToClipboard } from "react-copy-to-clipboard";
import DoneIcon from "@mui/icons-material/Done";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
export default function copy(props) {
  const { code } = props;
  const [isCopied, setIsCopied] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleCopy = () => {
    // 복사 버튼 클릭 시 실행할 로직을 여기에 작성합니다.
    console.log("코드가 복사되었습니다.");
    setIsCopied(true);
    setIsButtonClicked(true);

    // 일정 시간 후에 복사 상태 초기화
    setTimeout(() => {
      setIsCopied(false);
      setIsButtonClicked(false);
    }, 1000);
  };

  const handleMouseEnter = () => {
    setIsButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  };

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SyntaxHighlighter language="javascript" style={dracula}>
        {code}
      </SyntaxHighlighter>
      <CopyToClipboard text={code}>
        <button
          onClick={handleCopy}
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            margin: "8px",
            padding: "8px",
            background: "none",
            border: "none",
            cursor: "pointer",
            opacity: isButtonVisible ? 1 : 0,
            transition: "opacity 0.3s",
            display: "flex",
            alignItems: "center",
          }}
        >
          {!isButtonClicked ? (
            <FileCopyOutlinedIcon
              style={{
                color: isCopied ? "#fff" : "#000",
                transition: "color 0.3s",
              }}
            />
          ) : (
            <FileCopyOutlinedIcon
              style={{
                color: "#fff",
                transition: "color 0.3s",
              }}
            />
          )}
        </button>
      </CopyToClipboard>
    </div>
  );
}
