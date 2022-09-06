import React from "react";
import ClientLayout from "../../components/ClientLayout";
import Head from "next/head";
import wrapper from "../../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import axios from "axios";
import { END } from "redux-saga";
import useWidth from "../../hooks/useWidth";
import {
  RsWrapper,
  Text,
  WholeWrapper,
  Wrapper,
} from "../../components/commonComponents";
import Theme from "../../components/Theme";

const Evolution = () => {
  ////// GLOBAL STATE //////
  ////// HOOKS //////
  const width = useWidth();
  ////// REDUX //////
  ////// USEEFFECT //////
  ////// TOGGLE //////
  ////// HANDLER //////
  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>AVA | EVOLUTION SERIES</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <Wrapper position={`relative`}>
            <Wrapper
              height={`600px`}
              bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/banner/img_bg-black.png")`}
            ></Wrapper>
            <Wrapper
              height={`230px`}
              bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/banner/img_bg-green.png")`}
            ></Wrapper>
            <Wrapper position={`absolute`} top={`0`} left={`0`} zIndex={`2`}>
              <RsWrapper dr={`row`} ju={`space-between`}>
                <Wrapper width={`auto`} al={`flex-start`}>
                  <Text
                    fontSize={`48px`}
                    fontWeight={`bold`}
                    color={Theme.basicTheme_C}
                  >
                    AVA EVOLUTION SERIES
                  </Text>
                </Wrapper>
              </RsWrapper>
            </Wrapper>
          </Wrapper>
        </WholeWrapper>
      </ClientLayout>
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

    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default Evolution;
