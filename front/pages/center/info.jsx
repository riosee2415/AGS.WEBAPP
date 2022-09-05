import React, { useEffect } from "react";
import ClientLayout from "../../components/ClientLayout";
import { useDispatch, useSelector } from "react-redux";

import wrapper from "../../store/configureStore";
import { END } from "redux-saga";
import useWidth from "../../hooks/useWidth";
import useInput from "../../hooks/useInput";
import Theme from "../../components/Theme";
import styled from "styled-components";
import axios from "axios";

import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import { SEO_LIST_REQUEST } from "../../reducers/seo";
import { AGENCY_LIST_REQUEST } from "../../reducers/agency";

import Head from "next/head";
import {
  Image,
  RsWrapper,
  SpanText,
  Text,
  Title,
  WholeWrapper,
  Wrapper,
} from "../../components/commonComponents";
import { Empty } from "antd";

const Info = () => {
  ////// GLOBAL STATE //////
  const width = useWidth();
  const { agencyList } = useSelector((state) => state.agency);

  ////// HOOKS //////
  ////// REDUX //////
  ////// USEEFFECT //////
  ////// TOGGLE //////
  ////// HANDLER //////
  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>AGS | 대리점 안내</title>
      </Head>

      <ClientLayout>
        <WholeWrapper>
          <RsWrapper padding={`80px 0 50px`}>
            <Title>
              대리점&nbsp;
              <SpanText color={Theme.basicTheme_C}>안내</SpanText>
            </Title>

            <Wrapper margin={`120px 0 0`} dr={`row`} ju={`space-between`}>
              {agencyList.length === 0 ? (
                <Wrapper height={`200px`}>
                  <Empty description="대리점이 준비중입니다." />
                </Wrapper>
              ) : (
                agencyList.map((data, idx) => {
                  console.log(data);
                  return (
                    <Wrapper
                      width={width < 1100 ? `100%` : `48%`}
                      dr={`row`}
                      margin={`0 0 50px`}
                    >
                      <Wrapper
                        width={width < 700 ? `100px` : `155px`}
                        height={width < 700 ? `100px` : `155px`}
                        margin={width < 700 ? `0 20px 0 0` : `0 50px 0 0`}
                      >
                        <Image
                          src={data.imagePath}
                          alt="logo"
                          height={`100%`}
                        />
                      </Wrapper>

                      <Wrapper
                        al={`flex-start`}
                        width={
                          width < 700
                            ? `calc(100% - 100px - 20px)`
                            : `calc(100% - 155px - 50px)`
                        }
                      >
                        <Text
                          fontSize={width < 700 ? `20px` : `32px`}
                          fontWeight={`800`}
                          color={Theme.basicTheme_C}
                        >
                          {data.companyName}
                        </Text>

                        <Text
                          margin={width < 700 ? `15px 0` : `30px 0 15px`}
                          fontSize={width < 700 ? `14px` : `18px`}
                        >
                          {data.address}
                        </Text>

                        <Text
                          fontSize={width < 700 ? `16px` : `20px`}
                          fontWeight={`600`}
                        >
                          {data.number}
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  );
                })
              )}
            </Wrapper>
          </RsWrapper>
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

    context.store.dispatch({
      type: AGENCY_LIST_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default Info;
