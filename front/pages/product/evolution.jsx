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
import EvolutionSlider from "../../components/slide/EvolutionSlider";

const Evolution = () => {
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
        <title>AVA | EVOLUTION SERIES</title>
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
                      AVA EVOLUTION SERIES
                    </Text>
                    {width < 700 ? (
                      <Text>
                        EVOLUTION 시리즈 제품은 내구성과 성능을 위해 오래 지속
                        가능한 4&#38;6기통 실린더 금속펌프로 제작되었으며 회전
                        호스릴에 최대 20m까지 손쉽게 보관가능합니다.
                      </Text>
                    ) : (
                      <>
                        <Text>
                          EVOLUTION 시리즈 제품은 내구성과 성능을 위해 오래 지속
                          가능한
                        </Text>
                        <Text>
                          4&#38;6기통 실린더 금속펌프로 제작되었으며 회전
                          호스릴에
                        </Text>
                        <Text>최대 20m까지 손쉽게 보관가능합니다.</Text>
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
                  alt="evolution"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/banner/img_prod-evolution.png`}
                  width={
                    width < 1000 ? (width < 700 ? `240px` : `300px`) : `380px`
                  }
                />
              </RsWrapper>
            </Wrapper>
          </Wrapper>

          <RsWrapper padding={`100px 0`}>
            <Text
              isEng
              fontWeight={`bold`}
              fontSize={width < 900 ? `30px` : `48px`}
              margin={`0 0 40px`}
            >
              EVOLUTION SERIES
            </Text>
            <Text textAlign={`center`} fontSize={width < 900 ? `16px` : `22px`}>
              AVA 팀의 철저한 경험과 함께 수년간의 고객 피드백이 고압세척기
              시장에 변화를 가져왔습니다.
            </Text>
            <Text textAlign={`center`} fontSize={width < 900 ? `16px` : `22px`}>
              EVOLUTION 시리즈는 AVA V4 및 V6 올 메탈 펌프를 함께 사용할 수
              있으며, 호스릴은 최대 20M까지 보관할 수 있습니다.
            </Text>
            <Text textAlign={`center`} fontSize={width < 900 ? `16px` : `22px`}>
              사용시 주의 사항은 전원 케이블을 끝까지 뺀 상태에서 사용해주세요.
            </Text>
            <Wrapper
              height={width < 900 ? `300px` : `720px`}
              margin={`60px 0 0`}
            >
              <iframe
                width={`100%`}
                height={`100%`}
                frameborder="0"
                src={`https://www.youtube.com/embed/AfyIFsKZdg0`}
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
              alt="evolution image1"
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-evolution/img_1.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
            />
            <Image
              alt="evolution image2"
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-evolution/img_2.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
              margin={width < 800 && `0 15px`}
            />
            <Image
              alt="evolution image3"
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-evolution/img_3.png`}
              width={`calc(100% / 3.1)`}
              minWidth={`300px`}
            />
          </Wrapper>

          <Wrapper
            height={`100vh`}
            bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-evolution/img_bg.png")`}
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
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_pressure-1.png`}
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
                  145-160Bar
                </Text>
                <Image
                  alt="gragh"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_water-1.png`}
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
                  500-730L
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
                EVOLUTION MODELS
              </Text>
              <Wrapper dr={`row`}>
                <Image
                  alt="evolution model"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-evolution/img_model-eq.png`}
                  width={`275px`}
                />
                <Image
                  alt="evolution table"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-evolution/img_graph.png`}
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
              <Wrapper dr={`row`} zIndex={`10`}>
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
                    터보(회오리)노즐
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

          <Wrapper padding={width < 900 ? `80px 25px` : `100px 50px`}>
            <EvolutionSlider />
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

export default Evolution;
