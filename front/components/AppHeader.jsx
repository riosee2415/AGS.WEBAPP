import React, { useCallback, useEffect, useState } from "react";
import {
  Image,
  RsWrapper,
  Wrapper,
  CommonButton,
  ATag,
  Text,
  Title,
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
import { HIDDEN_ACC_MENU, HIDDEN_PRO_MENU } from "../reducers/menu";

const CustomBtn = styled(Text)`
  width: 130px;
  padding: 10px 0;
  font-size: 16px;
  font-weight: bold;

  ${(props) =>
    props.isActive &&
    `
    color:  ${Theme.basicTheme_C};
    `};

  &:hover {
    color: ${(props) => props.theme.basicTheme_C};
  }

  @media (max-width: 800px) {
    padding: 6px 0;
    font-size: 18px;
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
    background: ${(props) => props.theme.black2_C};
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

const MainTextStyle = styled(Wrapper)`
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  color: ${Theme.white_C};
  position: relative;

  line-height: 26px;

  &:hover {
    color: ${Theme.basicTheme_C};

    &::before {
      width: ${(props) => props.beforeW || `30%`};
    }
  }
  &::before {
    content: "";
    width: 0;
    height: 2px;
    background-color: ${Theme.basicTheme_C};
    position: absolute;
    top: 30px;
    left: ${(props) => props.beforeL || `35%`};

    transition: 0.5s;
  }

  @media (max-width: 700px) {
    align-items: flex-start;
    &::before {
      left: 0;
    }
  }
`;

const SubTextStyle = styled(Text)`
  font-size: 18px;
  cursor: pointer;
  transition: 0.5s;
  color: ${Theme.white_C};
  margin-bottom: ${(props) => props.marginB || `10px`};
  margin-top: ${(props) => props.marginT};
  line-height: 21px;
  font-weight: normal;

  &:hover {
    color: ${Theme.basicTheme_C};
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const CloseOutlinedStyle = styled(CloseOutlined)`
  font-size: 20px;
  font-weight: 900;
`;

const MenuTitleStyle = styled(Title)`
  transition: 0.5s;
  &:hover {
    color: ${Theme.basicTheme_C};
    &::before {
      background: ${(props) => props.theme.white_C};
    }
  }
`;

const AppHeader = () => {
  const width = useWidth();
  const dispatch = useDispatch();

  const router = useRouter();
  const [headerScroll, setHeaderScroll] = useState(false);
  const [pageY, setPageY] = useState(0);

  const { me } = useSelector((state) => state.user);

  const { hiddenAcceMenu, hiddenProdMenu } = useSelector((state) => state.menu);

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
    dispatch({
      type: HIDDEN_ACC_MENU,
      data: !hiddenAcceMenu,
    });
  }, [hiddenAcceMenu]);

  const menuProdHandler = useCallback(() => {
    dispatch({
      type: HIDDEN_PRO_MENU,
      data: !hiddenProdMenu,
    });
  }, [hiddenProdMenu]);

  const menuLinkHandler = useCallback(
    (link) => {
      if (hiddenAcceMenu) {
        dispatch({
          type: HIDDEN_ACC_MENU,
          data: false,
        });
      }
      if (hiddenProdMenu) {
        dispatch({
          type: HIDDEN_PRO_MENU,
          data: false,
        });
      }
      router.push(link);
      window.scrollTo(0, 0);
    },
    [hiddenAcceMenu, hiddenProdMenu]
  );

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
            <ATag
              href="https://smartstore.naver.com/ags09/category/f41afc51364f4d1bbf4c07f48e051ed7?cp=1"
              target="_blank"
            >
              SHOP
            </ATag>
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
              al={`flex-start`}
              padding={`20px 0 0 20px`}
              height={`100vh`}
              ju={`flex-start`}
              fontSize={`22px`}
              bgColor={Theme.black2_C}
              // bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/meat88/assets/images/store-page/img_bg.png")`}
            >
              <Image
                width={`74px`}
                alt={`logo_img`}
                margin={`0 0 80px`}
                src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/logo/logo_white.png`}
              />
              <CustomBtn
                color={Theme.white_C}
                isActive={router.pathname === "/product"}
              >
                <a onClick={menuProdHandler}>제품소개</a>
              </CustomBtn>
              <CustomBtn
                color={Theme.white_C}
                isActive={router.pathname === "/accessory"}
              >
                <a onClick={menuAcceHandler}>악세사리</a>
              </CustomBtn>
              <CustomBtn
                color={Theme.white_C}
                isActive={router.pathname === "/center"}
              >
                <Link href={`/center`}>
                  <a>고객지원</a>
                </Link>
              </CustomBtn>
              <CustomBtn
                color={Theme.white_C}
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
                <ATag
                  href="https://smartstore.naver.com/ags09/category/f41afc51364f4d1bbf4c07f48e051ed7?cp=1"
                  target="_blank"
                >
                  SHOP
                </ATag>
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
            <MenuTitleStyle
              fontSize={width < 700 ? `30px` : `50px`}
              color={Theme.white_C}
              cursor={`pointer`}
              onClick={() => menuLinkHandler("/accessory")}
            >
              악세사리
            </MenuTitleStyle>
            <Wrapper
              width={width < 700 ? `39px` : `65px`}
              height={width < 700 ? `39px` : `65px`}
              bgColor={Theme.basicTheme_C}
              radius={`50%`}
              onClick={menuAcceHandler}
              cursor={`pointer`}
            >
              <CloseOutlinedStyle />
            </Wrapper>
          </Wrapper>
          <Wrapper dr={`row`} ju={`space-around`} al={`flex-start`}>
            <Wrapper
              width={width < 800 ? `300px` : width < 1400 ? `360px` : `240px`}
            >
              <Wrapper
                bgColor={Theme.basicTheme_C}
                radius="10px"
                height={width < 700 ? `90px` : `115px`}
                margin={`0 0 30px`}
                cursor={`pointer`}
                onClick={() =>
                  menuLinkHandler(`/accessory/type?type=foamcannon`)
                }
              >
                <Image
                  width={`75%`}
                  alt="menu1-image"
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_foam%26lance.png"
                />
              </Wrapper>
              <MainTextStyle
                onClick={() =>
                  menuLinkHandler(`/accessory/type?type=foamcannon`)
                }
                beforeW={width < 700 ? `22%` : width < 1400 ? `20%` : ``}
                beforeL={width < 700 ? `39%` : width < 1400 ? `40%` : ``}
              >
                폼캐논(폼랜스)
                <SubTextStyle
                  onClick={() =>
                    menuLinkHandler(`/accessory/type?type=foamcannon`)
                  }
                  marginT={`16px`}
                >
                  베이직 폼 캐논
                </SubTextStyle>
                <SubTextStyle
                  marginB={width < 700 ? `25px` : `40px`}
                  onClick={() =>
                    menuLinkHandler(`/accessory/type?type=foamcannon`)
                  }
                >
                  브라스 폼 캐논
                </SubTextStyle>
              </MainTextStyle>

              <MainTextStyle
                onClick={() =>
                  menuLinkHandler(`/accessory/type?type=foamcannon`)
                }
                beforeW={width < 700 ? `14%` : width < 1400 ? `12%` : `20%`}
                beforeL={width < 700 ? `43%` : width < 1400 ? `44%` : `40%`}
              >
                랜스
                <SubTextStyle
                  onClick={() =>
                    menuLinkHandler(`/accessory/type?type=foamcannon`)
                  }
                  marginT={`16px`}
                >
                  줌 랜스
                </SubTextStyle>
                <SubTextStyle
                  onClick={() =>
                    menuLinkHandler(`/accessory/type?type=foamcannon`)
                  }
                >
                  플렉스 랜스
                </SubTextStyle>
                <SubTextStyle
                  onClick={() =>
                    menuLinkHandler(`/accessory/type?type=foamcannon`)
                  }
                >
                  텔레스코픽 랜스
                </SubTextStyle>
                <SubTextStyle
                  onClick={() =>
                    menuLinkHandler(`/accessory/type?type=foamcannon`)
                  }
                >
                  90˚ 앵글 랜스
                </SubTextStyle>
                <SubTextStyle
                  onClick={() =>
                    menuLinkHandler(`/accessory/type?type=foamcannon`)
                  }
                >
                  135˚ 앵글 랜스
                </SubTextStyle>
                <SubTextStyle
                  onClick={() =>
                    menuLinkHandler(`/accessory/type?type=foamcannon`)
                  }
                  marginB={`0`}
                >
                  고정랜스
                </SubTextStyle>
              </MainTextStyle>
            </Wrapper>
            <Wrapper
              width={width < 800 ? `300px` : width < 1400 ? `360px` : `240px`}
              margin={width < 700 ? `50px 0 0` : ``}
            >
              <Wrapper
                bgColor={Theme.basicTheme_C}
                radius="10px"
                height={width < 700 ? `90px` : `115px`}
                margin={`0 0 30px`}
                cursor={`pointer`}
                onClick={() => menuLinkHandler(`/accessory/type?type=nozzle`)}
              >
                <Image
                  width={`75%`}
                  alt="menu2-image"
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_nozzles-patio.png"
                />
              </Wrapper>
              <MainTextStyle
                onClick={() => menuLinkHandler(`/accessory/type?type=nozzle`)}
                beforeW={width < 700 ? `14%` : width < 1400 ? `12%` : `20%`}
                beforeL={width < 700 ? `43%` : width < 1400 ? `44%` : `40%`}
              >
                노즐
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=nozzle`)}
                  marginT={`16px`}
                >
                  가변 노즐
                </SubTextStyle>
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=nozzle`)}
                >
                  터보(회오리)노즐
                </SubTextStyle>
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=nozzle`)}
                >
                  0˚ 노즐
                </SubTextStyle>
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=nozzle`)}
                >
                  15˚ 노즐
                </SubTextStyle>
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=nozzle`)}
                >
                  25˚ 노즐
                </SubTextStyle>
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=nozzle`)}
                >
                  40˚ 노즐
                </SubTextStyle>
                <SubTextStyle
                  marginB={width < 700 ? `25px` : `40px`}
                  onClick={() => menuLinkHandler(`/accessory/type?type=nozzle`)}
                >
                  60˚ 노즐
                </SubTextStyle>
              </MainTextStyle>

              <MainTextStyle
                onClick={() => menuLinkHandler(`/accessory/type?type=nozzle`)}
                beforeW={width < 700 ? `42%` : width < 1400 ? `40%` : `56%`}
                beforeL={width < 700 ? `29%` : width < 1400 ? `30%` : `22%`}
              >
                파티오 클리너
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=nozzle`)}
                  marginT={`16px`}
                >
                  베이직 파티오 클리너
                </SubTextStyle>
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=nozzle`)}
                  marginB={`0`}
                >
                  프리미엄 파티오 클리너
                </SubTextStyle>
              </MainTextStyle>
            </Wrapper>
            <Wrapper
              width={width < 800 ? `300px` : width < 1400 ? `360px` : `240px`}
              margin={width < 1400 ? `50px 0 0` : ``}
            >
              <Wrapper
                bgColor={Theme.basicTheme_C}
                radius="10px"
                height={width < 700 ? `90px` : `115px`}
                margin={`0 0 30px`}
                cursor={`pointer`}
                onClick={() => menuLinkHandler(`/accessory/type?type=hose`)}
              >
                <Image
                  width={`75%`}
                  alt="menu3-image"
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_hose-brush.png"
                />
              </Wrapper>
              <MainTextStyle
                onClick={() => menuLinkHandler(`/accessory/type?type=hose`)}
                beforeW={width < 700 ? `14%` : width < 1400 ? `12%` : `20%`}
                beforeL={width < 700 ? `43%` : width < 1400 ? `44%` : `40%`}
              >
                호스
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=hose`)}
                  marginT={`16px`}
                >
                  스틸 고압 호스
                </SubTextStyle>
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=hose`)}
                >
                  고압연장 호스
                </SubTextStyle>
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=hose`)}
                >
                  편사 호스
                </SubTextStyle>
                <SubTextStyle
                  marginB={width < 700 ? `25px` : `40px`}
                  onClick={() => menuLinkHandler(`/accessory/type?type=hose`)}
                >
                  파이프 세척 호스
                </SubTextStyle>
              </MainTextStyle>

              <MainTextStyle
                onClick={() => menuLinkHandler(`/accessory/type?type=hose`)}
                beforeW={width < 1400 ? `20%` : ``}
                beforeL={width < 1400 ? `40%` : ``}
              >
                브러시
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=hose`)}
                  marginT={`16px`}
                >
                  사각 브러시
                </SubTextStyle>
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=hose`)}
                >
                  가구 브러시
                </SubTextStyle>
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=hose`)}
                  marginB={`0`}
                >
                  극세사 브러시
                </SubTextStyle>
              </MainTextStyle>
            </Wrapper>
            <Wrapper
              width={width < 800 ? `300px` : width < 1400 ? `360px` : `240px`}
              margin={width < 1400 ? `50px 0 0` : ``}
            >
              <Wrapper
                bgColor={Theme.basicTheme_C}
                radius="10px"
                height={width < 700 ? `90px` : `115px`}
                margin={`0 0 30px`}
                cursor={`pointer`}
                onClick={() => menuLinkHandler(`/accessory/type?type=gun`)}
              >
                <Image
                  width={`75%`}
                  alt="menu4-image"
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_gun-adapter-org.png"
                />
              </Wrapper>
              <MainTextStyle
                onClick={() => menuLinkHandler(`/accessory/type?type=gun`)}
                beforeW={width < 1400 ? `20%` : ``}
                beforeL={width < 1400 ? `40%` : ``}
              >
                고압건
                <SubTextStyle
                  marginB={width < 700 ? `25px` : `40px`}
                  onClick={() => menuLinkHandler(`/accessory/type?type=gun`)}
                  marginT={`16px`}
                >
                  제로포스 고압건
                </SubTextStyle>
              </MainTextStyle>

              <MainTextStyle
                onClick={() => menuLinkHandler(`/accessory/type?type=gun`)}
                beforeW={width < 1400 ? `20%` : ``}
                beforeL={width < 1400 ? `40%` : ``}
              >
                어댑터
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=gun`)}
                  marginT={`16px`}
                >
                  암/수 어댑터
                </SubTextStyle>
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=gun`)}
                >
                  노즐 회전 어댑터
                </SubTextStyle>
                <SubTextStyle
                  marginB={width < 700 ? `25px` : `40px`}
                  onClick={() => menuLinkHandler(`/accessory/type?type=gun`)}
                >
                  AVA to 카쳐 호스 어댑터
                </SubTextStyle>
              </MainTextStyle>

              <MainTextStyle
                onClick={() => menuLinkHandler(`/accessory/type?type=gun`)}
                beforeW={width < 700 ? `26%` : width < 1400 ? `24%` : `38%`}
                beforeL={width < 700 ? `37%` : width < 1400 ? `38%` : `31%`}
              >
                수납도구
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/accessory/type?type=gun`)}
                  marginT={`16px`}
                >
                  수납함
                </SubTextStyle>
              </MainTextStyle>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </MenuWrapperStyle>

      {/** 제품소개 */}
      <MenuWrapperStyle hidden={hiddenProdMenu ? `` : `hidden`}>
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
            <MenuTitleStyle
              fontSize={width < 700 ? `30px` : `50px`}
              color={Theme.white_C}
              cursor={"pointer"}
              onClick={() => menuLinkHandler("/product")}
            >
              제품소개
            </MenuTitleStyle>
            <Wrapper
              width={width < 700 ? `39px` : `65px`}
              height={width < 700 ? `39px` : `65px`}
              bgColor={Theme.basicTheme_C}
              radius={`50%`}
              onClick={menuProdHandler}
              cursor={`pointer`}
            >
              <CloseOutlinedStyle />
            </Wrapper>
          </Wrapper>
          <Wrapper dr={`row`} ju={`flex-start`} al={`flex-start`}>
            <Wrapper
              width={width < 800 ? `300px` : width < 1400 ? `360px` : `250px`}
              al={width < 700 ? `flex-start` : ``}
            >
              <Wrapper
                bgColor={Theme.basicTheme_C}
                radius="10px"
                width={`115px`}
                height={width < 700 ? `90px` : `115px`}
                margin={`0 0 30px`}
                cursor={`pointer`}
                onClick={() => menuLinkHandler(`/product/evolution`)}
              >
                <Image
                  width={`78%`}
                  height={`78%`}
                  alt="menu1-image"
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_evolution.png"
                />
              </Wrapper>
              <MainTextStyle
                beforeW={width < 700 ? `68%` : width < 1400 ? `60%` : `80%`}
                beforeL={width < 700 ? `40%` : width < 1400 ? `20%` : `10%`}
                onClick={() => menuLinkHandler(`/product/evolution`)}
              >
                EVOLUTION SERIES
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/product/evolution`)}
                  marginT={`16px`}
                >
                  AVA EVOLUTION P60
                </SubTextStyle>
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/product/evolution`)}
                >
                  AVA EVOLUTION P70
                </SubTextStyle>
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/product/evolution`)}
                >
                  AVA EVOLUTION P80
                </SubTextStyle>
                <SubTextStyle
                  marginB={width < 700 ? `` : `40px`}
                  onClick={() => menuLinkHandler(`/product/evolution`)}
                >
                  AVA EVOLUTION P90
                </SubTextStyle>
              </MainTextStyle>
            </Wrapper>
            <Wrapper
              width={width < 800 ? `300px` : width < 1400 ? `360px` : `250px`}
              al={width < 700 ? `flex-start` : ``}
              margin={width < 700 ? `50px 0 0` : ``}
            >
              <Wrapper
                bgColor={Theme.basicTheme_C}
                radius="10px"
                height={width < 700 ? `90px` : `115px`}
                margin={`0 0 30px`}
                cursor={`pointer`}
                width={`115px`}
                onClick={() => menuLinkHandler(`/product/master`)}
              >
                <Image
                  width={`78%`}
                  height={`78%`}
                  alt="menu2-image"
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_master.png"
                />
              </Wrapper>
              <MainTextStyle
                onClick={() => menuLinkHandler(`/product/master`)}
                beforeW={width < 700 ? `56%` : width < 1400 ? `50%` : `70%`}
                beforeL={width < 700 ? `15%` : width < 1400 ? `25%` : `15%`}
              >
                MASTER SERIES
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/product/master`)}
                  marginT={`16px`}
                >
                  AVA Master P60
                </SubTextStyle>
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/product/master`)}
                >
                  AVA Master P70
                </SubTextStyle>
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/product/master`)}
                >
                  AVA Master P80
                </SubTextStyle>
              </MainTextStyle>
            </Wrapper>
            <Wrapper
              width={width < 800 ? `300px` : width < 1400 ? `360px` : `250px`}
              al={width < 700 ? `flex-start` : ``}
              margin={width < 1400 ? `50px 0 0` : ``}
            >
              <Wrapper
                bgColor={Theme.basicTheme_C}
                radius="10px"
                width={`115px`}
                height={width < 700 ? `90px` : `115px`}
                margin={`0 0 30px`}
                cursor={`pointer`}
                onClick={() => menuLinkHandler(`/product/go`)}
              >
                <Image
                  width={`78%`}
                  height={`78%`}
                  alt="menu3-image"
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_go.png"
                />
              </Wrapper>
              <MainTextStyle
                onClick={() => menuLinkHandler(`/product/go`)}
                beforeW={width < 700 ? `38%` : width < 1400 ? `31%` : `46%`}
                beforeL={width < 700 ? `68%` : width < 1400 ? `35%` : `27%`}
              >
                GO SERIES
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/product/go`)}
                  marginT={`16px`}
                >
                  AVA GO P40
                </SubTextStyle>
                <SubTextStyle onClick={() => menuLinkHandler(`/product/go`)}>
                  AVA GO P50
                </SubTextStyle>
                <SubTextStyle onClick={() => menuLinkHandler(`/product/go`)}>
                  AVA GO P55
                </SubTextStyle>
              </MainTextStyle>
            </Wrapper>
            <Wrapper
              width={width < 800 ? `300px` : width < 1400 ? `360px` : `250px`}
              al={width < 700 ? `flex-start` : ``}
              margin={width < 1400 ? `50px 0 0` : ``}
            >
              <Wrapper
                bgColor={Theme.basicTheme_C}
                radius="10px"
                height={width < 700 ? `90px` : `115px`}
                margin={`0 0 30px`}
                cursor={`pointer`}
                width={`115px`}
                onClick={() => menuLinkHandler(`/product/smart`)}
              >
                <Image
                  width={`78%`}
                  height={`78%`}
                  alt="menu4-image"
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_smart.png"
                />
              </Wrapper>
              <MainTextStyle
                onClick={() => menuLinkHandler(`/product/smart`)}
                beforeW={width < 700 ? `54%` : width < 1400 ? `50%` : `70%`}
                beforeL={width < 700 ? `15%` : width < 1400 ? `25%` : `15%`}
              >
                SMART SERIES
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/product/smart`)}
                  marginT={`16px`}
                >
                  AVA SMART P50
                </SubTextStyle>
                <SubTextStyle onClick={() => menuLinkHandler(`/product/smart`)}>
                  AVA SMART P55
                </SubTextStyle>
                <SubTextStyle
                  marginB={width < 700 ? `` : `40px`}
                  onClick={() => menuLinkHandler(`/product/smart`)}
                >
                  AVA SMART P60
                </SubTextStyle>
              </MainTextStyle>
            </Wrapper>
            <Wrapper
              width={width < 800 ? `300px` : width < 1400 ? `360px` : `250px`}
              al={width < 700 ? `flex-start` : ``}
              margin={width < 1400 ? `50px 0 0` : ``}
            >
              <Wrapper
                bgColor={Theme.basicTheme_C}
                radius="10px"
                height={width < 700 ? `90px` : `115px`}
                margin={`0 0 30px`}
                cursor={`pointer`}
                width={`115px`}
                onClick={() => menuLinkHandler(`/product/v6`)}
              >
                <Image
                  width={`78%`}
                  height={`78%`}
                  alt="menu4-image"
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/menu/img_v6.png"
                />
              </Wrapper>
              <MainTextStyle
                onClick={() => menuLinkHandler(`/product/v6`)}
                beforeW={width < 700 ? `38%` : width < 1400 ? `31%` : `46%`}
                beforeL={width < 700 ? `68%` : width < 1400 ? `35%` : `27%`}
              >
                V6 SERIES
                <SubTextStyle
                  onClick={() => menuLinkHandler(`/product/v6`)}
                  marginT={`16px`}
                >
                  AVA V6 P70
                </SubTextStyle>
                <SubTextStyle
                  marginB={width < 700 ? `` : `40px`}
                  onClick={() => menuLinkHandler(`/product/v6`)}
                >
                  AVA V6 P90
                </SubTextStyle>
              </MainTextStyle>
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
