import React from "react";
import ClientLayout from "../../components/ClientLayout";
import Head from "next/head";
import wrapper from "../../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import axios from "axios";
import { END } from "redux-saga";
import useWidth from "../../hooks/useWidth";
import {
  Image,
  RsWrapper,
  Text,
  WholeWrapper,
  Wrapper,
} from "../../components/commonComponents";
import Theme from "../../components/Theme";

const Go = () => {
  ////// GLOBAL STATE //////
  ////// HOOKS //////
  const width = useWidth();
  ////// REDUX //////
  ////// USEEFFECT //////
  ////// TOGGLE //////
  ////// HANDLER //////
  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>AVA | GO SERIES</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <Wrapper>
            <Wrapper
              height={width < 700 ? `460px` : `600px`}
              position={`relative`}
              bgImg={`url("https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/banner/img_bg-black.png")`}
            >
              <Wrapper
                height={`100%`}
                position={`absolute`}
                top={`0`}
                left={`0`}
                zIndex={`2`}
              >
                <RsWrapper
                  dr={`row`}
                  ju={`space-between`}
                  al={width < 700 && `flex-start`}
                  padding={width < 700 && `100px 0 0`}
                >
                  <Wrapper
                    width={`auto`}
                    al={`flex-start`}
                    color={Theme.white_C}
                    fontSize={width < 700 ? `16px` : `20px`}
                  >
                    <Text
                      fontSize={
                        width < 900 ? (width < 700 ? `25px` : `30px`) : `48px`
                      }
                      fontWeight={`bold`}
                      color={Theme.basicTheme_C}
                      margin={`0 0 25px`}
                    >
                      AVA GO SERIES
                    </Text>
                    {width < 700 ? (
                      <Text>
                        GO 시리즈는 작은 기계를 최대한으로 활용하기 위해
                        설계되었습니다. 초소형 및 경량형으로 어디든 손쉽게
                        휴대하여 사용하기 간편하며 협소한 공간에서도 보관이
                        가능합니다.
                      </Text>
                    ) : (
                      <>
                        <Text>
                          GO 시리즈는 작은 기계를 최대한으로 활용하기 위해
                          설계되었습니다.
                        </Text>
                        <Text>
                          초소형 및 경량형으로 어디든 손쉽게 휴대하여 사용하기
                          간편하며
                        </Text>
                        <Text>협소한 공간에서도 보관이 가능합니다.</Text>
                      </>
                    )}
                  </Wrapper>
                </RsWrapper>
              </Wrapper>
            </Wrapper>
            <Wrapper
              height={width < 700 ? `130px` : `230px`}
              bgImg={`url("https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/banner/img_bg-green.png")`}
            >
              <RsWrapper al={`flex-end`} ju={`flex-end`} position={`relative`}>
                <Image
                  alt="go"
                  src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/banner/img_prod-go.png`}
                  width={
                    width < 1000 ? (width < 700 ? `340px` : `500px`) : `600px`
                  }
                />
              </RsWrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper
            padding={width < 900 ? `70px 10px 0` : `100px 50px 0`}
            dr={`row`}
            ju={`space-between`}
            wrap={`nowrap`}
            overflow={`auto`}
          >
            <Image
              alt="go image1"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-go/img_1.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
            />
            <Image
              alt="go image2"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-go/img_2.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
              margin={width < 800 && `0 15px`}
            />
            <Image
              alt="go image3"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-go/img_3.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
            />
          </Wrapper>

          <RsWrapper padding={`100px 0`}>
            <Text
              isEng
              fontWeight={`bold`}
              fontSize={width < 900 ? `30px` : `48px`}
              margin={`0 0 40px`}
            >
              GO SERIES
            </Text>
            <Text textAlign={`center`} fontSize={width < 900 ? `16px` : `22px`}>
              GO 시리즈는 작은 기계를 최대한으로 활용하기 위해 설계되었습니다.
            </Text>

            <Text textAlign={`center`} fontSize={width < 900 ? `16px` : `22px`}>
              초소형 및 경량형으로 어디든 손쉽게 휴대하여 사용하기 간편하며
              협소한 공간에서도 보관이 가능합니다.
            </Text>
            <Wrapper
              height={width < 900 ? `300px` : `720px`}
              margin={`60px 0 0`}
            >
              <iframe
                width={`100%`}
                height={`100%`}
                frameborder="0"
                src={`https://www.youtube.com/embed/YkkykpUdrmA`}
              />
            </Wrapper>
          </RsWrapper>
          <Wrapper
            padding={width < 900 ? `0 10px` : `0 50px`}
            dr={`row`}
            ju={`space-between`}
            margin={`0 0 100px`}
            wrap={`nowrap`}
            overflow={`auto`}
          >
            <Image
              alt="go image1"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-go/img_4.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
            />
            <Image
              alt="go image2"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-go/img_5.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
              margin={width < 800 && `0 15px`}
            />
            <Image
              alt="go image3"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-go/img_6.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
            />
          </Wrapper>

          <Wrapper
            height={`100vh`}
            bgImg={`url("https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_bg.png")`}
          >
            <RsWrapper al={`flex-end`}>
              <Wrapper
                width={width < 700 ? `100%` : `560px`}
                padding={`110px 0`}
                bgColor={Theme.black2_C}
                color={Theme.white_C}
                radius={`10px`}
              >
                <Image
                  alt="gragh"
                  src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_pressure-3.png`}
                  width={`175px`}
                />
                <Text
                  fontSize={width < 900 ? `16px` : `22px`}
                  margin={`40px 0 20px`}
                >
                  최대압력
                </Text>
                <Text
                  fontSize={width < 900 ? `25px` : `38px`}
                  fontWeight={`900`}
                >
                  120-140Bar
                </Text>
                <Image
                  alt="gragh"
                  src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_water-3.png`}
                  width={`175px`}
                  margin={`90px 0 0`}
                />
                <Text
                  fontSize={width < 900 ? `16px` : `22px`}
                  margin={`40px 0 20px`}
                >
                  시간당 토출량
                </Text>
                <Text
                  fontSize={width < 900 ? `25px` : `38px`}
                  fontWeight={`900`}
                >
                  390-450L
                </Text>
              </Wrapper>
            </RsWrapper>
          </Wrapper>
          <Wrapper
            bgColor={Theme.black3_C}
            padding={`100px 0`}
            color={Theme.white_C}
            position={`relative`}
          >
            <RsWrapper>
              <Text
                isEng
                fontWeight={`bold`}
                fontSize={width < 900 ? `30px` : `48px`}
                margin={`0 0 40px`}
              >
                GO MODELS
              </Text>
              <Wrapper dr={`row`}>
                <Image
                  alt="go model"
                  src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-go/img_model-eq.png`}
                  width={`275px`}
                />
                <Image
                  alt="go table"
                  src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-go/img_graph.png`}
                  width={width < 800 ? `100%` : `610px`}
                  margin={width < 800 ? `15px 0` : `0 0 0 40px`}
                />
              </Wrapper>

              <Text
                isEsa
                fontSize={width < 900 ? `25px` : `38px`}
                fontWeight={`bold`}
                margin={`100px 0 50px`}
              >
                구성품
              </Text>
              <Wrapper dr={`row`} zIndex={`10`} ju={`flex-start`}>
                <Wrapper
                  width={width < 900 ? `calc(100% / 2)` : `calc(100% / 4)`}
                >
                  <Image
                    alt="구성품"
                    src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_foam.png`}
                    width={`70%`}
                    margin={`42px 0 32px`}
                  />
                  <Text
                    fontSize={width < 900 ? `16px` : `22px`}
                    fontWeight={`bold`}
                  >
                    폼랜스
                  </Text>
                </Wrapper>
                <Wrapper
                  width={width < 900 ? `calc(100% / 2)` : `calc(100% / 4)`}
                >
                  <Image
                    alt="구성품"
                    src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_variable-nozzle.png`}
                    width={`70%`}
                    margin={`42px 0 32px`}
                  />
                  <Text
                    fontSize={width < 900 ? `16px` : `22px`}
                    fontWeight={`bold`}
                  >
                    가변노즐
                  </Text>
                </Wrapper>
                <Wrapper
                  width={width < 900 ? `calc(100% / 2)` : `calc(100% / 4)`}
                >
                  <Image
                    alt="구성품"
                    src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_turbo-nozzle.png`}
                    width={`70%`}
                    margin={`42px 0 32px`}
                  />
                  <Text
                    fontSize={width < 900 ? `16px` : `22px`}
                    fontWeight={`bold`}
                  >
                    터보(회오리)노즐
                  </Text>
                </Wrapper>
                <Wrapper
                  width={width < 900 ? `calc(100% / 2)` : `calc(100% / 4)`}
                >
                  <Image
                    alt="구성품"
                    src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_high+pressure-hose.png`}
                    width={`70%`}
                    margin={`42px 0 32px`}
                  />
                  <Text
                    fontSize={width < 900 ? `16px` : `22px`}
                    fontWeight={`bold`}
                  >
                    고압호스
                  </Text>
                </Wrapper>
                <Wrapper
                  width={width < 900 ? `calc(100% / 2)` : `calc(100% / 4)`}
                >
                  <Image
                    alt="구성품"
                    src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_gun.png`}
                    width={`70%`}
                    margin={`42px 0 32px`}
                  />
                  <Text
                    fontSize={width < 900 ? `16px` : `22px`}
                    fontWeight={`bold`}
                  >
                    세척건
                  </Text>
                </Wrapper>
                <Wrapper
                  width={width < 900 ? `calc(100% / 2)` : `calc(100% / 4)`}
                >
                  <Image
                    alt="구성품"
                    src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_nozzle-connect.png`}
                    width={`70%`}
                    margin={`42px 0 32px`}
                  />
                  <Text
                    fontSize={width < 900 ? `16px` : `22px`}
                    fontWeight={`bold`}
                  >
                    노즐연결대
                  </Text>
                </Wrapper>
                <Wrapper
                  width={width < 900 ? `calc(100% / 2)` : `calc(100% / 4)`}
                >
                  <Image
                    alt="구성품"
                    src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_suction-filter.png`}
                    width={`70%`}
                    margin={`42px 0 32px`}
                  />
                  <Text
                    fontSize={width < 900 ? `16px` : `22px`}
                    fontWeight={`bold`}
                  >
                    흡입필터
                  </Text>
                </Wrapper>

                <Wrapper
                  width={width < 900 ? `calc(100% / 2)` : `calc(100% / 4)`}
                  height={`320px`}
                >
                  <Text
                    fontSize={width < 900 ? `16px` : `22px`}
                    fontWeight={`bold`}
                  >
                    편사호스
                  </Text>
                </Wrapper>
              </Wrapper>
            </RsWrapper>
            <Image
              alt="right pattern"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_right-pattern.png`}
              width={width < 900 ? `250px` : `600px`}
              position={`absolute`}
              right={`0`}
              bottom={`0`}
            />
            <Image
              alt="left pattern"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_leaf-pattern.png`}
              width={width < 900 ? `250px` : `600px`}
              position={`absolute`}
              left={`0`}
              bottom={`320px`}
            />
          </Wrapper>
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

export default Go;
