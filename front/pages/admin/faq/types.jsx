import React, { useCallback, useEffect, useRef, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import PageHeader from "../../../components/admin/PageHeader";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Button,
  Modal,
  Select,
  notification,
  message,
  Popconfirm,
  Form,
  Input,
} from "antd";
import { useRouter, withRouter } from "next/router";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import {
  Wrapper,
  AdminContent,
  ModalBtn,
  GuideDiv,
  Text,
} from "../../../components/commonComponents";
import { LOAD_MY_INFO_REQUEST } from "../../../reducers/user";
import {
  FAQ_TYPE_CREATE_REQUEST,
  FAQ_TYPE_DELETE_REQUEST,
  FAQ_TYPE_LIST_REQUEST,
  FAQ_TYPE_UPDATE_REQUEST,
  FAQ_TYPE_GETDATA_REQUEST,
} from "../../../reducers/faq";
import Theme from "../../../components/Theme";
import { InfoCircleOutlined } from "@ant-design/icons";

const ViewBox = styled.div`
  width: 100%;
  padding: 5px;
  border: 1px solid ${(props) => props.theme.lightGrey4_C};
  border-radius: 5px;
  margin-bottom: 5px;
  word-break: break-all;
  transition: 0.4s;

  &:hover {
    border: 1px solid ${(props) => props.theme.subTheme_C};
  }
`;

const Types = ({}) => {
  const { st_loadMyInfoDone, me } = useSelector((state) => state.user);
  const {
    faqTypes,
    st_faqTypeListError,
    st_faqTypeCreateDone,
    st_faqTypeCreateError,
    st_faqTypeUpdateDone,
    st_faqTypeUpdateError,
    st_faqTypeDeleteDone,
    st_faqTypeDeleteError,
    currentFaqList,
  } = useSelector((state) => state.faq);

  /////////////////////////////////////////////////////////////////////////

  ////// HOOKS //////

  ////// USEEFFECT //////

  ////// HANDLER //////

  ////// DATAVIEW //////

  ////// DATA COLUMNS //////

  return (
    <AdminLayout>
      <PageHeader
        breadcrumbs={["자주묻는 질문 관리", "자주묻는 질문 유형 관리"]}
        title={`자주묻는 질문 유형`}
        subTitle={`자주묻는 질문 유형을 확인하고 관리할 수 있습니다.`}
      />

      <AdminContent></AdminContent>
    </AdminLayout>
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
      type: FAQ_TYPE_LIST_REQUEST,
      data: {
        searchTab: 1,
      },
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default withRouter(Types);
