import React, { useCallback, useState } from "react";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import ClientLayout from "../components/ClientLayout";
import axios from "axios";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import {
  Image,
  WholeWrapper,
  Wrapper,
  Text,
  RsWrapper,
} from "../components/commonComponents";
import useWidth from "../hooks/useWidth";
import Theme from "../components/Theme";
import styled from "styled-components";
import Head from "next/head";
import Popup from "../components/popup/popup";
import Mainslider from "../components/slide/MainSlider";
import ToastEditorComponent from "../components/editor/ToastEditorComponent";
import UseInfoSlider from "../components/slide/UseInfoSlider";

const MainText = styled(Text)`
  position: absolute;
  font-size: 150px;
  font-weight: 600;
  color: ${(props) => props.theme.white_C};

  @media (max-width: 1280px) {
    font-size: 120px;
  }

  @media (max-width: 1100px) {
    font-size: 90px;
  }

  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

const AbsoluteInfoWrapper = styled(Wrapper)`
  width: 1350px;

  position: absolute;
  z-index: 1;
  padding: 98px 90px 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${(props) => props.theme.basicTheme_C};
  bottom: -96px;
  left: 50;
  border-radius: 10px;
  @media (max-width: 1500px) {
    width: 1350px;
  }
  @media (max-width: 1350px) {
    width: 1280px;
  }
  @media (max-width: 1280px) {
    width: 1100px;
  }
  @media (max-width: 1100px) {
    padding: 58px 50px 60px;
    width: 900px;
  }
  @media (max-width: 900px) {
    width: 800px;
  }
  @media (max-width: 800px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    padding: 30px 0;
    width: 65%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const HoverTab = styled(Text)`
  cursor: pointer;
  font-size: 32px;
  position: relative;
  line-height: 1.43;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: ${(props) => (props.isActive ? `85%` : `0`)};
    left: 0;
    height: 2px;
    background-color: ${(props) => props.theme.basicTheme_C};
    transition: 0.5s;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
  }

  &:hover {
    &::before {
      opacity: 1;
      width: 85%;
    }
  }

  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const HoverButton = styled(Wrapper)`
  cursor: pointer;
  flex-direction: row;
  justify-content: flex-start;
  margin: 80px 0 0;

  & p {
    position: relative;
  }

  & p::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: ${(props) => (props.isActive ? `85%` : `0`)};
    left: 0;
    height: 2px;
    background-color: ${(props) => props.theme.basicTheme_C};
    transition: 0.5s;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
  }

  &:hover {
    & p::before {
      opacity: 1;
      width: 100%;
    }

    & .arrowBtn {
      background-color: ${(props) => props.theme.white_C};
    }
  }
`;

const HoverArrowButton = styled(Wrapper)`
  width: 51px;
  height: 51px;
  background-color: ${(props) => props.theme.basicTheme_C};
  cursor: pointer;
  margin: 0 0 0 15px;

  border: 1px solid ${(props) => props.theme.basicTheme_C};
  border-radius: 100%;

  @media (max-width: 1100px) {
    width: 41px;
    height: 41px;
  }

  @media (max-width: 800px) {
    width: 31px;
    height: 31px;
  }
`;

const HoverImageWrapper = styled(Wrapper)`
  cursor: pointer;

  & div {
    opacity: 0 !important;
  }
  &:hover {
    & div {
      opacity: 0.75 !important;
    }
  }
`;

const Home = ({}) => {
  ////// GLOBAL STATE //////

  ////// HOOKS //////
  const width = useWidth();

  const [prodTypeTab, setProdTypeTab] = useState(`EVOLUTION`);

  ////// REDUX //////
  ////// USEEFFECT //////
  ////// TOGGLE //////
  ////// HANDLER //////

  const prodTypeTabHandler = useCallback(
    (type) => {
      setProdTypeTab(type);
    },
    [prodTypeTab]
  );

  ////// DATAVIEW //////

  const productTypeArr = [
    {
      thumbnail:
        "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_evolution-eq.png",
      name: "EVOLUTION",
      content: `EVOLUTION 설명이 들어갈 곳입니다. EVOLUTION 설명이 들어갈 곳입니다. EVOLUTION 설명이 들어갈 곳입니다. EVOLUTION 설명이 들어갈 곳입니다. EVOLUTION 설명이 들어갈 곳입니다. `,
      buttonContent: `EVOLUTION 시리즈 자세히 보러가기`,
    },
    {
      thumbnail:
        "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_master-eq.png",
      name: "MASTER",
      content: `MASTER 설명이 들어갈 곳입니다. MASTER 설명이 들어갈 곳입니다. MASTER 설명이 들어갈 곳입니다. MASTER 설명이 들어갈 곳입니다. MASTER 설명이 들어갈 곳입니다. `,
      buttonContent: `MASTER 시리즈 자세히 보러가기`,
    },
    {
      thumbnail:
        "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_smart-eq.png",
      name: "SMART",
      content: `SMART 설명이 들어갈 곳입니다. SMART 설명이 들어갈 곳입니다. SMART 설명이 들어갈 곳입니다. SMART 설명이 들어갈 곳입니다. SMART 설명이 들어갈 곳입니다. `,
      buttonContent: `SMART 시리즈 자세히 보러가기`,
    },
    {
      thumbnail:
        "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_go-eq.png",
      name: "GO",
      content: `GO 설명이 들어갈 곳입니다. GO 설명이 들어갈 곳입니다. GO 설명이 들어갈 곳입니다. GO 설명이 들어갈 곳입니다. GO 설명이 들어갈 곳입니다. `,
      buttonContent: `GO 시리즈 자세히 보러가기`,
    },
    {
      thumbnail:
        "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_v6-eq.png",
      name: "V6",
      content: `V6 설명이 들어갈 곳입니다. V6 설명이 들어갈 곳입니다. V6 설명이 들어갈 곳입니다. V6 설명이 들어갈 곳입니다. V6 설명이 들어갈 곳입니다. `,
      buttonContent: `V6 시리즈 자세히 보러가기`,
    },
  ];

  const useInfoArr = [
    {
      thumbnail:
        "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_1.png",
      content: `가변노즐과 고압건은 옥외 가구에\n손상없이 사용 가능합니다.\n여름을 대비해 준비해보세요!`,
    },
    {
      thumbnail:
        "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_2.png",
      content: `파이프 호스는 손쉽게 배수관 및 파이프를\n청소할 수 있도록 해줍니다.\n배관 역류를 방지하기 위해\n이 제품으로 손쉽게 배관 청소를 해보세요!`,
    },
    {
      thumbnail:
        "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_3.png",
      content: `25˚ 노즐은 녹조, 흙, 먼지 등을 깔끔하게\n청소하면서 표면을 부드럽게 해줍니다.\n노즐을 사용하여 먼지를 제거해보세요!`,
    },
    {
      thumbnail:
        "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_4.png",
      content: `극세사 브러시는 흙과 먼지를\n제거하는 동시에 부드럽게 브러시를\n이동시켜줍니다. 이 제품은 스크래치 발생을\n줄여주며 파손 위험이 있는 유리 또는\n차에 사용해보세요!`,
    },
  ];

  return (
    <>
      <Head>
        <title>AVA</title>
      </Head>

      <ClientLayout>
        <WholeWrapper>
          {/* MAIN BANNER(VIDEO) START */}
          <Wrapper position={`relative`}>
            <Image
              height={`100vh`}
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_main-ban.png`}
              alt={`video`}
            />
            <MainText isEng>MADE TO LAST</MainText>
          </Wrapper>
          {/* MAIN BANNER(VIDEO) END */}

          {/* INFO START */}
          <Wrapper
            bgColor={Theme.darkGrey_C}
            padding={width < 800 ? `50px 0` : `184px 0`}
            color={Theme.white_C}
          >
            <RsWrapper dr={`row`}>
              <Wrapper width={width < 800 ? `100%` : `50%`} al={`flex-start`}>
                <Image
                  width={width < 1280 ? `280px` : `380px`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_innovation.png`}
                />
                <Text
                  fontSize={width < 800 ? `22px` : `42px`}
                  fontWeight={`500`}
                  margin={width < 800 ? `30px 0` : `76px 0 28px`}
                  isGong
                >
                  AVA 고압 세척기
                </Text>

                <Text
                  width={width < 800 ? `100%` : `600px`}
                  fontSize={width < 1280 ? `16px` : `18px`}
                >
                  AVA 고압 세척기에 대한 설명이 들어갈 곳입니다. 설명이 길게
                  들어가게 된다면, AVA고압 세척기에 대한 설명이 들어갈 곳입니다.
                  설명이 길게 들어가게 된다면, AVA 고압 세척기에 대한 설명이
                  들어갈 곳입니다. 설명이 길게 들어가게 된다면,
                </Text>

                <HoverButton>
                  <Text
                    fontSize={
                      width < 1100 ? (width < 800 ? `16px` : `20px`) : `30px`
                    }
                    fontWeight={`bold`}
                  >
                    고압세척기 시리즈 보러가기
                  </Text>
                  <HoverArrowButton className="arrowBtn">
                    <Image
                      width={width < 1100 ? `20px` : `24px`}
                      src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_arrow.png`}
                      alt={`arrow`}
                    />
                  </HoverArrowButton>
                </HoverButton>
              </Wrapper>
              <Wrapper width={width < 800 ? `100%` : `50%`} al={`flex-end`}>
                <Image
                  width={width < 1280 ? `100%` : `580px`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_pressure-washers.png`}
                />
              </Wrapper>
            </RsWrapper>
          </Wrapper>
          {/* INFO END */}

          {/* PRODUCT INFO START */}

          <Wrapper
            position={`relative`}
            padding={width < 800 ? `50px 0 450px` : `98px 0 370px`}
          >
            <RsWrapper>
              <Wrapper
                al={`flex-start`}
                margin={`0 0 24px`}
                fontSize={width < 800 ? `24px` : `42px`}
                fontWeight={`500`}
              >
                <Text isGong>제품설명</Text>
              </Wrapper>

              <Wrapper dr={`row`} ju={`space-between`}>
                <HoverImageWrapper width={`48%`} position={`relative`}>
                  <Image
                    width={`100%`}
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_prod-pressure-washers.png`}
                    alt={`productImage1`}
                  />
                  <Wrapper
                    position={`absolute`}
                    height={`100%`}
                    bgColor={Theme.basicTheme_C}
                    opacity={`0.75`}
                  />
                  <Wrapper position={`absolute`} height={`100%`}>
                    <Text
                      fontSize={width < 700 ? `18px` : `34px`}
                      color={Theme.white_C}
                      isGong
                    >
                      고압세척기
                    </Text>
                  </Wrapper>
                </HoverImageWrapper>
                <HoverImageWrapper width={`48%`} position={`relative`}>
                  <Image
                    width={`100%`}
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_prod-acc.png`}
                    alt={`productImage2`}
                  />
                  <Wrapper
                    position={`absolute`}
                    height={`100%`}
                    bgColor={Theme.basicTheme_C}
                    opacity={`0.75`}
                  />
                  <Wrapper position={`absolute`} height={`100%`}>
                    <Text
                      fontSize={width < 700 ? `18px` : `34px`}
                      color={Theme.white_C}
                      isGong
                    >
                      악세사리
                    </Text>
                  </Wrapper>
                </HoverImageWrapper>
              </Wrapper>

              {/* ABSOLUTE INFO START */}
              <AbsoluteInfoWrapper>
                <Wrapper
                  width={width < 800 ? `100%` : `calc(100% / 3)`}
                  al={`flex-start`}
                  margin={`0 0 20px`}
                >
                  <Text
                    fontSize={
                      width < 1100 ? (width < 800 ? `18px` : `28px`) : `32px`
                    }
                    fontWieght={`500`}
                    isGong
                  >
                    뛰어난 성능
                  </Text>
                  <Wrapper
                    fontSize={
                      width < 1100 ? (width < 800 ? `14px` : `16px`) : `18px`
                    }
                    fontWeight={`500`}
                    al={`flex-start`}
                    margin={width < 800 ? `10px 0 0` : `20px 0 0`}
                  >
                    <Wrapper dr={`row`} ju={`flex-start`}>
                      <Image
                        width={`15px`}
                        margin={width < 700 ? `0 5px 0 0` : `0 15px 0 0`}
                        src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/icon_hexagon.png`}
                        alt={`iconHexagon`}
                      />
                      <Text>높은 분사력</Text>
                    </Wrapper>
                    <Wrapper dr={`row`} ju={`flex-start`}>
                      <Image
                        width={`15px`}
                        margin={
                          width < 700 ? `10px 5px 10px 0` : `10px 15px 10px 0`
                        }
                        src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/icon_hexagon.png`}
                        alt={`iconHexagon`}
                      />
                      <Text>뛰어난 토출량</Text>
                    </Wrapper>
                    <Wrapper dr={`row`} ju={`flex-start`}>
                      <Image
                        width={`15px`}
                        margin={width < 700 ? `0 5px 0 0` : `0 15px 0 0`}
                        src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/icon_hexagon.png`}
                        alt={`iconHexagon`}
                      />
                      <Text>압도적인 사용시간</Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  width={width < 800 ? `100%` : `calc(100% / 3)`}
                  al={`flex-start`}
                  margin={`0 0 20px`}
                >
                  <Text
                    fontSize={
                      width < 1100 ? (width < 800 ? `18px` : `28px`) : `32px`
                    }
                    fontWieght={`500`}
                    isGong
                  >
                    인체공학적인 디자인
                  </Text>
                  <Wrapper
                    fontSize={
                      width < 1100 ? (width < 800 ? `14px` : `16px`) : `18px`
                    }
                    fontWeight={`500`}
                    al={`flex-start`}
                    margin={width < 800 ? `10px 0 0` : `20px 0 0`}
                  >
                    <Wrapper dr={`row`} ju={`flex-start`}>
                      <Image
                        width={`15px`}
                        margin={width < 700 ? `0 5px 0 0` : `0 15px 0 0`}
                        src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/icon_hexagon.png`}
                        alt={`iconHexagon`}
                      />
                      <Text>Zero-Force 방아쇠로 피로감 감소</Text>
                    </Wrapper>
                    <Wrapper dr={`row`} ju={`flex-start`}>
                      <Image
                        width={`15px`}
                        margin={
                          width < 700 ? `10px 5px 10px 0` : `10px 15px 10px 0`
                        }
                        src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/icon_hexagon.png`}
                        alt={`iconHexagon`}
                      />
                      <Text>직관적인 체결 부위</Text>
                    </Wrapper>
                    <Wrapper dr={`row`} ju={`flex-start`}>
                      <Image
                        width={`15px`}
                        margin={width < 700 ? `0 5px 0 0` : `0 15px 0 0`}
                        src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/icon_hexagon.png`}
                        alt={`iconHexagon`}
                      />
                      <Text>세견되고 고급진 디자인 &amp; 릴호스</Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  width={width < 800 ? `100%` : `calc(100% / 3)`}
                  al={`flex-start`}
                  margin={`0 0 20px`}
                >
                  <Text
                    fontSize={
                      width < 1100 ? (width < 800 ? `18px` : `28px`) : `32px`
                    }
                    fontWieght={`500`}
                    isGong
                  >
                    강력한 내구성
                  </Text>
                  <Wrapper
                    fontSize={
                      width < 1100 ? (width < 800 ? `14px` : `16px`) : `18px`
                    }
                    fontWeight={`500`}
                    al={`flex-start`}
                    margin={width < 800 ? `10px 0 0` : `20px 0 0`}
                  >
                    <Wrapper dr={`row`} ju={`flex-start`}>
                      <Image
                        width={`15px`}
                        margin={width < 700 ? `0 5px 0 0` : `0 15px 0 0`}
                        src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/icon_hexagon.png`}
                        alt={`iconHexagon`}
                      />
                      <Text>오래 사용 가능한 4실린더 금속 펌프</Text>
                    </Wrapper>
                    <Wrapper dr={`row`} ju={`flex-start`}>
                      <Image
                        width={`15px`}
                        margin={
                          width < 700 ? `10px 5px 10px 0` : `10px 15px 10px 0`
                        }
                        src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/icon_hexagon.png`}
                        alt={`iconHexagon`}
                      />
                      <Text>플렉시블 스틸 고압 호스</Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </AbsoluteInfoWrapper>
              {/* ABSOLUTE INFO END */}
            </RsWrapper>
          </Wrapper>
          {/* PRODUCT INFO END */}

          {/* PRODUCT TYPE INFO START */}
          <Wrapper
            position={`relative`}
            padding={width < 800 ? `120px 0` : `198px 0 320px`}
            bgColor={Theme.black3_C}
          >
            <RsWrapper dr={`row`} ju={`space-between`} al={`flex-start`}>
              <Wrapper
                width={width < 800 ? `100%` : `50%`}
                color={Theme.white_C}
                al={`flex-start`}
              >
                <Text
                  fontSize={width < 800 ? `24px` : `50px`}
                  fontWeight={`500`}
                  isGong
                >
                  AVA 고압 세척기
                </Text>

                <Wrapper
                  dr={`row`}
                  ju={`flex-start`}
                  margin={width < 800 ? `30px 0` : `68px 0 30px`}
                >
                  {productTypeArr.map((data, idx) => {
                    return (
                      <HoverTab
                        key={idx}
                        margin={
                          idx === 4
                            ? `0`
                            : width < 800
                            ? `0 20px 0 0`
                            : `0 30px 0 0`
                        }
                        isActive={data.name === prodTypeTab}
                        onClick={() => prodTypeTabHandler(data.name)}
                        isEng
                      >
                        {data.name}
                      </HoverTab>
                    );
                  })}
                </Wrapper>

                <Wrapper
                  minHeight={width < 800 ? `50px` : `116px`}
                  ju={`flex-start`}
                >
                  <Text
                    width={`100%`}
                    fontSize={width < 800 ? `14px` : `22px`}
                    lineHeight={`1.3`}
                  >
                    {
                      productTypeArr.find((data) => data.name === prodTypeTab)
                        .content
                    }
                  </Text>
                </Wrapper>

                <HoverButton>
                  <Text
                    fontSize={
                      width < 1100 ? (width < 800 ? `16px` : `20px`) : `30px`
                    }
                    fontWeight={`bold`}
                  >
                    {
                      productTypeArr.find((data) => data.name === prodTypeTab)
                        .buttonContent
                    }
                  </Text>
                  <HoverArrowButton className="arrowBtn">
                    <Image
                      width={width < 1100 ? `20px` : `24px`}
                      src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_arrow.png`}
                      alt={`arrow`}
                    />
                  </HoverArrowButton>
                </HoverButton>
              </Wrapper>
              <Wrapper width={width < 800 ? `100%` : `50%`}>
                <Image
                  width={`100%`}
                  src={
                    productTypeArr.find((data) => data.name === prodTypeTab)
                      .thumbnail
                  }
                />
              </Wrapper>
            </RsWrapper>

            <Image
              bottom={`0`}
              right={`0`}
              width={`31%`}
              position={`absolute`}
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_right-pattern.png`}
              alt={`backPattern`}
            />

            <Image
              bottom={`0`}
              right={`0`}
              width={`100%`}
              position={`absolute`}
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_water-drop.png`}
              alt={`backWater`}
            />
          </Wrapper>
          {/* PRODUCT TYPE INFO END */}

          {/* USE INFO START */}
          <RsWrapper padding={width < 800 ? `50px 0` : `114px 0 50px`}>
            <Wrapper al={`flex-start`}>
              <Text
                fontSize={width < 800 ? `24px` : `48px`}
                fontWeight={`500`}
                isGong
              >
                고압 세척기 및 악세사리 사용용도
              </Text>
            </Wrapper>

            <Wrapper
              dr={`row`}
              al={`flex-start`}
              margin={width < 800 ? `35px 0 0` : `70px 0 0`}
            >
              <UseInfoSlider useInfoArr={useInfoArr} />
            </Wrapper>
            <Text
              textAlign={`center`}
              margin={width < 800 ? `0` : `70px 0 0`}
              fontSize={width < 800 ? `16px` : `22px`}
              fontWeight={`600`}
            >
              {width < 1100
                ? width < 800
                  ? `고압세척기는 다양한 용도를 가지고 있는데 AVA는\n모든 세척작업을 쉽게 할 수 있도록 친화적인 악세서리를\n제공하며 AVA의 고압세척기는 최고의 내구성으로\n오랜 수명을 자랑합니다.`
                  : `고압세척기는 다양한 용도를 가지고 있는데 AVA는 모든 세척작업을 쉽게 할 수 있도록\n친화적인 악세서리를 제공하며 AVA의 고압세척기는\n최고의 내구성으로 오랜 수명을 자랑합니다.`
                : `고압세척기는 다양한 용도를 가지고 있는데 AVA는 모든 세척작업을 쉽게 할 수 있도록 친화적인 악세서리를 제공하며\nAVA의 고압세척기는 최고의 내구성으로 오랜 수명을 자랑합니다.`}
            </Text>

            <Text
              margin={`24px 0 0`}
              fontSize={width < 800 ? `16px` : `22px`}
              fontWeight={`600`}
            >
              AVA 제품을 선택해주셔서 감사합니다.
            </Text>
          </RsWrapper>
          {/* USE INFO END */}
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
export default Home;
