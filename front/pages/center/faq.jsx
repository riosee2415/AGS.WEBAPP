import React from "react";
import Head from "next/head";
import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { END } from "redux-saga";
import axios from "axios";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

import ClientLayout from "../../components/ClientLayout";
import Theme from "../../components/Theme";
import wrapper from "../../store/configureStore";
import useWidth from "../../hooks/useWidth";

import {
  Image,
  RsWrapper,
  Text,
  Title,
  WholeWrapper,
  Wrapper,
} from "../../components/commonComponents";

import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import { FAQ_LIST_REQUEST } from "../../reducers/faq";
import { Empty } from "antd";

const Faq = () => {
  ////// GLOBAL STATE //////
  const { faqs } = useSelector((state) => state.faq);
  const [tab, setTab] = useState("");

  ////// HOOKS //////
  const width = useWidth();
  const dispatch = useDispatch();
  const router = useRouter();

  ////// USEEFFECT //////
  useEffect(() => {
    dispatch({
      type: FAQ_LIST_REQUEST,
    });
  }, []);

  ////// TOGGLE //////
  const tabHandler = useCallback(
    (data) => {
      setTab(data);
    },
    [tab]
  );
  ////// HANDLER ///////
  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>AGS | FAQ</title>
      </Head>

      <ClientLayout>
        <WholeWrapper>
          <RsWrapper>
            <Wrapper margin={`80px 0 50px`}>
              <Title>FAQ</Title>
            </Wrapper>

            <Wrapper margin={`0 0 100px`}>
              {faqs && faqs.length === 0 ? (
                <Wrapper height={`200px`}>
                  <Empty description="FAQ가 준비중입니다." />
                </Wrapper>
              ) : (
                <>
                  {faqs &&
                    faqs.map((data, idx) => {
                      return (
                        <Wrapper
                          bgColor={Theme.black3_C}
                          radius={`10px`}
                          margin={`0 0 25px`}
                          padding={`20px`}
                          cursor={`pointer`}
                          isActive={data.id === tab ? true : false}
                          onClick={() => tabHandler(data.id)}
                          key={idx}
                        >
                          <Wrapper dr={`row`}>
                            <Image
                              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/customer-support/icon_faq-question.png`}
                              width={`24px`}
                              height={`24px`}
                            />
                            <Wrapper
                              dr={`row`}
                              ju={`flex-start`}
                              width={`calc(100% - 55px)`}
                            >
                              <Text
                                fontSize={width < 900 ? `16px` : `20px`}
                                fontWeight={`700`}
                                color={
                                  data.id === tab
                                    ? Theme.basicTheme_C
                                    : Theme.white_C
                                }
                                margin={`0 0 0 20px`}
                              >
                                {data.question}
                              </Text>
                            </Wrapper>
                            {data.id === tab ? (
                              <Wrapper
                                width={`20px`}
                                fontSize={`18px`}
                                al={`flex-end`}
                                ju={`flex-start`}
                                color={Theme.white_C}
                              >
                                <UpOutlined />
                              </Wrapper>
                            ) : null}

                            {data.id === tab ? (
                              <Wrapper
                                al={`flex-start`}
                                padding={`20px 50px 0`}
                                fontSize={`16px`}
                                color={Theme.lightGrey2_C}
                              >
                                <Text>{data.answer}</Text>
                              </Wrapper>
                            ) : null}

                            {data.id === tab ? null : (
                              <Wrapper
                                al={`flex-end`}
                                width={`20px`}
                                fontSize={`18px`}
                                color={Theme.white_C}
                              >
                                <DownOutlined />
                              </Wrapper>
                            )}
                          </Wrapper>
                        </Wrapper>
                      );
                    })}
                </>
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

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default Faq;
