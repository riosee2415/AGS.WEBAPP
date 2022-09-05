import React from "react";
import Head from "next/head";
import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { END } from "redux-saga";
import axios from "axios";
import { Checkbox, DatePicker, message, Modal, Radio } from "antd";

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

const Index = () => {
  ////// GLOBAL STATE //////

  ////// HOOKS //////
  const width = useWidth();

  const dispatch = useDispatch();
  const router = useRouter();

  ////// USEEFFECT //////

  ////// TOGGLE //////

  ////// HANDLER //////'

  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>AGS | FAQ</title>
      </Head>

      <ClientLayout>
        <WholeWrapper>
          <RsWrapper>
            <Wrapper dr={`row`}>
              <Wrapper>11</Wrapper>
              <Wrapper>11</Wrapper>
            </Wrapper>

            <Wrapper dr={`row`}>
              <Wrapper>11</Wrapper>
              <Wrapper>11</Wrapper>
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

export default Index;
