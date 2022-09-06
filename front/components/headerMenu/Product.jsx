import React from "react";
import Head from "next/head";
import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { END } from "redux-saga";
import axios from "axios";

import styled from "styled-components";

import Theme from "../Theme";
import wrapper from "../../store/configureStore";
import useWidth from "../../hooks/useWidth";
import useInput from "../../hooks/useInput";

import {
  CommonButton,
  Image,
  RsWrapper,
  Text,
  TextInput,
  WholeWrapper,
  Wrapper,
} from "../commonComponents";

const HoverText = styled(Text)`
  transition: 0.5s;

  &:hover {
    color: ${Theme.basicTheme_C};
    cursor: pointer;
  }
`;

const Product = () => {
  ////// GLOBAL STATE //////
  const [tab, setTab] = useState(0);
  ////// HOOKS //////
  const width = useWidth();

  const dispatch = useDispatch();
  const router = useRouter();

  ////// USEEFFECT //////

  ////// TOGGLE //////

  ////// HANDLER //////'
  const moveLinkHandler = useCallback((link) => {
    router.push(link);
  }, []);

  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>AGS | 제품소개</title>
      </Head>

      <WholeWrapper bgColor={Theme.black2_C} padding={`0 150px`}>
        <Wrapper dr={`row`} margin={`80px 0 0`}>
          <Wrapper al={`flex-start`} width={`50%`}>
            <Text fontSize={`50px`} fontWeight={`500`} color={Theme.white_C}>
              제품소개
            </Text>
          </Wrapper>
          <Wrapper al={`flex-end`} width={`50%`}>
            <Wrapper
              width={`65px`}
              height={`65px`}
              bgColor={Theme.basicTheme_C}
              radius={`50%`}
            >
              <Text>X</Text>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Wrapper al={`flex-start`} margin={`0 0 110px`}>
          <Wrapper
            width={`184px`}
            borderBottom={`4px solid ${Theme.basicTheme_C}`}
          />
        </Wrapper>
        <Wrapper dr={`row`} height={`934px`} al={`flex-start`}>
          <Wrapper width={`calc(100% / 5)`}>
            <Wrapper
              bgColor={Theme.basicTheme_C}
              radius={`10px`}
              width={`115px`}
              height={`115px`}
              margin={`0 0 30px`}
            >
              <Image
                width={`78px`}
                height={`78px`}
                src={
                  "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_evolution.png"
                }
              />
            </Wrapper>
            <Wrapper color={Theme.white_C}>
              <HoverText fontSize={`28px`} fontWeight={`700`}>
                EVOLUTION SERIES
              </HoverText>
              {tab ? (
                <Wrapper
                  width={`198px`}
                  borderBottom={`2px solid ${Theme.basicTheme_C}`}
                  margin={`0 0 15px`}
                />
              ) : null}
              <Wrapper fontSize={`18px`}>
                <HoverText>AVA EVOLUTION P60</HoverText>
                <HoverText margin={`10px 0`}>AVA EVOLUTION P70</HoverText>
                <HoverText>AVA EVOLUTION P80</HoverText>
                <HoverText margin={`10px 0 0`}>AVA EVOLUTION P90</HoverText>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper width={`calc(100% / 5)`}>
            <Wrapper
              bgColor={Theme.basicTheme_C}
              radius={`10px`}
              width={`115px`}
              height={`115px`}
              margin={`0 0 30px`}
            >
              <Image
                width={`78px`}
                height={`78px`}
                src={
                  "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_master.png"
                }
              />
            </Wrapper>
            <Wrapper color={Theme.white_C}>
              <Text fontSize={`28px`} fontWeight={`700`}>
                MASTER SERIES
              </Text>
              <Wrapper
                width={`198px`}
                borderBottom={`2px solid ${Theme.basicTheme_C}`}
                margin={`0 0 15px`}
              />
              <Wrapper fontSize={`18px`}>
                <HoverText>AVA Master P60</HoverText>
                <HoverText margin={`10px 0`}>AVA Master P70</HoverText>
                <HoverText>AVA Master P80</HoverText>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper width={`calc(100% / 5)`}>
            <Wrapper
              bgColor={Theme.basicTheme_C}
              radius={`10px`}
              width={`115px`}
              height={`115px`}
              margin={`0 0 30px`}
            >
              <Image
                width={`78px`}
                height={`78px`}
                src={
                  "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_go.png"
                }
              />
            </Wrapper>
            <Wrapper color={Theme.white_C}>
              <Text fontSize={`28px`} fontWeight={`700`}>
                GO SERIES
              </Text>
              <Wrapper
                width={`198px`}
                borderBottom={`2px solid ${Theme.basicTheme_C}`}
                margin={`0 0 15px`}
              />
              <Wrapper fontSize={`18px`}>
                <HoverText>AVA GO P40</HoverText>
                <HoverText margin={`10px 0`}>AVA GO P50</HoverText>
                <HoverText>AVA GO P55</HoverText>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper width={`calc(100% / 5)`}>
            <Wrapper
              bgColor={Theme.basicTheme_C}
              radius={`10px`}
              width={`115px`}
              height={`115px`}
              margin={`0 0 30px`}
            >
              <Image
                width={`78px`}
                height={`78px`}
                src={
                  "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_smart.png"
                }
              />
            </Wrapper>
            <Wrapper color={Theme.white_C}>
              <Text fontSize={`28px`} fontWeight={`700`}>
                SMART SERIES
              </Text>
              <Wrapper
                width={`198px`}
                borderBottom={`2px solid ${Theme.basicTheme_C}`}
                margin={`0 0 15px`}
              />
              <Wrapper fontSize={`18px`}>
                <HoverText>AVA SMART P50</HoverText>
                <HoverText margin={`10px 0`}>AVA SMART P55</HoverText>
                <HoverText>AVA SMART P60</HoverText>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper width={`calc(100% / 5)`}>
            <Wrapper
              bgColor={Theme.basicTheme_C}
              radius={`10px`}
              width={`115px`}
              height={`115px`}
              margin={`0 0 30px`}
            >
              <Image
                width={`78px`}
                height={`78px`}
                src={
                  "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_v6.png"
                }
              />
            </Wrapper>
            <Wrapper color={Theme.white_C}>
              <Text fontSize={`28px`} fontWeight={`700`}>
                V6 SERIES
              </Text>
              <Wrapper
                width={`198px`}
                borderBottom={`2px solid ${Theme.basicTheme_C}`}
                margin={`0 0 15px`}
              />
              <Wrapper fontSize={`18px`}>
                <HoverText>AVA V6 P70</HoverText>
                <HoverText margin={`10px 0 0`}>AVA V6 P90</HoverText>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </WholeWrapper>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // SSR Cookie Settings For Data Load/////////////////////////////////////
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    ////////////////////////////////////////////////////////////////////////
    // 구현부

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default Product;
