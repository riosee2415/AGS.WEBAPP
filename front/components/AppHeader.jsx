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
  text-align: center;

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

const MenuWrapperStyle = styled(Wrapper)`
  visibility: ${(props) => props.hidden};
  position: fixed;
  top: 0;
  overflow-y: scroll;
  background-color: ${Theme.black2_C};
  z-index: 100;
  height: 100%;
  justify-content: flex-start;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
`;

const HoverText = styled(Text)`
  transition: 0.5s;

  &:hover {
    color: ${Theme.basicTheme_C};
    cursor: pointer;
  }
`;

const MainTextStyle = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  color: ${Theme.white_C};
  margin-bottom: 16px;

  &:hover {
    color: ${Theme.basicTheme_C};
    border-bottom: 2px solid ${Theme.basicTheme_C};
  }
`;

const SubTextStyle = styled(Text)`
  font-size: 18px;
  cursor: pointer;
  transition: 0.5s;
  color: ${Theme.white_C};
  margin-bottom: ${(props) => props.marginB || `10px`};

  &:hover {
    color: ${Theme.basicTheme_C};
  }
`;

const AppHeader = () => {
  const width = useWidth();
  const dispatch = useDispatch();

  const router = useRouter();
  const [headerScroll, setHeaderScroll] = useState(false);
  const [pageY, setPageY] = useState(0);
  const [hiddenAcceMenu, setHiddenAcceMenu] = useState(false);
  const [hiddenProdMenu, setHiddenProdMenu] = useState(false);

  const { me } = useSelector((state) => state.user);

  ////////////// - USE STATE- ///////////////
  const [drawar, setDrawar] = useState(false);
  const [tab, setTab] = useState(0);

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

  const menuAcceHandler = useCallback(() => {
    setHiddenAcceMenu((prev) => !prev);
  }, [hiddenAcceMenu]);

  const menuProdHandler = useCallback(() => {
    setHiddenProdMenu((prev) => !prev);
  }, [hiddenProdMenu]);

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
        <Wrapper
          width={`100%`}
          height={`80px`}
          dr={`row`}
          padding={`10px 50px`}
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
                isActive={router.pathname === `/product`}
              >
                <ATag onClick={menuProdHandler}>제품소개</ATag>
              </CustomBtn>
              <CustomBtn
                color={
                  headerScroll === false && router.pathname === "/"
                    ? Theme.white_C
                    : Theme.black2_C
                }
                isActive={router.pathname === `/accessory`}
              >
                <ATag onClick={menuAcceHandler}>악세사리</ATag>
              </CustomBtn>
              <CustomBtn
                color={
                  headerScroll === false && router.pathname === "/"
                    ? Theme.white_C
                    : Theme.black2_C
                }
                isActive={router.pathname === `/center`}
              >
                <Link href={`/center`}>
                  <ATag>고객지원</ATag>
                </Link>
              </CustomBtn>
              <CustomBtn
                color={
                  headerScroll === false && router.pathname === "/"
                    ? Theme.white_C
                    : Theme.black2_C
                }
                isActive={router.pathname === `/center/brand`}
              >
                <Link href={`/center/brand`}>
                  <ATag>브랜드소개</ATag>
                </Link>
              </CustomBtn>
            </Wrapper>
          </Wrapper>

          <CommonButton width={`84px`} height={`35px`}>
            SHOP
          </CommonButton>
        </Wrapper>
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
              padding={`0 0 300px`}
              height={`100vh`}
              bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/meat88/assets/images/store-page/img_bg.png")`}
            >
              <CustomBtn
                color={Theme.black2_C}
                isActive={router.pathname === "/product"}
              >
                <Link href={`/product`}>
                  <a>제품소개</a>
                </Link>
              </CustomBtn>
              <CustomBtn
                color={Theme.black2_C}
                isActive={router.pathname === "/accessory"}
              >
                <a onClick={menuAcceHandler}>악세사리</a>
              </CustomBtn>
              <CustomBtn
                color={Theme.black2_C}
                isActive={router.pathname === "/center"}
              >
                <Link href={`/center`}>
                  <a>고객지원</a>
                </Link>
              </CustomBtn>
              <CustomBtn
                color={Theme.black2_C}
                isActive={router.pathname === "/center/brand"}
              >
                <Link href={`/center/brand`}>
                  <a>브랜드소개</a>
                </Link>
              </CustomBtn>

              <CommonButton
                fontSize={`16px`}
                margin={`17px 0 0`}
                width={`84px`}
                height={`35px`}
              >
                SHOP
              </CommonButton>
            </Wrapper>
          </Drawer>
        )}
      </MobileRow>

      {/** 악세사리 */}
      <MenuWrapperStyle hidden={hiddenAcceMenu ? `` : `hidden`}>
        <Wrapper
          padding={
            width < 700
              ? `30px 30px`
              : width < 950
              ? `78px 30px `
              : width < 1150
              ? `78px 100px `
              : `78px 198px `
          }
        >
          <Wrapper
            dr={`row`}
            ju={`space-between`}
            margin={width < 700 ? `0 0 50px` : `0 0 118px`}
          >
            <Text
              borderBottom={`4px solid ${Theme.basicTheme_C}`}
              fontSize={`50px`}
              fontWeight={`500`}
              color={Theme.white_C}
            >
              악세사리
            </Text>
            <Wrapper
              width={`65px`}
              height={`65px`}
              bgColor={Theme.basicTheme_C}
              radius={`50%`}
              onClick={menuAcceHandler}
              cursor={`pointer`}
            >
              <CloseOutlined width={`13px`} fontWeight={`bold`} />
            </Wrapper>
          </Wrapper>
          <Wrapper dr={`row`} ju={`space-around`} al={`flex-start`}>
            <Wrapper
              width={width < 800 ? `300px` : width < 1400 ? `360px` : `240px`}
            >
              <Wrapper
                bgColor={Theme.basicTheme_C}
                radius="10px"
                height={`115px`}
                margin={`0 0 30px`}
                cursor={`pointer`}
                onClick={() => router.push(`/accessory/type?type=foamcannon`)}
              >
                <Image
                  width={`75%`}
                  alt="menu1-image"
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_foam%26lance.png"
                />
              </Wrapper>
              <MainTextStyle
                onClick={() => router.push(`/accessory/type?type=foamcannon`)}
              >
                폼 캐논
              </MainTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=foamcannon`)}
              >
                베이직 폼 캐논
              </SubTextStyle>
              <SubTextStyle
                marginB={`40px`}
                onClick={() => router.push(`/accessory/type?type=foamcannon`)}
              >
                브라스 폼 캐논
              </SubTextStyle>
              <MainTextStyle
                onClick={() => router.push(`/accessory/type?type=foamcannon`)}
              >
                랜스
              </MainTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=foamcannon`)}
              >
                줌 랜스
              </SubTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=foamcannon`)}
              >
                플랙스 랜스
              </SubTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=foamcannon`)}
              >
                텔레스코픽 랜스
              </SubTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=foamcannon`)}
              >
                90˚ 앵글 랜스
              </SubTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=foamcannon`)}
              >
                135˚ 앵글 랜스
              </SubTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=foamcannon`)}
              >
                고정랜스
              </SubTextStyle>
            </Wrapper>
            <Wrapper
              width={width < 800 ? `300px` : width < 1400 ? `360px` : `240px`}
              margin={width < 700 ? `50px 0 0` : ``}
            >
              <Wrapper
                bgColor={Theme.basicTheme_C}
                radius="10px"
                height={`115px`}
                margin={`0 0 30px`}
                cursor={`pointer`}
                onClick={() => router.push(`/accessory/type?type=nozzle`)}
              >
                <Image
                  width={`75%`}
                  alt="menu2-image"
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_nozzles-patio.png"
                />
              </Wrapper>
              <MainTextStyle
                onClick={() => router.push(`/accessory/type?type=nozzle`)}
              >
                노즐
              </MainTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=nozzle`)}
              >
                가변 노즐
              </SubTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=nozzle`)}
              >
                터보 노즐
              </SubTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=nozzle`)}
              >
                0˚ 노즐
              </SubTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=nozzle`)}
              >
                15˚ 노즐
              </SubTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=nozzle`)}
              >
                25˚ 노즐
              </SubTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=nozzle`)}
              >
                40˚ 노즐
              </SubTextStyle>
              <SubTextStyle
                marginB={`40px`}
                onClick={() => router.push(`/accessory/type?type=nozzle`)}
              >
                60˚ 노즐
              </SubTextStyle>
              <MainTextStyle
                onClick={() => router.push(`/accessory/type?type=nozzle`)}
              >
                파티오 클리너
              </MainTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=nozzle`)}
              >
                베이직 파티오 클리너
              </SubTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=nozzle`)}
              >
                프리미엄 파티오 클리너
              </SubTextStyle>
            </Wrapper>
            <Wrapper
              width={width < 800 ? `300px` : width < 1400 ? `360px` : `240px`}
              margin={width < 1400 ? `50px 0 0` : ``}
            >
              <Wrapper
                bgColor={Theme.basicTheme_C}
                radius="10px"
                height={`115px`}
                margin={`0 0 30px`}
                cursor={`pointer`}
                onClick={() => router.push(`/accessory/type?type=hose`)}
              >
                <Image
                  width={`75%`}
                  alt="menu3-image"
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_hose-brush.png"
                />
              </Wrapper>
              <MainTextStyle
                onClick={() => router.push(`/accessory/type?type=hose`)}
              >
                호스
              </MainTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=hose`)}
              >
                스틸 고압 호스
              </SubTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=hose`)}
              >
                고압연장 호스
              </SubTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=hose`)}
              >
                편사 호스
              </SubTextStyle>
              <SubTextStyle
                marginB={`40px`}
                onClick={() => router.push(`/accessory/type?type=hose`)}
              >
                파이프 세척 호스
              </SubTextStyle>
              <MainTextStyle
                onClick={() => router.push(`/accessory/type?type=hose`)}
              >
                브러시
              </MainTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=hose`)}
              >
                사각 브러시
              </SubTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=hose`)}
              >
                가구 브러시
              </SubTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=hose`)}
              >
                극세사 브러시
              </SubTextStyle>
            </Wrapper>
            <Wrapper
              width={width < 800 ? `300px` : width < 1400 ? `360px` : `240px`}
              margin={width < 1400 ? `50px 0 0` : ``}
            >
              <Wrapper
                bgColor={Theme.basicTheme_C}
                radius="10px"
                height={`115px`}
                margin={`0 0 30px`}
                cursor={`pointer`}
                onClick={() => router.push(`/accessory/type?type=gun`)}
              >
                <Image
                  width={`75%`}
                  alt="menu4-image"
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_gun-adapter-org.png"
                />
              </Wrapper>
              <MainTextStyle
                onClick={() => router.push(`/accessory/type?type=gun`)}
              >
                고압건
              </MainTextStyle>
              <SubTextStyle
                marginB={`40px`}
                onClick={() => router.push(`/accessory/type?type=gun`)}
              >
                제로포스 고압건
              </SubTextStyle>
              <MainTextStyle
                onClick={() => router.push(`/accessory/type?type=gun`)}
              >
                어댑터
              </MainTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=gun`)}
              >
                암/수 어댑터
              </SubTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=gun`)}
              >
                노즐 회전 어댑터
              </SubTextStyle>
              <SubTextStyle
                marginB={`40px`}
                onClick={() => router.push(`/accessory/type?type=gun`)}
              >
                AVA to 카쳐 호스 어댑터
              </SubTextStyle>
              <MainTextStyle
                onClick={() => router.push(`/accessory/type?type=gun`)}
              >
                수납도구
              </MainTextStyle>
              <SubTextStyle
                onClick={() => router.push(`/accessory/type?type=gun`)}
              >
                수납함
              </SubTextStyle>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </MenuWrapperStyle>
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
