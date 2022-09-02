import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../../components/AdminLayout";
import PageHeader from "../../../components/admin/PageHeader";
import {
  AdminContent,
  GuideDiv,
  Image,
  SpanText,
  Wrapper,
} from "../../../components/commonComponents";
import Theme from "../../../components/Theme";

import { END } from "redux-saga";
import axios from "axios";
import router, { useRouter } from "next/router";

import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Modal, Popconfirm, Table } from "antd";
import { LOAD_MY_INFO_REQUEST } from "../../../reducers/user";
import {
  AGENCY_CREATE_REQUEST,
  AGENCY_DELETE_REQUEST,
  AGENCY_IMAGE_RESET,
  AGENCY_IMAGE_UPLOAD_REQUEST,
  AGENCY_LIST_REQUEST,
  AGENCY_UPDATE_REQUEST,
} from "../../../reducers/agency";
import wrapper from "../../../store/configureStore";

const LOGO_WIDTH = `150`;
const LOGO_HEIGHT = `150`;

const AgencyGuide = () => {
  ////// GLOBAL STATE //////

  const { me } = useSelector((state) => state.user);

  const {
    agencyList,
    agencyImage,
    //
    st_agencyListError,
    //
    st_agencyCreateDone,
    st_agencyCreateError,
    //
    st_agencyUpdateDone,
    st_agencyUpdateError,
    //
    st_agencyDeleteDone,
    st_agencyDeleteError,
    //
    st_agencyImageUploadLoading,
    st_agencyImageUploadDone,
    st_agencyImageUploadError,
  } = useSelector((state) => state.agency);

  ////// HOOKS //////

  const dispatch = useDispatch();

  const [cuForm] = Form.useForm();

  const cuRef = useRef();

  const [cuModal, setCuModal] = useState(false);
  const [cuData, setCuData] = useState(null);

  ////// USEEFFECT //////
  // 기본
  useEffect(() => {
    if (!me) {
      router.push("/admin");
      return message.error("로그인 후 이용해주세요.");
    }
  }, [me]);

  // 리스트
  useEffect(() => {
    if (st_agencyListError) {
      return message.error(st_agencyListError);
    }
  }, [st_agencyListError]);

  // 생성
  useEffect(() => {
    if (st_agencyCreateDone) {
      dispatch({
        type: AGENCY_LIST_REQUEST,
      });

      cuModalToggle(null);

      return message.success("대리점이 생성되었습니다.");
    }
  }, [st_agencyCreateDone]);

  useEffect(() => {
    if (st_agencyCreateError) {
      return message.error(st_agencyCreateError);
    }
  }, [st_agencyCreateError]);

  // 수정
  useEffect(() => {
    if (st_agencyUpdateDone) {
      dispatch({
        type: AGENCY_LIST_REQUEST,
      });

      cuModalToggle(null);

      return message.success("대리점이 수정되었습니다.");
    }
  }, [st_agencyUpdateDone]);

  useEffect(() => {
    if (st_agencyUpdateError) {
      return message.error(st_agencyUpdateError);
    }
  }, [st_agencyUpdateError]);

  // 삭제
  useEffect(() => {
    if (st_agencyDeleteDone) {
      dispatch({
        type: AGENCY_LIST_REQUEST,
      });

      return message.success("대리점이 삭제되었습니다.");
    }
  }, [st_agencyDeleteDone]);

  useEffect(() => {
    if (st_agencyDeleteError) {
      return message.error(st_agencyDeleteError);
    }
  }, [st_agencyDeleteError]);

  // 이미지

  useEffect(() => {
    if (st_agencyImageUploadDone) {
      return message.success("이미지가 업로드 되었습니다.");
    }
  }, [st_agencyImageUploadDone]);

  useEffect(() => {
    if (st_agencyImageUploadError) {
      return message.error(st_agencyImageUploadError);
    }
  }, [st_agencyImageUploadError]);

  ////// TOGGLE //////
  const cuModalToggle = useCallback(
    (data) => {
      if (data) {
        setCuData(data);
        console.log(data);

        dispatch({
          type: AGENCY_IMAGE_RESET,
          data: data.imagePath,
        });

        cuForm.setFieldsValue({
          companyName: data.companyName,
          address: data.address,
          number: data.number,
        });
      } else {
        setCuData(null);

        dispatch({
          type: AGENCY_IMAGE_RESET,
          data: null,
        });

        cuForm.resetFields();
      }

      setCuModal((prev) => !prev);
    },
    [cuModal, cuData]
  );

  console.log(agencyImage);
  ////// HANDLER //////

  // 이미지 업로드
  const onChangeImages = useCallback((e) => {
    const formData = new FormData();

    [].forEach.call(e.target.files, (file) => {
      formData.append("image", file);
    });

    dispatch({
      type: AGENCY_IMAGE_UPLOAD_REQUEST,
      data: formData,
    });
  }, []);

  const clickImageUpload = useCallback(() => {
    cuRef.current.click();
  }, [cuRef.current]);

  // 생성 . 수정 클릭
  const cuFormClickHandler = useCallback(() => {
    cuForm.submit();
  }, []);

  // 생성 . 수정
  const cuSubmitHandler = useCallback(
    (data) => {
      if (cuData) {
        dispatch({
          type: AGENCY_UPDATE_REQUEST,
          data: {
            id: cuData.id,
            imagePath: agencyImage,
            companyName: data.companyName,
            address: data.address,
            number: data.number,
          },
        });
      } else {
        dispatch({
          type: AGENCY_CREATE_REQUEST,
          data: {
            imagePath: agencyImage,
            companyName: data.companyName,
            address: data.address,
            number: data.number,
          },
        });
      }
    },
    [cuData, agencyImage]
  );

  // 삭제
  const cuDeleteHandler = useCallback((data) => {
    dispatch({
      type: AGENCY_DELETE_REQUEST,
      data: {
        agencyId: data.id,
      },
    });
  }, []);

  ////// DATAVIEW //////

  const columns = [
    {
      width: `5%`,
      align: `center`,
      title: "번호",
      dataIndex: "id",
    },
    {
      width: `10%`,
      align: `center`,
      title: "로고",
      render: (data) => (
        <Image
          width={`50px`}
          height={`50px`}
          src={data.imagePath}
          alt={`logo`}
        />
      ),
    },
    {
      width: `20%`,
      title: "회사명",
      dataIndex: "companyName",
    },
    {
      width: `15%`,
      title: "주소",
      dataIndex: "address",
    },
    {
      width: `15%`,
      title: "전화번호",
      dataIndex: "number",
    },
    {
      width: `15%`,
      title: "생성일",
      render: (data) => {
        const date = data.createdAt.split("T")[0].split("-");
        return `${date[0]}년 ${date[1]}월 ${date[2]}일`;
      },
    },
    {
      width: `10%`,
      align: `center`,
      title: "수정",
      render: (data) => (
        <Button size="small" type="primary" onClick={() => cuModalToggle(data)}>
          수정
        </Button>
      ),
    },
    {
      width: `10%`,
      align: `center`,
      title: "삭제",
      render: (data) => (
        <Popconfirm
          title={`삭제하시겠습니까?`}
          okText="삭제"
          cancelText="취소"
          onConfirm={() => cuDeleteHandler(data)}
        >
          <Button size="small" type="danger">
            삭제
          </Button>
        </Popconfirm>
      ),
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
        {/* ADMIN MENU AREA */}
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
            icon={<PlusOutlined />}
            onClick={() => cuModalToggle(null)}
          >
            대리점 추가
          </Button>
        </Wrapper>
        {/* ADMIN MENU AREA */}

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
            대리점 안내를 추가, 수정, 삭제 할 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>삭제된 데이터는 복구할 수 없습니다.</GuideDiv>
        </Wrapper>
        {/* ADMIN GUIDE AREA */}
        <Table size="small" dataSource={agencyList} columns={columns} />
      </AdminContent>

      <Modal
        width={`600px`}
        title={cuData ? "수정하기" : "추가하기"}
        visible={cuModal}
        okText={cuData ? `수정` : `추가`}
        okButtonProps={{ size: `small` }}
        onOk={cuFormClickHandler}
        cancelText={`취소`}
        cancelButtonProps={{ size: `small` }}
        onCancel={() => cuModalToggle(null)}
      >
        <Wrapper>
          <Image
            width={`150px`}
            height={`150px`}
            src={
              agencyImage
                ? `${agencyImage}`
                : `https://via.placeholder.com/${LOGO_WIDTH}x${LOGO_HEIGHT}`
            }
            alt="main_GALLEY_image"
          />

          <Wrapper margin={`10px 0 25px`}>
            <input
              type="file"
              name="image"
              accept=".png, .jpg"
              // multiple
              hidden
              ref={cuRef}
              onChange={onChangeImages}
            />

            <Button
              style={{ width: `150px` }}
              size="small"
              type="primary"
              onClick={clickImageUpload}
              loading={st_agencyImageUploadLoading}
            >
              이미지 업로드
            </Button>
          </Wrapper>
        </Wrapper>
        <Form
          form={cuForm}
          onFinish={cuSubmitHandler}
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 21 }}
        >
          <Form.Item
            label={`회사명`}
            name={`companyName`}
            rules={[{ required: true, message: "회사명을 입력해주세요." }]}
          >
            <Input size="small" placeholder="회사명을 입력해주세요." />
          </Form.Item>
          <Form.Item
            label={`주소`}
            name={`address`}
            rules={[{ required: true, message: "주소를 입력해주세요." }]}
          >
            <Input size="small" placeholder="주소를 입력해주세요." />
          </Form.Item>
          <Form.Item
            label={`전화번호`}
            name={`number`}
            rules={[{ required: true, message: "전화번호를 입력해주세요." }]}
          >
            <Input
              type={`number`}
              size="small"
              placeholder="전화번호는 -를 빼고 입력해주세요."
            />
          </Form.Item>
        </Form>
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
      type: AGENCY_LIST_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default AgencyGuide;
