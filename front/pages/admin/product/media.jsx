import React, { useCallback, useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import PageHeader from "../../../components/admin/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Modal, message, Popconfirm, Form, Input } from "antd";

import { useRouter, withRouter } from "next/router";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import {
  Wrapper,
  AdminContent,
  GuideDiv,
  Text,
} from "../../../components/commonComponents";
import { LOAD_MY_INFO_REQUEST } from "../../../reducers/user";
import Theme from "../../../components/Theme";
import { useForm } from "antd/lib/form/Form";
import {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_LIST_REQUEST,
  PRODUCT_UPDATE_REQUEST,
} from "../../../reducers/product";
import useInput from "../../../hooks/useInput";

const NoticeArea = ({}) => {
  const { st_loadMyInfoDone, me } = useSelector((state) => state.user);

  const {
    products,
    lastPage,
    st_productCreateDone,
    st_productCreateError,
    st_productUpdateDone,
    st_productUpdateError,
    st_productDeleteDone,
    st_productDeleteError,
  } = useSelector((state) => state.product);

  const router = useRouter();

  const moveLinkHandler = useCallback((link) => {
    router.push(link);
  }, []);

  useEffect(() => {
    if (st_loadMyInfoDone) {
      if (!me || parseInt(me.level) < 3) {
        moveLinkHandler(`/admin`);
      }
    }
  }, [st_loadMyInfoDone]);
  /////////////////////////////////////////////////////////////////////////

  ////// HOOKS //////
  const dispatch = useDispatch();

  const [updateModal, setUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [detailData, setDetailData] = useState(null);
  const [createModal, setCreateModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [updateForm] = useForm();
  const [createForm] = useForm();

  const searchValue = useInput("");

  ////// USEEFFECT //////

  useEffect(() => {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
  }, [st_productCreateDone, st_productUpdateDone, st_productDeleteDone]);

  // 생성 후처리
  useEffect(() => {
    if (st_productCreateDone) {
      message.success(`생성되었습니다.`);
    }
  }, [st_productCreateDone]);

  useEffect(() => {
    if (st_productCreateError) {
      message.error(st_productCreateError);
    }
  }, [st_productCreateError]);

  // 수정 후처리
  useEffect(() => {
    if (st_productUpdateDone) {
      message.success(`생성되었습니다.`);
    }
  }, [st_productUpdateDone]);

  useEffect(() => {
    if (st_productUpdateError) {
      message.error(st_productUpdateError);
    }
  }, [st_productUpdateError]);

  // 삭제 후처리
  useEffect(() => {
    if (st_productDeleteDone) {
      message.success(`삭제되었습니다.`);
    }
  }, [st_productDeleteDone]);

  useEffect(() => {
    if (st_productDeleteError) {
      message.error(st_productDeleteError);
    }
  }, [st_productDeleteError]);

  ////// HANDLER //////

  const deleteHandler = useCallback((id) => {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
      data: id,
    });
  }, []);

  const updateHandler = useCallback(
    (data = null) => {
      if (data) {
        setUpdateData(data);
        updateForm.setFieldsValue({
          title: data.title,
          subTitle: data.subTitle,
          link: data.youtubeLink,
        });
      }

      setUpdateModal((prev) => !prev);
    },
    [updateModal, updateData]
  );

  const detailHandler = useCallback(
    (data = null) => {
      if (data) {
        setDetailData(data);
        dispatch({
          type: NOTICE_AREA_DETAIL_LIST_REQUEST,
          data: {
            noticeAreaId: data.id,
          },
        });
      }

      setDetailModal((prev) => !prev);
    },
    [detailModal, detailData]
  );

  const updateSubmitHandler = useCallback(
    ({ title, subTitle, link }) => {
      dispatch({
        type: PRODUCT_UPDATE_REQUEST,
        data: {
          id: updateData.id,
          title,
          subTitle,
          youtubeLink: link,
        },
      });
    },
    [updateData, updateData]
  );

  const createSubmitHandler = useCallback(({ title, subTitle, link }) => {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
      data: {
        title,
        subTitle,
        youtubeLink: link,
      },
    });
  }, []);

  const stringHandler = useCallback((text) => {
    let substrText = text.substr(0, 10);
    let splitText = substrText.split("-");
    let resultText = `${splitText[0]}년 ${splitText[1]}월 ${splitText[2]}일`;
    return resultText;
  }, []);

  const otherPageCall = useCallback(
    (changePage) => {
      setCurrentPage(changePage);
    },
    [currentPage]
  );

  ////// DATAVIEW //////

  ////// DATA COLUMNS //////

  const columns = [
    {
      title: "번호",
      dataIndex: "id",
      align: "center",
    },
    {
      title: "유투브 링크",
      dataIndex: "youtubeLink",
    },
    {
      title: "제목",
      dataIndex: "title",
    },
    {
      title: "소제목",
      dataIndex: "subTitle",
    },
    {
      title: "생성일",
      render: (data) => <Text>{stringHandler(data.createdAt)}</Text>,
    },
    {
      title: "최근 수정일",
      render: (data) => <Text>{stringHandler(data.updatedAt)}</Text>,
    },
    {
      title: "데이터 수정",
      render: (data) => (
        <Button type="primary" size="small" onClick={() => updateHandler(data)}>
          데이터 수정
        </Button>
      ),
      align: "center",
    },
    {
      title: "데이터 삭제",
      render: (data) => (
        <Popconfirm
          okText="삭제"
          title="정말 삭제하시겠습니까?"
          cancelText="취소"
          onConfirm={() => deleteHandler(data.id)}
        >
          <Button type="danger" size="small">
            데이터 삭제
          </Button>
        </Popconfirm>
      ),
      align: "center",
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        breadcrumbs={["제품 관리", "제품 관련 영상 관리"]}
        title={`제품 관련 영상`}
        subTitle={`제품 관련 영상을 확인하고 관리할 수 있습니다.`}
      />

      <AdminContent>
        <Wrapper
          dr="row"
          ju="flex-end"
          margin="0px 0px 10px 0px"
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          padding="5px 0px"
        >
          <Button
            size="small"
            type="primary"
            onClick={() => setCreateModal(true)}
          >
            + 생성하기
          </Button>
        </Wrapper>

        {/* ADMIN GUIDE AREA */}
        <Wrapper
          margin={`0px 0px 10px 0px`}
          radius="5px"
          bgColor={Theme.adminLightGrey_C}
          padding="5px"
          fontSize="13px"
          al="flex-start"
        >
          <GuideDiv isImpo={true}>
            제품 관련 영상을 생성, 수정, 삭제할 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>삭제된 데이터는 복구할 수 없습니다.</GuideDiv>
        </Wrapper>

        <Table
          rowKey="id"
          columns={columns}
          dataSource={products ? products : []}
          size="small"
          pagination={{
            defaultCurrent: 1,
            current: parseInt(currentPage),

            total: lastPage * 10,
            onChange: (page) => otherPageCall(page),
          }}
        />
      </AdminContent>

      {/* UPDATE MODAL */}
      <Modal
        width="500px"
        title={`제품 관련 영상 수정하기`}
        footer={null}
        visible={updateModal}
        onCancel={updateHandler}
      >
        <Wrapper>
          <Wrapper
            margin={`0px 0px 10px 0px`}
            radius="5px"
            bgColor={Theme.adminLightGrey_C}
            padding="5px"
            fontSize="13px"
            al="flex-start"
          >
            <GuideDiv isImpo={true}>
              유투브 링크, 제목, 소제목은 필수 입력 값입니다.
            </GuideDiv>
            <GuideDiv
              isImpo={true}
            >{`유투브 링크는 공유 - 퍼가기 - "embed" 가 붙은 src 링크로 첨부해주세요.`}</GuideDiv>
            <GuideDiv isImpo={true}>
              수정하기 버튼 클릭 시, 수정됩니다.
            </GuideDiv>
          </Wrapper>

          <Form
            style={{ width: "100%" }}
            form={updateForm}
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            onFinish={updateSubmitHandler}
          >
            <Form.Item
              label="유투브 링크"
              name="link"
              rules={[
                {
                  required: true,
                  message: "유투브 링크는 필수 입력사항입니다.",
                },
              ]}
            >
              <Input
                placeholder="유투브 링크를 입력해주세요."
                size="small"
                allowClear
              />
            </Form.Item>
            <Form.Item
              label="제목"
              name="title"
              rules={[
                { required: true, message: "제목은 필수 입력사항입니다." },
              ]}
            >
              <Input
                placeholder="제목을 입력해주세요."
                size="small"
                allowClear
              />
            </Form.Item>
            <Form.Item
              label="소제목"
              name="subTitle"
              rules={[
                { required: true, message: "소제목은 필수 입력사항입니다." },
              ]}
            >
              <Input
                placeholder="소제목을 입력해주세요."
                size="small"
                allowClear
              />
            </Form.Item>
            <Wrapper al={`flex-end`}>
              <Button size="small" type="primary" htmlType="submit">
                수정하기
              </Button>
            </Wrapper>
          </Form>
        </Wrapper>
      </Modal>

      {/* CREATE MODAL */}
      <Modal
        width="500px"
        title={`제품 관련 영상 생성하기`}
        footer={null}
        visible={createModal}
        onCancel={() => setCreateModal(false)}
      >
        <Wrapper>
          <Wrapper
            margin={`0px 0px 10px 0px`}
            radius="5px"
            bgColor={Theme.adminLightGrey_C}
            padding="5px"
            fontSize="13px"
            al="flex-start"
          >
            <GuideDiv isImpo={true}>
              유투브 링크, 제목, 소제목은 필수 입력 값입니다.
            </GuideDiv>
            <GuideDiv
              isImpo={true}
            >{`유투브 링크는 공유 - 퍼가기 - "embed" 가 붙은 src 링크로 첨부해주세요.`}</GuideDiv>
            <GuideDiv isImpo={true}>
              생성하기 버튼 클릭 시, 생성됩니다.
            </GuideDiv>
          </Wrapper>

          <Form
            style={{ width: "100%" }}
            form={createForm}
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            onFinish={createSubmitHandler}
          >
            <Form.Item
              label="유투브 링크"
              name="link"
              rules={[
                {
                  required: true,
                  message: "유투브 링크는 필수 입력사항입니다.",
                },
              ]}
            >
              <Input
                placeholder="유투브 링크를 입력해주세요."
                size="small"
                allowClear
              />
            </Form.Item>
            <Form.Item
              label="제목"
              name="title"
              rules={[
                { required: true, message: "제목은 필수 입력사항입니다." },
              ]}
            >
              <Input
                placeholder="제목을 입력해주세요."
                size="small"
                allowClear
              />
            </Form.Item>
            <Form.Item
              label="소제목"
              name="subTitle"
              rules={[
                { required: true, message: "소제목은 필수 입력사항입니다." },
              ]}
            >
              <Input
                placeholder="소제목을 입력해주세요."
                size="small"
                allowClear
              />
            </Form.Item>
            <Wrapper al={`flex-end`}>
              <Button size="small" type="primary" htmlType="submit">
                생성하기
              </Button>
            </Wrapper>
          </Form>
        </Wrapper>
      </Modal>
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
      type: PRODUCT_LIST_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default withRouter(NoticeArea);
