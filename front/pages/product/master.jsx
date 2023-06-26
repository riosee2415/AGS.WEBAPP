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

const Master = () => {
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
        <title>AVA | MASTER SERIES</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <Wrapper>
            <Wrapper
              height={`600px`}
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
                      AVA MASTER SERIES
                    </Text>
                    {width < 700 ? (
                      <Text>
                        MASTER 시리즈는 내구성과 성능을 위해 오래 지속되는 4기통
                        금속 펌프가 내장되어 있습니다. 확장 가능한 전면 지지대와
                        낮은 무게 중심 그리고 회전 호스릴로 매우 안정적입니다.
                      </Text>
                    ) : (
                      <>
                        <Text>
                          MASTER 시리즈는 내구성과 성능을 위해 오래 지속되는
                        </Text>
                        <Text>
                          4기통 금속 펌프가 내장되어 있습니다. 확장 가능한 전면
                          지지대와
                        </Text>
                        <Text>
                          낮은 무게 중심 그리고 회전 호스릴로 매우 안정적입니다.
                        </Text>
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
                  alt="master"
                  src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/banner/img_prod-master.png`}
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
              alt="master image1"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-master/img_1.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
            />
            <Image
              alt="master image2"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-master/img_2.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
              margin={width < 800 && `0 15px`}
            />
            <Image
              alt="master image3"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-master/img_3.png`}
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
              MASTER SERIES
            </Text>
            <Text textAlign={`center`} fontSize={width < 900 ? `16px` : `22px`}>
              MASTER 시리즈는 다양한 수상경력으로 AVA에서 가장 자신있는
              시리즈입니다.
            </Text>
            {width < 700 ? (
              <Text
                textAlign={`center`}
                fontSize={width < 900 ? `16px` : `22px`}
              >
                사용자 친화성, 효율성 및 디자인에 중점을 두었으며 내구성과
                성능을 위해 오래 지속되는 4기통 금속 펌프가 내장되어 있습니다.
              </Text>
            ) : (
              <>
                <Text
                  textAlign={`center`}
                  fontSize={width < 900 ? `16px` : `22px`}
                >
                  사용자 친화성, 효율성 및 디자인에 중점을 두었으며 내구성과
                  성능을 위해
                </Text>
                <Text
                  textAlign={`center`}
                  fontSize={width < 900 ? `16px` : `22px`}
                >
                  오래 지속되는 4기통 금속 펌프가 내장되어 있습니다.
                </Text>
              </>
            )}

            <Text textAlign={`center`} fontSize={width < 900 ? `16px` : `22px`}>
              확장 가능한 전면 지지대와 낮은 무게 중심 그리고 회전 호스릴로 매우
              안정적입니다.
            </Text>
            <Wrapper
              height={width < 900 ? `300px` : `720px`}
              margin={`60px 0 0`}
            >
              <iframe
                width={`100%`}
                height={`100%`}
                frameborder="0"
                src={`https://www.youtube.com/embed/67SPujQ4EzU`}
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
              alt="master image1"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-master/img_4.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
            />
            <Image
              alt="master image2"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-master/img_5.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
              margin={width < 800 && `0 15px`}
            />
            <Image
              alt="master image3"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-master/img_6.png`}
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
                  src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_pressure-2.png`}
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
                  145-180Bar
                </Text>
                <Image
                  alt="gragh"
                  src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_water-2.png`}
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
                  500-600L
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
                MASTER MODELS
              </Text>
              <Wrapper dr={`row`}>
                <Image
                  alt="master model"
                  src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-master/img_model-eq.png`}
                  width={`275px`}
                />
                <Image
                  alt="master table"
                  src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-master/img_graph.png`}
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
                    src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_steel-relnforced-hose.png`}
                    width={`70%`}
                    margin={`42px 0 32px`}
                  />
                  <Text
                    fontSize={width < 900 ? `16px` : `22px`}
                    fontWeight={`bold`}
                  >
                    스틸고압호스
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
                >
                  <Image
                    alt="구성품"
                    src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_15nozzle.png`}
                    width={`70%`}
                    margin={`42px 0 32px`}
                  />
                  <Text
                    fontSize={width < 900 ? `16px` : `22px`}
                    fontWeight={`bold`}
                  >
                    15˚ 노즐
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

          <Wrapper
            padding={width < 900 ? `60px 10px 50px` : `100px 50px 50px`}
            dr={`row`}
            ju={`space-between`}
            wrap={`nowrap`}
            overflow={`auto`}
          >
            <Image
              alt="master image1"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-master/img_7.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
            />
            <Image
              alt="master image2"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-master/img_8.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
              margin={width < 800 && `0 15px`}
            />
            <Image
              alt="master image3"
              src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-master/img_9.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
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

export default Master;
