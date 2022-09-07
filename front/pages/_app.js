import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import Theme from "../components/Theme";
import GlobalStyles from "../components/GlobalStyles";
import wrapper from "../store/configureStore";
import WidthProvider from "../components/WidthProvider";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { ACCEPT_LOG_CREATE_REQUEST } from "../reducers/accept";

const Fourleaf = ({ Component }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const getIpClient = useCallback(async () => {
    const isCheck = sessionStorage.getItem("QSIDSPDSDQDAQSTEFA");

    if (!isCheck && router.pathname.indexOf("admin") === -1) {
      try {
        const ipData = await fetch("https://geolocation-db.com/json/");
        const locationIp = await ipData.json();

        sessionStorage.setItem(
          "QSIDSPDSDQDAQSTEFA",
          "ISDGSAWDCASDHERGEKIJCSDMK"
        );

        dispatch({
          type: ACCEPT_LOG_CREATE_REQUEST,
          data: {
            ip: locationIp.IPv4,
          },
        });
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    getIpClient();
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Head>
        <title>AVA | administrator</title>

        <meta name="author" content="4LEAF SOFTWARE <4leaf.ysh@gmail.com>" />
        {/* <!-- OG tag  --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AVA" />
        <meta property="og:site_name" content="AVA" />
        <meta property="og:url" content="https://avakorea.kr/" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image" content="./og_img.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="canonical" href="https://avakorea.kr" />

        <meta
          name="keywords"
          content="고압세척기, 아바고압세척기, 아바, 고압분무기, 고압분사기, 세차기, 고압세차기, 고압살수기, 세차용품, 외벽청소, 세차, ava고압세척기,ava고압세차기, 아바 p80, 아바 p55"
        />
        <meta
          property="og:keywords"
          content="고압세척기, 아바고압세척기, 아바, 고압분무기, 고압분사기, 세차기, 고압세차기, 고압살수기, 세차용품, 외벽청소, 세차, ava고압세척기,ava고압세차기, 아바 p80, 아바 p55"
        />

        <meta
          name="description"
          content={"고객의 만족을 위한 최상의 퀄리티 AVA 고압세척기"}
        />
        <meta
          property="og:description"
          content={"고객의 만족을 위한 최상의 퀄리티 AVA 고압세척기"}
        />

        {/* 프리텐다드 폰트 */}
        <link
          href="https://webfontworld.github.io/pretendard/Pretendard.css"
          rel="stylesheet"
        />
        {/* 오픈산스 폰트 */}
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Open+Sans+Condensed"
        />

        {/* 이사만루 폰트  font-family: 'EsaManru'; */}
        <link
          href="https://webfontworld.github.io/gonggames/EsaManru.css"
          rel="stylesheet"
        />
      </Head>
      <Component />
    </ThemeProvider>
  );
};
Fourleaf.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(Fourleaf);
