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
  Form,
  Input,
  Popconfirm,
} from "antd";
import { useRouter, withRouter } from "next/router";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import {
  Wrapper,
  AdminContent,
  SearchForm,
  SearchFormItem,
  ModalBtn,
  GuideDiv,
  Text,
} from "../../../components/commonComponents";
import { LOAD_MY_INFO_REQUEST } from "../../../reducers/user";
import {
  FAQ_ADMIN_LIST_REQUEST,
  FAQ_TYPE_LIST_REQUEST,
  FAQ_UPDATE_REQUEST,
  FAQ_CREATE_REQUEST,
  FAQ_DELETE_REQUEST,
  FAQ_GRAPH_REQUEST,
} from "../../../reducers/faq";
import Theme from "../../../components/Theme";
import { MenuUnfoldOutlined } from "@ant-design/icons";

const Faq = ({}) => {
  const { st_loadMyInfoDone, me } = useSelector((state) => state.user);
  const {
    graph,
    faqTypes,
    adminFaqs,
    st_faqUpdateDone,
    st_faqUpdateError,
    st_faqCreateDone,
    st_faqCreateError,
    st_faqDeleteDone,
    st_faqDeleteError,
  } = useSelector((state) => state.faq);

  const [gData, setGData] = useState(null);
  const [aModal, setAModal] = useState(false);
  const [cModal, setCModal] = useState(false);
  const [searchTab, setSearchTab] = useState(0);
  const [currentData, setCurrentData] = useState(null);

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
  const router = useRouter();

  const [answerForm] = Form.useForm();
  const [createForm] = Form.useForm();

  ////// USEEFFECT //////

  ////////////////// 정보 수정 후처리 /////////////////////
  useEffect(() => {
    if (st_faqUpdateDone) {
      aModalToggleHandler(null);

      message.success(
        `${
          currentData && currentData.id
        }번 데이터의 정보가 정상적으로 변경되었습니다.`
      );
      dispatch({
        type: FAQ_ADMIN_LIST_REQUEST,
        data: {
          typeId: searchTab,
        },
      });

      dispatch({
        type: FAQ_GRAPH_REQUEST,
      });
    }
  }, [st_faqUpdateDone]);

  useEffect(() => {
    if (st_faqUpdateError) {
      return message.error(st_faqUpdateError);
    }
  }, [st_faqUpdateError]);

  ////////////////// 정보 생성 후처리 /////////////////////
  useEffect(() => {
    if (st_faqCreateDone) {
      cModalToggleHandler(null);
      createForm.resetFields();

      message.success(`새로운 데이터가 생성되었습니다.`);
      dispatch({
        type: FAQ_ADMIN_LIST_REQUEST,
        data: {
          typeId: searchTab,
        },
      });
      dispatch({
        type: FAQ_GRAPH_REQUEST,
      });
    }
  }, [st_faqCreateDone]);

  useEffect(() => {
    if (st_faqCreateError) {
      return message.error(st_faqCreateError);
    }
  }, [st_faqCreateError]);

  ////////////////// 정보 삭제 후처리 /////////////////////
  useEffect(() => {
    if (st_faqDeleteDone) {
      message.success(`자주묻는 질문 정보가 삭제되었습니다.`);
      dispatch({
        type: FAQ_ADMIN_LIST_REQUEST,
        data: {
          typeId: searchTab,
        },
      });
      dispatch({
        type: FAQ_GRAPH_REQUEST,
      });
    }
  }, [st_faqDeleteDone]);

  useEffect(() => {
    if (st_faqDeleteError) {
      return message.error(st_faqDeleteError);
    }
  }, [st_faqDeleteError]);

  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    dispatch({
      type: FAQ_ADMIN_LIST_REQUEST,
      data: {
        typeId: searchTab,
      },
    });
  }, [searchTab]);

  ////// HANDLER //////

  const deleteHandler = useCallback((id) => {
    dispatch({
      type: FAQ_DELETE_REQUEST,
      data: {
        id,
      },
    });
  }, []);

  const updateHandler = useCallback(
    (data) => {
      if (
        currentData.question === data.question &&
        parseInt(currentData.FaqTypeId) === parseInt(data.FaqTypeId) &&
        currentData.answer === data.answer
      ) {
        return message.warning("수정할 정보가 없습니다.");
      }

      dispatch({
        type: FAQ_UPDATE_REQUEST,
        data: {
          id: currentData.id,
          question: data.question,
          answer: data.answer,
          faqTypeId: data.FaqTypeId,
        },
      });
    },
    [currentData]
  );

  const cModalToggleHandler = useCallback(() => {
    setCModal((prev) => !prev);
  }, [cModal]);

  const aModalToggleHandler = useCallback(
    (data) => {
      setAModal((prev) => !prev);
      setCurrentData(data);

      if (data) {
        answerForm.setFieldsValue({
          question: data.question,
          FaqTypeId: data.FaqTypeId,
          answer: data.answer,
          createdAt: data.viewCreatedAt,
          updatedAt: data.viewUpdatedAt,
        });
      }
    },
    [aModal, currentData]
  );

  const createFinishHandler = useCallback((data) => {
    dispatch({
      type: FAQ_CREATE_REQUEST,
      data: {
        question: data.question,
        answer: data.answer,
        faqTypeId: data.FaqTypeId,
      },
    });
    console.log(data);
  }, []);

  ////// DATAVIEW //////

  ////// DATA COLUMNS //////

  const columns = [
    {
      title: "번호",
      dataIndex: "num",
    },
    {
      title: "유형 이름",
      dataIndex: "typeValue",
    },
    {
      title: "질문",
      render: (data) => <Text fontWeight="700">{data.question}</Text>,
    },
    {
      title: "상세정보",
      render: (data) => (
        <Button
          type="primary"
          size="small"
          onClick={() => aModalToggleHandler(data)}
        >
          상세정보
        </Button>
      ),
    },
    {
      title: "생성일",
      dataIndex: "viewCreatedAt",
    },
    {
      title: "최근 수정일",
      dataIndex: "viewUpdatedAt",
    },
    {
      title: "삭제하기",
      render: (data) => (
        <Popconfirm
          okText="삭제"
          title="정말 삭제하시겠습니까?"
          placement="topRight"
          cancelText="취소"
          onConfirm={() => deleteHandler(data.id)}
        >
          <Button type="danger" size="small">
            삭제하기
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        breadcrumbs={["자주묻는 질문 관리", "자주묻는 질문"]}
        title={`자주묻는 질문`}
        subTitle={`자주묻는 질문을 확인하고 관리할 수 있습니다.`}
      />

      <AdminContent>
        {/* ADMIN TOP MENU */}
        <Wrapper
          dr="row"
          ju="space-between"
          margin="0px 0px 10px 0px"
          borderBottom={`1px dashed ${Theme.lightGrey4_C}`}
          padding="5px 0px"
        >
          <Wrapper width="50%" dr="row" ju="flex-start">
            <Button
              style={{ marginBottom: "5px" }}
              size="small"
              type={0 === searchTab ? "primary" : "default"}
              onClick={() => setSearchTab(0)}
            >
              전체
            </Button>

            {faqTypes.map((data, idx) => {
              return (
                <Button
                  key={data.id}
                  style={{ marginBottom: "5px" }}
                  size="small"
                  type={data.id === searchTab ? "primary" : "default"}
                  onClick={() => setSearchTab(data.id)}
                >
                  {data.value}
                </Button>
              );
            })}
          </Wrapper>

          <Wrapper width="50%" dr="row" ju="flex-end">
            <ModalBtn type="primary" size="small" onClick={cModalToggleHandler}>
              + 자주묻는질문 추가
            </ModalBtn>
          </Wrapper>
        </Wrapper>
        {/* ADMIN TOP MENU END */}

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
            전체 또는 등록된 유형별 조회를 통하여 [자주묻는 질문] 데이터를 조회,
            제어할 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            등록된 데이터는 웹사이트 및 어플리케이션에 즉시 적용되기 때문에
            정확한 입력을 필요로 합니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            상세정보를 누르면 유형을 수정할 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>삭제된 데이터는 복구할 수 없습니다.</GuideDiv>
        </Wrapper>

        {/* ADMIN GUIDE AREA END */}

        <Table
          rowKey="num"
          columns={columns}
          dataSource={adminFaqs ? adminFaqs : []}
          size="small"
        />
      </AdminContent>

      {/* ANSWER MODAL */}
      <Modal
        width="1080px"
        title="자주묻는 질문 상세정보"
        footer={null}
        visible={aModal}
        onCancel={() => aModalToggleHandler(null)}
      >
        <Wrapper>
          <Wrapper
            margin={`0px 0px 10px 0px`}
            radius="5px"
            bgColor={Theme.lightGrey5_C}
            padding="5px"
            fontSize="13px"
            al="flex-start"
          >
            <GuideDiv isImpo={true}>
              등록되어 화면에 보여지는 [자주묻는 질문]의 상세 정보를 확인할 수
              있습니다.
            </GuideDiv>
            <GuideDiv isImpo={true}>
              수정된 정보는 [저장] 버튼을 클릭해야 적용되며, 웹사이트 및
              어플리케이션에 즉시 반영됩니다.
            </GuideDiv>
          </Wrapper>

          <Form
            style={{ width: "100%" }}
            form={answerForm}
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            onFinish={updateHandler}
          >
            <Form.Item
              label="질문"
              name="question"
              rules={[
                { required: true, message: "질문은 필수 입력사항 입니다." },
              ]}
            >
              <Input size="small" allowClear />
            </Form.Item>

            <Form.Item
              label="유형"
              name="FaqTypeId"
              rules={[
                { required: true, message: "유형은 필수 선택사항 입니다." },
              ]}
            >
              <Select size="small">
                {faqTypes.map((data) => {
                  return (
                    <Select.Option value={data.id}>{data.value}</Select.Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label="답변"
              name="answer"
              rules={[
                { required: true, message: "답변은 필수 입력사항 입니다." },
              ]}
            >
              <Input.TextArea rows={15} allowClear />
            </Form.Item>

            <Form.Item label="데이터 생성일" name="createdAt">
              <Input size="small" allowClear readOnly />
            </Form.Item>

            <Form.Item label="최근 작업일" name="updatedAt">
              <Input size="small" allowClear readOnly />
            </Form.Item>

            <Wrapper al="flex-end">
              <Button size="small" type="primary" htmlType="submit">
                정보수정
              </Button>
            </Wrapper>
          </Form>
        </Wrapper>
      </Modal>

      {/* CREATE MODAL */}
      <Modal
        width="1080px"
        title="자주묻는 질문 생성하기"
        footer={null}
        visible={cModal}
        onCancel={cModalToggleHandler}
      >
        <Wrapper>
          <Wrapper
            margin={`0px 0px 10px 0px`}
            radius="5px"
            bgColor={Theme.lightGrey5_C}
            padding="5px"
            fontSize="13px"
            al="flex-start"
          >
            <GuideDiv isImpo={true}>
              등록되어 화면에 보여지는 [자주묻는 질문]를 새롭게 생성할 수
              있습니다.
            </GuideDiv>
            <GuideDiv isImpo={true}>
              모든 데이터를 작성한 후 하단의 [생성]버튼을 통해 홈페이지 및
              어플리케이션에 즉시 반영시킬 수 있습니다.
            </GuideDiv>
          </Wrapper>

          <Form
            style={{ width: "100%" }}
            form={createForm}
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            onFinish={createFinishHandler}
          >
            <Form.Item
              label="질문"
              name="question"
              rules={[
                { required: true, message: "질문은 필수 입력사항 입니다." },
              ]}
            >
              <Input size="small" allowClear />
            </Form.Item>

            <Form.Item
              label="유형"
              name="FaqTypeId"
              rules={[
                { required: true, message: "유형은 필수 선택사항 입니다." },
              ]}
            >
              <Select size="small">
                {faqTypes.map((data) => {
                  return (
                    <Select.Option value={data.id}>{data.value}</Select.Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label="답변"
              name="answer"
              rules={[
                { required: true, message: "답변은 필수 입력사항 입니다." },
              ]}
            >
              <Input.TextArea rows={15} allowClear />
            </Form.Item>

            <Wrapper al="flex-end">
              <Button size="small" type="primary" htmlType="submit">
                생성
              </Button>
            </Wrapper>
          </Form>
        </Wrapper>
      </Modal>

      <Wrapper
        margin={`10px 0px`}
        ju="flex-start"
        padding="5px 20px"
        fontSize="22px"
        dr="row"
      >
        <MenuUnfoldOutlined style={{ fontSize: "22px", marginRight: "5px" }} />
        종합 통계 데이터
      </Wrapper>
      <Wrapper shadow={`2px 2px 5px ${Theme.lightGrey5_C}`} padding="5px 20px">
        {graph &&
          graph.map((v) => {
            return (
              <Wrapper dr="row" ju="flex-start">
                <Text
                  width="200px"
                  bgColor={Theme.grey2_C}
                  color={Theme.white_C}
                  padding="0px 7px"
                  margin="0px 15px 0px 0px"
                >
                  {v.value}
                </Text>
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey5_C}`}
                  width={`calc(100% - 220px)`}
                  al="flex-start"
                >
                  {v.cnt}개
                </Wrapper>
              </Wrapper>
            );
          })}
      </Wrapper>
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

    context.store.dispatch({
      type: FAQ_ADMIN_LIST_REQUEST,
      data: {
        typeId: 0,
      },
    });

    context.store.dispatch({
      type: FAQ_GRAPH_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default withRouter(Faq);
