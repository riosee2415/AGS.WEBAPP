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

  const [cModal, setCModal] = useState(false);
  const [uModal, setUModal] = useState(false);
  const [dModal, setDModal] = useState(false);
  const [searchTab, setSearchTab] = useState(1);
  const [currentData, setCurrentData] = useState(null);

  const router = useRouter();
  const dispatch = useDispatch();

  const [createForm] = Form.useForm();
  const [updateForm] = Form.useForm();

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

  ////// USEEFFECT //////
  // FAQ 유형 리스트 에러
  useEffect(() => {
    if (st_faqTypeListError) {
      return message.error(st_faqTypeListError);
    }
  }, [st_faqTypeListError]);

  // FAQ 유형 등록 에러
  useEffect(() => {
    if (st_faqTypeCreateError) {
      return message.error(st_faqTypeCreateError);
    }
  }, [st_faqTypeCreateError]);
  // FAQ 유형 등록 완료
  useEffect(() => {
    if (st_faqTypeCreateDone) {
      dispatch({
        type: FAQ_TYPE_LIST_REQUEST,
        data: {
          searchTab,
        },
      });

      createModalToggle();

      return message.success("유형이 등록되었습니다.");
    }
  }, [st_faqTypeCreateDone, searchTab]);

  // FAQ 유형 수정 에러
  useEffect(() => {
    if (st_faqTypeUpdateError) {
      return message.error(st_faqTypeUpdateError);
    }
  }, [st_faqTypeUpdateError]);
  // FAQ 유형 수정 완료
  useEffect(() => {
    if (st_faqTypeUpdateDone) {
      dispatch({
        type: FAQ_TYPE_LIST_REQUEST,
        data: {
          searchTab,
        },
      });

      updateModalToggle();

      return message.success("유형정보가 수정되었습니다.");
    }
  }, [st_faqTypeUpdateDone, searchTab]);

  // FAQ 유형 삭제 에러
  useEffect(() => {
    if (st_faqTypeDeleteError) {
      return message.error(st_faqTypeDeleteError);
    }
  }, [st_faqTypeDeleteError]);
  // FAQ 유형 삭제 완료
  useEffect(() => {
    if (st_faqTypeDeleteDone) {
      dispatch({
        type: FAQ_TYPE_LIST_REQUEST,
        data: {
          searchTab,
        },
      });

      return message.success("유형이 삭제되었습니다.");
    }
  }, [st_faqTypeDeleteDone, searchTab]);

  useEffect(() => {
    dispatch({
      type: FAQ_TYPE_LIST_REQUEST,
      data: {
        searchTab,
      },
    });
  }, [searchTab]);

  ////// HANDLER //////

  const detailModalToggle = useCallback(
    (id) => {
      setDModal((prev) => !prev);

      if (id) {
        dispatch({
          type: FAQ_TYPE_GETDATA_REQUEST,
          data: {
            faqTypeId: id,
          },
        });
      }
    },
    [dModal]
  );

  const createModalToggle = useCallback(() => {
    setCModal((prev) => !prev);

    createForm.resetFields();
  }, [cModal, createForm]);

  const updateModalToggle = useCallback(
    (data) => {
      setCurrentData(data);
      setUModal((prev) => !prev);

      if (data) {
        updateForm.setFieldsValue({
          _value: data.value,
        });
      }
    },
    [uModal, updateForm, currentData]
  );

  const createFinishHandler = useCallback((data) => {
    dispatch({
      type: FAQ_TYPE_CREATE_REQUEST,
      data: {
        value: data._value,
      },
    });
  }, []);

  const updateFinishHandler = useCallback(
    (data) => {
      if (currentData.value === data._value) {
        return message.warning("변경할 데이터가 없습니다.");
      }

      dispatch({
        type: FAQ_TYPE_UPDATE_REQUEST,
        data: {
          id: currentData.id,
          value: data._value,
        },
      });
    },
    [currentData]
  );

  const deleteHandler = useCallback((id) => {
    dispatch({
      type: FAQ_TYPE_DELETE_REQUEST,
      data: {
        id,
      },
    });
  }, []);

  ////// DATAVIEW //////

  ////// DATA COLUMNS //////

  const columns = [
    {
      title: "번호",
      dataIndex: "num",
    },
    {
      title: "유형이름",
      render: (data) => <Text fontWeight="700">{data.value}</Text>,
    },
    {
      title: "생성일",
      dataIndex: "viewCreatedAt",
    },

    {
      title: "데이터 수정",
      render: (data) => {
        return (
          <Button
            type="primary"
            size="small"
            onClick={() => updateModalToggle(data)}
          >
            데이터 수정
          </Button>
        );
      },
    },
    {
      title: "데이터 삭제",
      render: (data) => {
        return (
          <Popconfirm
            title="정말 삭제하시겠습니까?"
            onConfirm={() => deleteHandler(data.id)}
            okText="삭제"
            cancelText="취소"
          >
            <Button type="danger" size="small">
              데이터 삭제
            </Button>
          </Popconfirm>
        );
      },
    },
    {
      title: "최근 수정일",
      dataIndex: "viewUpdatedAt",
    },
    {
      title: "등록된 질문",
      render: (data) => (
        <Button
          type="primary"
          size="small"
          onClick={() => detailModalToggle(data.id)}
        >
          데이터 보기
        </Button>
      ),
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        breadcrumbs={["자주묻는 질문 관리", "자주묻는 질문 유형 관리"]}
        title={`자주묻는 질문 유형`}
        subTitle={`자주묻는 질문 유형을 확인하고 관리할 수 있습니다.`}
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
              size="small"
              type={searchTab === 1 ? "primary" : "default"}
              onClick={() => setSearchTab(1)}
            >
              최근 생성일 기준
            </Button>
            <Button
              size="small"
              type={searchTab === 2 ? "primary" : "default"}
              onClick={() => setSearchTab(2)}
            >
              유형이름 기준
            </Button>
          </Wrapper>

          <Wrapper width="50%" dr="row" ju="flex-end">
            <ModalBtn type="primary" size="small" onClick={createModalToggle}>
              + 질문유형 추가
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
            [자주묻는 질문]페이지 내 사용자가 선택할 수 있는 유형을 관리할 수
            있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            유형을 삭제할 경우, 유형이 포함한 자주묻는 질문/답변이 화면에 보이지
            않을 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>삭제된 데이터는 복구할 수 없습니다.</GuideDiv>
        </Wrapper>

        {/* ADMIN GUIDE AREA END */}

        <Table
          rowKey="num"
          columns={columns}
          //   dataSource={faqTypes}
          size="small"
        />
      </AdminContent>

      {/* CREATE MODAL */}
      <Modal
        width="860px"
        title="자주묻는 질문 유형 추가"
        footer={null}
        visible={cModal}
        onCancel={createModalToggle}
      >
        <>
          <Wrapper
            margin={`0px 0px 10px 0px`}
            radius="5px"
            bgColor={Theme.lightGrey5_C}
            padding="5px"
            fontSize="13px"
            al="flex-start"
          >
            <GuideDiv isImpo={true}>
              유형은 포괄적인 의미를 담은 [단어]로 등록하는게 좋습니다.
            </GuideDiv>
            <GuideDiv isImpo={true}>
              특수문자 및 공백의 사용은 화면에 상이하게 보일 수 있습니다.
            </GuideDiv>
          </Wrapper>

          <Form
            form={createForm}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            onFinish={createFinishHandler}
          >
            <Form.Item
              label="유형이름"
              name="_value"
              rules={[
                { required: true, message: "유형명은 필수 입력사항 입니다." },
              ]}
            >
              <Input size="small" allowClear />
            </Form.Item>

            <Wrapper al="flex-end">
              <Button size="small" type="primary" htmlType="submit">
                등록
              </Button>
            </Wrapper>
          </Form>
        </>
      </Modal>

      {/* UPDAET MODAL */}
      <Modal
        width="860px"
        title="자주묻는 질문 유형 수정"
        footer={null}
        visible={uModal}
        onCancel={() => updateModalToggle(null)}
      >
        <>
          <Wrapper
            margin={`0px 0px 10px 0px`}
            radius="5px"
            bgColor={Theme.lightGrey5_C}
            padding="5px"
            fontSize="13px"
            al="flex-start"
          >
            <GuideDiv isImpo={true}>
              유형은 포괄적인 의미를 담은 [단어]로 등록하는게 좋습니다.
            </GuideDiv>
            <GuideDiv isImpo={true}>
              특수문자 및 공백의 사용은 화면에 상이하게 보일 수 있습니다.
            </GuideDiv>
          </Wrapper>

          <Form
            form={updateForm}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            onFinish={updateFinishHandler}
          >
            <Form.Item
              label="유형이름"
              name="_value"
              rules={[
                { required: true, message: "유형명은 필수 입력사항 입니다." },
              ]}
            >
              <Input size="small" allowClear />
            </Form.Item>

            <Wrapper al="flex-end">
              <Button size="small" type="primary" htmlType="submit">
                수정
              </Button>
            </Wrapper>
          </Form>
        </>
      </Modal>

      {/* DETAIL MODAL */}
      <Modal
        width="860px"
        title="해당유형에 포함된 질문 데이터"
        footer={null}
        visible={dModal}
        onCancel={() => detailModalToggle(null)}
      >
        <>
          <Wrapper
            margin={`0px 0px 10px 0px`}
            radius="5px"
            bgColor={Theme.lightGrey5_C}
            padding="5px"
            fontSize="13px"
            al="flex-start"
          >
            <GuideDiv isImpo={true}>
              본 데이터는 최근등록일을 기준으로 보여집니다.
            </GuideDiv>
            <GuideDiv isImpo={true}>
              해당 화면에서는 [자주묻는 질문]의 제목만 보여지며, 보여지는
              데이터를 제어할 수 없습니다.
            </GuideDiv>
          </Wrapper>

          <Wrapper margin="20px 0px">
            {currentFaqList.length === 0 ? (
              <Wrapper dr="row" padding="5px">
                <InfoCircleOutlined
                  style={{ color: Theme.red_C, marginRight: "5px" }}
                />
                등록된 질문이 없습니다.
              </Wrapper>
            ) : (
              currentFaqList.map((v, idx) => {
                return (
                  <ViewBox>
                    {idx + 1}. {v.question}
                  </ViewBox>
                );
              })
            )}
          </Wrapper>
        </>
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
