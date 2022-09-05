import React from "react";
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

const MainText = styled(Text)`
  position: absolute;
  font-size: 150px;
  font-weight: 600;
  color: ${(props) => props.theme.white_C};
`;

const AbsoluteInfoWrapper = styled(Wrapper)`
  width: 1350px;

  position: absolute;
  padding: 98px 90px 100px;
  flex-direction: row;
  justify-content: space-between;
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
    width: 900px;
  }
  @media (max-width: 900px) {
    width: 800px;
  }
  @media (max-width: 800px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Home = ({}) => {
  const width = useWidth();
  ////// GLOBAL STATE //////

  ////// HOOKS //////
  ////// REDUX //////
  ////// USEEFFECT //////
  ////// TOGGLE //////
  ////// HANDLER //////
  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>AGS</title>
      </Head>

      <ClientLayout>
        <WholeWrapper>
          {/* MAIN BANNER(VIDEO) START */}
          <Wrapper position={`relative`}>
            <Image
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_main-ban.png`}
              alt={`video`}
            />
            <MainText>MADE TO LAST</MainText>
          </Wrapper>
          {/* MAIN BANNER(VIDEO) END */}

          {/* INFO START */}
          <Wrapper
            bgColor={Theme.darkGrey_C}
            padding={`184px 0`}
            color={Theme.white_C}
          >
            <RsWrapper dr={`row`}>
              <Wrapper width={`50%`} al={`flex-start`}>
                <Image
                  width={`380px`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_innovation.png`}
                />
                <Text
                  fontSize={`42px`}
                  fontWeight={`500`}
                  margin={`76px 0 28px`}
                >
                  AVA 고압 세척기
                </Text>

                <Text width={`600px`} fontSize={`18px`}>
                  AVA 고압 세척기에 대한 설명이 들어갈 곳입니다. 설명이 길게
                  들어가게 된다면, AVA고압 세척기에 대한 설명이 들어갈 곳입니다.
                  설명이 길게 들어가게 된다면, AVA 고압 세척기에 대한 설명이
                  들어갈 곳입니다. 설명이 길게 들어가게 된다면,
                </Text>

                <Wrapper dr={`row`} ju={`flex-start`} margin={`80px 0 0 `}>
                  <Text fontSize={`30px`} fontWeight={`bold`}>
                    고압세척기 시리즈 보러가기
                  </Text>
                </Wrapper>
              </Wrapper>
              <Wrapper width={`50%`} al={`flex-end`}>
                <Image
                  width={`580px`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_pressure-washers.png`}
                />
              </Wrapper>
            </RsWrapper>
          </Wrapper>
          {/* INFO END */}

          {/* PRODUCT INFO START */}

          <Wrapper position={`relative`} padding={`98px 0 370px`}>
            <RsWrapper>
              <Wrapper
                al={`flex-start`}
                margin={`0 0 24px`}
                fontSize={`42px`}
                fontWeight={`500`}
              >
                <Text>제품설명</Text>
              </Wrapper>

              <Wrapper dr={`row`} ju={`space-between`}>
                <Wrapper width={`48%`}>
                  <Image
                    width={`100%`}
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_prod-pressure-washers.png`}
                    alt={`productImage1`}
                  />
                </Wrapper>
                <Wrapper width={`48%`}>
                  <Image
                    width={`100%`}
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/main/img_prod-acc.png`}
                    alt={`productImage2`}
                  />
                </Wrapper>
              </Wrapper>

              {/* ABSOLUTE INFO START */}
              <AbsoluteInfoWrapper>
                <Wrapper width={`calc(100% / 3)`} al={`flex-start`}>
                  <Text fontSize={`32px`} fontWieght={`500`}>
                    뛰어난 성능
                  </Text>
                  <Wrapper
                    fontSize={`18px`}
                    fontWeight={`500`}
                    al={`flex-start`}
                    margin={`20px 0 0`}
                  >
                    <Text>● 높은 분사력</Text>
                    <Text>● 뛰어난 토출량</Text>
                    <Text>● 압도적인 사용시간</Text>
                  </Wrapper>
                </Wrapper>
                <Wrapper width={`calc(100% / 3)`} al={`flex-start`}>
                  <Text fontSize={`32px`} fontWieght={`500`}>
                    인체공학적인 디자인
                  </Text>
                  <Wrapper
                    fontSize={`18px`}
                    fontWeight={`500`}
                    al={`flex-start`}
                    margin={`20px 0 0`}
                  >
                    <Text>● Zero-Force 방아쇠로 피로감 감소</Text>
                    <Text>● 직관적인 체결 부위</Text>
                    <Text>● 세견되고 고급진 디자인 &amp; 릴호스</Text>
                  </Wrapper>
                </Wrapper>
                <Wrapper width={`calc(100% / 3)`} al={`flex-start`}>
                  <Text fontSize={`32px`} fontWieght={`500`}>
                    강력한 내구성
                  </Text>
                  <Wrapper
                    fontSize={`18px`}
                    fontWeight={`500`}
                    al={`flex-start`}
                    margin={`20px 0 0`}
                  >
                    <Text>● 오래 사용 가능한 4실린더 금속 펌프</Text>
                    <Text>● 플렉시블 스틸 고압 호스</Text>
                  </Wrapper>
                </Wrapper>
              </AbsoluteInfoWrapper>
              {/* ABSOLUTE INFO END */}
            </RsWrapper>
          </Wrapper>
          {/* PRODUCT INFO END */}

          <Wrapper padding={`198px 0 320px`} bgColor={Theme.black3_C}></Wrapper>
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
