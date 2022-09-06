import { createGlobalStyle, css } from "styled-components";

const fontStyle = css`
  @font-face {
    font-family: "GongGothicMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${fontStyle}

  body {
    font-family: "Pretendard", sans-serif;
    color: ${(props) => props.theme.black2_C};
  }

  a {
    color : inherit;
    text-decoration : none;
  }

  textarea {
    resize: none;
    outline: none;
  }

  input {
    outline: none;
  }
  
  a:hover {
    color : inherit;
  }


  
  @media (max-width : 576px) {
    html { 
      font-size : 14px;
    }
  }
`;

export default GlobalStyles;
