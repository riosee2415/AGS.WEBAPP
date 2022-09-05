import React from "react";
import Head from "next/head";
import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { END } from "redux-saga";
import axios from "axios";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

import styled from "styled-components";
import ClientLayout from "../../components/ClientLayout";
import Theme from "../../components/Theme";
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
} from "../../components/commonComponents";

import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import { FAQ_TYPE_LIST_REQUEST, FAQ_LIST_REQUEST } from "../../reducers/faq";

const Faq = () => {
  ////// GLOBAL STATE //////
  const { faqTypes, faqs } = useSelector((state) => state.faq);
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

  console.log(faqs);
  ////// TOGGLE //////
  const tabHandler = useCallback(
    (data) => {
      console.log(tab);
      setTab(data);
    },
    [tab]
  );
  ////// HANDLER //////'
  const moveLinkHandler = useCallback((link) => {
    router.push(link);
  }, []);

  ////// DATAVIEW //////

  const DummiyData = [
    {
      id: 1,
      title: "자주묻는질문1",
      content:
        "고객님들이 고압세척기를 사용하면서 느낀 불편함은 고압건 레버를 잡을 때 많은 힘이 들어간다는 것이었습니다. 이러한 고객님들의 피드백을 바탕으로 Zero-Force 방아쇠를 개발하여 레버를 최대 90%의 적은 힘으로 손가락 하나로 작동이 가능하며 손이 피로해지는 것을 방지했습니다.",
    },
    {
      id: 2,
      title: "자주묻는질문2",
      content: "내용2",
    },
    {
      id: 3,
      title: "자주묻는질문3",
      content: "내용3",
    },
    {
      id: 4,
      title: "자주묻는질문4",
      content: "내용4",
    },
    {
      id: 5,
      title: "자주묻는질문5",
      content: "내용5",
    },
    {
      id: 6,
      title: "자주묻는질문6",
      content: "내용6",
    },
  ];

  return (
    <>
      <Head>
        <title>AGS | FAQ</title>
      </Head>

      <ClientLayout>
        <WholeWrapper>
          <RsWrapper>
            <Wrapper>
              <Wrapper>
                <Text
                  fontSize={`50px`}
                  fontWeight={`500`}
                  color={Theme.black2_C}
                >
                  FAQ
                </Text>
              </Wrapper>
              <Wrapper
                width={`106px`}
                borderBottom={`4px solid ${Theme.basicTheme_C}`}
                margin={`0 0 50px`}
              />
            </Wrapper>

            <Wrapper>
              <>
                {faqs &&
                  faqs.map((data, idx) => {
                    return (
                      <Wrapper
                        height={data.id === tab ? `140px` : `70px`}
                        bgColor={`#1A1A1A`}
                        radius={`10px`}
                        margin={`0 0 25px`}
                        padding={`20px`}
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
                              fontSize={`20px`}
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
                              color={`#CAD2CB`}
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
