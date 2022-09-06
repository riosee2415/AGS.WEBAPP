import React, { useCallback, useEffect, useState } from "react";
import {
  Image,
  RsWrapper,
  Wrapper,
  CommonButton,
  ATag,
  Text,
} from "./commonComponents";
import Theme from "./Theme";
import wrapper from "../store/configureStore";
import axios from "axios";
import { END } from "@redux-saga/core";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import useWidth from "../hooks/useWidth";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const CustomBtn = styled(Text)`
  width: 130px;
  padding: 10px 0;
  font-size: 16px;

  ${(props) =>
    props.isActive &&
    `
    color:  ${Theme.basicTheme_C};
    `};

  &:hover {
    color: ${(props) => props.theme.basicTheme_C};
  }

  @media (max-width: 800px) {
    width: 90px;
    padding: 6px 0;
    font-size: 14px;
  }
`;

const WebRow = styled(Wrapper)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: 0.5s;

  @media (max-width: 800px) {
    display: none;
  }
`;

const MobileRow = styled(Wrapper)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: 0.5s;
  padding: 10px 0;

  & svg {
    font-size: 20px;
  }

  .ant-drawer-content-wrapper {
    width: 90% !important;
  }

  .ant-drawer-header-no-title .ant-drawer-close {
    display: none;
  }

  .ant-drawer-body {
    padding: 0;
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;

const AppHeader = () => {
  const width = useWidth();
  const dispatch = useDispatch();

  const router = useRouter();
  const [headerScroll, setHeaderScroll] = useState(false);
  const [pageY, setPageY] = useState(0);

  const { me } = useSelector((state) => state.user);

  ////////////// - USE STATE- ///////////////
  const [drawar, setDrawar] = useState(false);

  ///////////// - EVENT HANDLER- ////////////
  const handleScroll = useCallback(() => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const headerScroll = pageY && pageYOffset !== 0 && pageYOffset !== pageY;
    setHeaderScroll(headerScroll);
    setPageY(pageYOffset);
  });

  const drawarToggle = useCallback(() => {
    setDrawar((prev) => !prev);
  }, [drawar]);

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [pageY]);

  return (
    <>
      <WebRow
        bgColor={
          headerScroll === false && router.pathname === "/"
            ? `transparent`
            : Theme.white_C
        }
      >
        <RsWrapper
          width={`auto`}
          height={`80px`}
          dr={`row`}
          padding={`10px 0`}
          ju={`space-between`}
        >
          <Wrapper dr={`row`} width={`auto`}>
            <Link href={`/`}>
              <ATag width={`auto`} cursor={`pointer`}>
                <Image
                  width={width < 800 ? `70px` : `90px`}
                  src={
                    headerScroll === false && router.pathname === "/"
                      ? `https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/logo/logo_white.png`
                      : `https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/logo/logo_black.png`
                  }
                  alt={`Logo`}
                />
              </ATag>
            </Link>

            <Wrapper width={`auto`} dr={`row`} margin={`0 0 0 50px`}>
              <CustomBtn
                color={
                  headerScroll === false && router.pathname === "/"
                    ? Theme.white_C
                    : Theme.black2_C
                }
                isActive={router.pathname === `/1`}
              >
                <Link href={`/`}>
                  <ATag>제품소개</ATag>
                </Link>
              </CustomBtn>
              <CustomBtn
                color={
                  headerScroll === false && router.pathname === "/"
                    ? Theme.white_C
                    : Theme.black2_C
                }
                isActive={router.pathname === `/1`}
              >
                <Link href={`/`}>
                  <ATag>악세사리</ATag>
                </Link>
              </CustomBtn>
              <CustomBtn
                color={
                  headerScroll === false && router.pathname === "/"
                    ? Theme.white_C
                    : Theme.black2_C
                }
                isActive={router.pathname === `/1`}
              >
                <Link href={`/`}>
                  <ATag>고객지원</ATag>
                </Link>
              </CustomBtn>
              <CustomBtn
                color={
                  headerScroll === false && router.pathname === "/"
                    ? Theme.white_C
                    : Theme.black2_C
                }
                isActive={router.pathname === `/1`}
              >
                <Link href={`/`}>
                  <ATag>브랜드소개</ATag>
                </Link>
              </CustomBtn>
            </Wrapper>
          </Wrapper>

          <CommonButton width={`84px`} height={`35px`}>
            SHOP
          </CommonButton>
        </RsWrapper>
      </WebRow>

      {/* mobile */}
      <MobileRow
        bgColor={
          headerScroll === false && router.pathname === "/"
            ? `tranparent`
            : Theme.white_C
        }
      >
        <RsWrapper
          dr={`row`}
          ju={`space-between`}
          color={
            headerScroll === false && router.pathname === "/"
              ? Theme.white_C
              : Theme.black_C
          }
        >
          <ATag href={`/`} width={`65px`}>
            <Image
              alt="logo"
              src={
                headerScroll === false && router.pathname === "/"
                  ? `https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/logo/logo_white.png`
                  : `https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/logo/logo_black.png`
              }
            />
          </ATag>
          <MenuOutlined onClick={drawarToggle} />
        </RsWrapper>
        {drawar && (
          <Drawer
            placement="right"
            closable={true}
            onClose={drawarToggle}
            visible={drawarToggle}
            getContainer={false}
          >
            <Wrapper
              position={`absolute`}
              top={`30px`}
              right={`30px`}
              width={`40px`}
              height={`40px`}
              radius={`8px`}
              fontSize={`1.2rem`}
              color={Theme.basicTheme_C}
              border={`1px solid ${Theme.basicTheme_C}`}
              zIndex={`1`}
            >
              <CloseOutlined onClick={drawarToggle} />
            </Wrapper>
            <Wrapper
              al={`center`}
              height={`100vh`}
              bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/meat88/assets/images/store-page/img_bg.png")`}
            >
              <CustomBtn
                color={
                  headerScroll === false && router.pathname === "/"
                    ? Theme.white_C
                    : Theme.black2_C
                }
                isActive={router.pathname === "/"}
              >
                <Link href={`/brand`}>
                  <a>제품소개</a>
                </Link>
              </CustomBtn>
              <CustomBtn
                color={
                  headerScroll === false && router.pathname === "/"
                    ? Theme.white_C
                    : Theme.black2_C
                }
                isActive={router.pathname === "/"}
              >
                <Link href={`/menu`}>
                  <a>악세사리</a>
                </Link>
              </CustomBtn>
              <CustomBtn
                color={
                  headerScroll === false && router.pathname === "/"
                    ? Theme.white_C
                    : Theme.black2_C
                }
                isActive={router.pathname === "/"}
              >
                <Link href={`/shop`}>
                  <a>고객지원</a>
                </Link>
              </CustomBtn>
              <CustomBtn
                color={
                  headerScroll === false && router.pathname === "/"
                    ? Theme.white_C
                    : Theme.black2_C
                }
                isActive={router.pathname === "/"}
              >
                <Link href={`/franchisee`}>
                  <a>브랜드소개</a>
                </Link>
              </CustomBtn>

              <CommonButton width={`84px`} height={`35px`}>
                SHOP
              </CommonButton>
            </Wrapper>
          </Drawer>
        )}
      </MobileRow>
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

    // context.store.dispatch({
    //   type: ACCEPT_LOG_REQUEST,
    //   data: { typeId: "1" },
    // });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default AppHeader;
