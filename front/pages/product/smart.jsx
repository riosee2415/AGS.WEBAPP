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

const Smart = () => {
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
        <title>AVA | SMART SERIES</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <Wrapper>
            <Wrapper
              height={`600px`}
              position={`relative`}
              bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/banner/img_bg-black.png")`}
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
                      AVA SMART SERIES
                    </Text>
                    {width < 700 ? (
                      <Text>
                        SMART 시리즈는 상위버전인 MASTER 시리즈의 몇 가지 기능을
                        사용합니다. 제품의 오랜 수명을 위하여 금속 펌프, 팁 방지
                        설계 및 강철로 강화된 호스를 갖추고 있습니다. 일반적으로
                        고가의 기계에서 볼 수 있는 모든 기능을 갖춘
                        시리즈입니다.
                      </Text>
                    ) : (
                      <>
                        <Text>
                          SMART 시리즈는 상위버전인 MASTER 시리즈의 몇 가지
                          기능을 사용합니다.
                        </Text>
                        <Text>
                          제품의 오랜 수명을 위하여 금속 펌프, 팁 방지 설계 및
                          강철로 강화된 호스를 갖추고
                        </Text>
                        <Text>
                          있습니다. 일반적으로 고가의 기계에서 볼 수 있는 모든
                          기능을 갖춘 시리즈입니다.
                        </Text>
                      </>
                    )}
                  </Wrapper>
                </RsWrapper>
              </Wrapper>
            </Wrapper>
            <Wrapper
              height={width < 700 ? `130px` : `230px`}
              bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/banner/img_bg-green.png")`}
            >
              <RsWrapper al={`flex-end`} ju={`flex-end`} position={`relative`}>
                <Image
                  alt="smart"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/banner/img_prod-smart.png`}
                  width={
                    width < 1000 ? (width < 700 ? `240px` : `300px`) : `380px`
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
              alt="smart image1"
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-smart/img_1.png`}
              width={`calc(100% / 2.05)`}
              minWidth={`300px`}
            />
            <Image
              alt="smart image2"
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-smart/img_2.png`}
              width={`calc(100% / 2.05)`}
              minWidth={`300px`}
              margin={width < 800 && `0 15px`}
            />
          </Wrapper>

          <RsWrapper padding={`100px 0`}>
            <Text
              isEng
              fontWeight={`bold`}
              fontSize={width < 900 ? `30px` : `48px`}
              margin={`0 0 40px`}
            >
              SMART SERIES
            </Text>

            {width < 700 ? (
              <Text fontSize={width < 900 ? `16px` : `22px`}>
                SMART 시리즈는 상위버전인 MASTER 시리즈의 몇 가지 기능을
                사용합니다. 제품의 오랜 수명을 위하여 금속 펌프, 팁 방지 설계 및
                강철로 강화된 호스를 갖추고 있습니다. 일반적으로 고가의 기계에서
                볼 수 있는 모든 기능을 갖춘 시리즈입니다.
              </Text>
            ) : (
              <>
                <Text fontSize={width < 900 ? `16px` : `22px`}>
                  SMART 시리즈는 상위버전인 MASTER 시리즈의 몇 가지 기능을
                  사용합니다. 제품의 오랜 수명을 위하여 금속 펌프, 팁 방지
                </Text>
                <Text fontSize={width < 900 ? `16px` : `22px`}>
                  설계 및 강철로 강화된 호스를 갖추고 있습니다. 일반적으로
                  고가의 기계에서 볼 수 있는 모든 기능을 갖춘 시리즈입니다.
                </Text>
              </>
            )}

            <Wrapper
              height={width < 900 ? `300px` : `720px`}
              margin={`60px 0 0`}
            >
              <iframe
                width={`100%`}
                height={`100%`}
                frameborder="0"
                src={`https://www.youtube.com/embed/Ht7ywGUgzP0`}
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
              alt="smart image1"
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-smart/img_3.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
            />
            <Image
              alt="smart image2"
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-smart/img_4.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
              margin={width < 800 && `0 15px`}
            />
            <Image
              alt="smart image3"
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-smart/img_5.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
            />
          </Wrapper>

          <Wrapper
            height={`100vh`}
            bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_bg.png")`}
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
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_pressure-3.png`}
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
                  130-150Bar
                </Text>
                <Image
                  alt="gragh"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_water-3.png`}
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
                  420-500L
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
                SMART MODELS
              </Text>
              <Wrapper dr={`row`}>
                <Image
                  alt="smart model"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-smart/img_model-eq.png`}
                  width={`275px`}
                />
                <Image
                  alt="smart table"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-smart/img_graph.png`}
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
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_foam.png`}
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
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_variable-nozzle.png`}
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
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_turbo-nozzle.png`}
                    width={`70%`}
                    margin={`42px 0 32px`}
                  />
                  <Text
                    fontSize={width < 900 ? `16px` : `22px`}
                    fontWeight={`bold`}
                  >
                    터보노즐
                  </Text>
                </Wrapper>
                <Wrapper
                  width={width < 900 ? `calc(100% / 2)` : `calc(100% / 4)`}
                >
                  <Image
                    alt="구성품"
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_high+pressure-hose.png`}
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
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_gun.png`}
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
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_nozzle-connect.png`}
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
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_suction-filter.png`}
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
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_right-pattern.png`}
              width={width < 900 ? `250px` : `600px`}
              position={`absolute`}
              right={`0`}
              bottom={`0`}
            />
            <Image
              alt="left pattern"
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_leaf-pattern.png`}
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

export default Smart;
