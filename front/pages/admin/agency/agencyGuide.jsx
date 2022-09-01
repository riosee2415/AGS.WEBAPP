import React from "react";
import AdminLayout from "../../../components/AdminLayout";
import PageHeader from "../../../components/admin/PageHeader";
import { AdminContent } from "../../../components/commonComponents";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import { useRouter } from "next/router";
import { LOAD_MY_INFO_REQUEST } from "../../../reducers/user";
import { Table } from "antd";

const AgencyGuide = () => {
  ////// GLOBAL STATE //////

  ////// HOOKS //////

  ////// USEEFFECT //////

  ////// HANDLER //////

  ////// DATAVIEW //////

  const columns = [
    {
      title: "번호",
      dataIndex: "id",
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        breadcrumbs={["대리점 관리", "대리점 안내 관리"]}
        title={`대리점 안내 관리`}
        subTitle={`홈페이지에 사용되는 대리점 안내을 관리할 수 있습니다..`}
      />

      <AdminContent>
        <Table size="small" columns={columns} />
      </AdminContent>
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

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default AgencyGuide;
