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
  SpanText,
  Text,
  WholeWrapper,
  Wrapper,
} from "../../components/commonComponents";
import Theme from "../../components/Theme";
import { ArrowRightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Link from "next/link";

const CustomBtn = styled(Wrapper)`
  cursor: pointer;
  width: auto;
  padding: 10px 12px;
  border-radius: 30px;
  flex-direction: row;
  font-size: 20px;
  background-color: ${(props) => props.theme.black2_C};
  color: ${(props) => props.theme.white_C};
  transition: 0.5s;

  &:hover {
    color: ${(props) => props.theme.basicTheme_C};

    & > div > p {
      transform: translateX(6px);
      transition: 0.5s;
    }
  }

  @media (max-width: 900px) {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

const Index = () => {
  ////// GLOBAL STATE //////
  const width = useWidth();
  ////// HOOKS //////
  ////// REDUX //////
  ////// USEEFFECT //////
  ////// TOGGLE //////
  ////// HANDLER //////
  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>AVA | 제품소개</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <Wrapper>
            <Wrapper
              height={width < 700 ? `460px` : `600px`}
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
                      <SpanText color={Theme.white_C}>AVA </SpanText>
                      고압세척기
                    </Text>
                    {width < 700 ? (
                      <Text>
                        AVA 고압세척기는 고객분들의 만족도를 위하여 최고의
                        기술로 제작되었습니다. AVA는 모든 세척 작업을 쉽게 할 수
                        있도록 친화적인 악세서리를 제공하며 AVA의 고압세척기는
                        최고의 내구성으로 오랜 수명을 자랑합니다. AVA 제품을
                        선택해 주셔서 감사합니다.
                      </Text>
                    ) : (
                      <>
                        <Text>
                          AVA 고압세척기는 고객분들의 만족도를 위하여 최고의
                          기술로
                        </Text>
                        <Text>
                          제작되었습니다. AVA는 모든 세척 작업을 쉽게 할 수
                          있도록
                        </Text>
                        <Text>
                          친화적인 악세서리를 제공하며 AVA의 고압세척기는 최고의
                          내구성으로
                        </Text>
                        <Text>
                          오랜 수명을 자랑합니다. AVA 제품을 선택해 주셔서
                          감사합니다.
                        </Text>
                        <Text></Text>
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
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/banner/img_prod-main.png`}
                  width={
                    width < 1000 ? (width < 700 ? `100%` : `700px`) : `850px`
                  }
                />
              </RsWrapper>
            </Wrapper>
          </Wrapper>

          {/* EVOLUTION SERIES */}
          <Wrapper
            padding={width < 800 ? `50px 10px 0` : `100px 50px 0`}
            al={`flex-start`}
          >
            <Wrapper
              margin={width < 800 ? `0 0 20px` : `0 0 34px`}
              ju={`flex-start`}
              dr={`row`}
            >
              <Text
                width={width < 800 ? `100%` : `auto`}
                fontWeight={`bold`}
                fontSize={width < 800 ? `28px` : `48px`}
                lineHeight={`1`}
                margin={`0 36px 0 0`}
              >
                EVOLUTION SERIES
              </Text>
              <Link href={`/product/evolution`}>
                <a>
                  <CustomBtn margin={width < 900 ? `10px 0 0` : `0`}>
                    <Text padding={width < 900 ? `0 20px 0 0` : `0 40px 0 0`}>
                      Evolution series
                    </Text>
                    <Wrapper
                      bgColor={Theme.basicTheme_C}
                      width={width < 900 ? `26px` : `36px`}
                      height={width < 900 ? `26px` : `36px`}
                      radius={`50%`}
                    >
                      <Text
                        textAling={`right`}
                        padding={`10px`}
                        color={Theme.black2_C}
                        fontSize={width < 900 ? `12px` : `16px`}
                      >
                        <ArrowRightOutlined />
                      </Text>
                    </Wrapper>
                  </CustomBtn>
                </a>
              </Link>
            </Wrapper>
            <Text
              fontSize={width < 800 ? `14px` : `22px`}
              fontWeight={`bold`}
              margin={width < 800 ? `0 0 30px` : `0 0 68px`}
            >
              EVOLUTION 시리즈 제품은 내구성과 성능을 위해 오래 지속 가능한
              4&#38;6기통 실린더 금속펌프로 제작되었으며 회전 호스릴에 최대
              20m까지 손쉽게 보관가능합니다.
            </Text>

            <Wrapper overflow={width < 700 ? `scroll` : `auto`}>
              <Wrapper
                width={width < 700 ? `1000px` : `auto`}
                dr={`row`}
                ju={`space-between`}
              >
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-evolution/img_4.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-evolution/img_5.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-evolution/img_6.png`}
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>

          {/* MASTER SERIES */}
          <Wrapper
            padding={width < 800 ? `50px 10px 0` : `100px 50px 0`}
            al={`flex-start`}
          >
            <Wrapper
              margin={width < 800 ? `0 0 20px` : `0 0 34px`}
              ju={`flex-start`}
              dr={`row`}
            >
              <Text
                width={width < 800 ? `100%` : `auto`}
                fontWeight={`bold`}
                fontSize={width < 800 ? `28px` : `48px`}
                lineHeight={`1`}
                margin={`0 36px 0 0`}
              >
                MASTER SERIES
              </Text>
              <Link href={`/product/master`}>
                <a>
                  <CustomBtn margin={width < 900 ? `10px 0 0` : `0`}>
                    <Text padding={width < 900 ? `0 20px 0 0` : `0 40px 0 0`}>
                      Master series
                    </Text>
                    <Wrapper
                      bgColor={Theme.basicTheme_C}
                      width={width < 900 ? `26px` : `36px`}
                      height={width < 900 ? `26px` : `36px`}
                      radius={`50%`}
                    >
                      <Text
                        textAling={`right`}
                        padding={`10px`}
                        color={Theme.black2_C}
                        fontSize={width < 900 ? `12px` : `16px`}
                      >
                        <ArrowRightOutlined />
                      </Text>
                    </Wrapper>
                  </CustomBtn>
                </a>
              </Link>
            </Wrapper>
            <Text
              fontSize={width < 800 ? `14px` : `22px`}
              fontWeight={`bold`}
              margin={width < 800 ? `0 0 30px` : `0 0 68px`}
            >
              MASTER 시리즈는 내구성과 성능을 위해 오래 지속되는 4기통 금속
              펌프가 내장되어 있습니다. 확장 가능한 전면 지지대와 낮은 무게 중심
              그리고 회전 호스릴로 매우 안정적입니다.
            </Text>

            <Wrapper overflow={width < 700 ? `scroll` : `auto`}>
              <Wrapper
                width={width < 700 ? `1000px` : `auto`}
                dr={`row`}
                ju={`space-between`}
              >
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-master/img_2.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-main/img_master.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-master/img_6.png`}
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>

          {/* GO SERIES */}
          <Wrapper
            padding={width < 800 ? `50px 10px 0` : `100px 50px 0`}
            al={`flex-start`}
          >
            <Wrapper
              margin={width < 800 ? `0 0 20px` : `0 0 34px`}
              ju={`flex-start`}
              dr={`row`}
            >
              <Text
                width={width < 800 ? `100%` : `auto`}
                fontWeight={`bold`}
                fontSize={width < 800 ? `28px` : `48px`}
                lineHeight={`1`}
                margin={`0 36px 0 0`}
              >
                GO SERIES
              </Text>
              <Link href={`/product/go`}>
                <a>
                  <CustomBtn margin={width < 900 ? `10px 0 0` : `0`}>
                    <Text padding={width < 900 ? `0 20px 0 0` : `0 40px 0 0`}>
                      Go series
                    </Text>
                    <Wrapper
                      bgColor={Theme.basicTheme_C}
                      width={width < 900 ? `26px` : `36px`}
                      height={width < 900 ? `26px` : `36px`}
                      radius={`50%`}
                    >
                      <Text
                        textAling={`right`}
                        padding={`10px`}
                        color={Theme.black2_C}
                        fontSize={width < 900 ? `12px` : `16px`}
                      >
                        <ArrowRightOutlined />
                      </Text>
                    </Wrapper>
                  </CustomBtn>
                </a>
              </Link>
            </Wrapper>
            <Text
              fontSize={width < 800 ? `14px` : `22px`}
              fontWeight={`bold`}
              margin={width < 800 ? `0 0 30px` : `0 0 68px`}
            >
              GO 시리즈는 작은 기계를 최대한으로 활용하기 위해 설계되었습니다.
              초소형 및 경량형으로 어디든 손쉽게 휴대하여 사용하기 간편하며
              협소한 공간에서도 보관이 가능합니다.
            </Text>

            <Wrapper overflow={width < 700 ? `scroll` : `auto`}>
              <Wrapper
                width={width < 700 ? `1000px` : `auto`}
                dr={`row`}
                ju={`space-between`}
              >
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-go/img_1.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-go/img_2.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-go/img_3.png`}
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>

          {/* SMART SERIES */}
          <Wrapper
            padding={width < 800 ? `50px 10px 0` : `100px 50px 0`}
            al={`flex-start`}
          >
            <Wrapper
              margin={width < 800 ? `0 0 20px` : `0 0 34px`}
              ju={`flex-start`}
              dr={`row`}
            >
              <Text
                width={width < 800 ? `100%` : `auto`}
                fontWeight={`bold`}
                fontSize={width < 800 ? `28px` : `48px`}
                lineHeight={`1`}
                margin={`0 36px 0 0`}
              >
                SMART SERIES
              </Text>
              <Link href={`/product/smart`}>
                <a>
                  <CustomBtn margin={width < 900 ? `10px 0 0` : `0`}>
                    <Text padding={width < 900 ? `0 20px 0 0` : `0 40px 0 0`}>
                      Smart series
                    </Text>
                    <Wrapper
                      bgColor={Theme.basicTheme_C}
                      width={width < 900 ? `26px` : `36px`}
                      height={width < 900 ? `26px` : `36px`}
                      radius={`50%`}
                    >
                      <Text
                        textAling={`right`}
                        padding={`10px`}
                        color={Theme.black2_C}
                        fontSize={width < 900 ? `12px` : `16px`}
                      >
                        <ArrowRightOutlined />
                      </Text>
                    </Wrapper>
                  </CustomBtn>
                </a>
              </Link>
            </Wrapper>
            <Text
              fontSize={width < 800 ? `14px` : `22px`}
              fontWeight={`bold`}
              margin={width < 800 ? `0 0 30px` : `0 0 68px`}
            >
              SMART 시리즈는 상위버전인 MASTER 시리즈의 몇 가지 기능을
              사용합니다. 제품의 오랜 수명을 위하여 금속 펌프, 팁 방지 설계 및
              강철로 강화된 호스를 갖추고 있습니다. 일반적으로 고가의 기계에서
              볼 수 있는 모든 기능을 갖춘 시리즈입니다.
            </Text>

            <Wrapper overflow={width < 700 ? `scroll` : `auto`}>
              <Wrapper
                width={width < 700 ? `1000px` : `auto`}
                dr={`row`}
                ju={`space-between`}
              >
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-smart/img_1.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-smart/img_2.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-smart/img_3.png`}
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>

          {/* V6 SERIES */}
          <Wrapper
            padding={width < 800 ? `50px 10px 0` : `100px 50px 0`}
            al={`flex-start`}
          >
            <Wrapper
              margin={width < 800 ? `0 0 20px` : `0 0 34px`}
              ju={`flex-start`}
              dr={`row`}
            >
              <Text
                width={width < 800 ? `100%` : `auto`}
                fontWeight={`bold`}
                fontSize={width < 800 ? `28px` : `48px`}
                lineHeight={`1`}
                margin={`0 36px 0 0`}
              >
                V6 SERIES
              </Text>
              <Link href={`/product/v6`}>
                <a>
                  <CustomBtn margin={width < 900 ? `10px 0 0` : `0`}>
                    <Text padding={width < 900 ? `0 20px 0 0` : `0 40px 0 0`}>
                      V6 series
                    </Text>
                    <Wrapper
                      bgColor={Theme.basicTheme_C}
                      width={width < 900 ? `26px` : `36px`}
                      height={width < 900 ? `26px` : `36px`}
                      radius={`50%`}
                    >
                      <Text
                        textAling={`right`}
                        padding={`10px`}
                        color={Theme.black2_C}
                        fontSize={width < 900 ? `12px` : `16px`}
                      >
                        <ArrowRightOutlined />
                      </Text>
                    </Wrapper>
                  </CustomBtn>
                </a>
              </Link>
            </Wrapper>
            <Text
              fontSize={width < 800 ? `14px` : `22px`}
              fontWeight={`bold`}
              margin={width < 800 ? `0 0 30px` : `0 0 68px`}
            >
              V6 시리즈는 자동차 매니아층과 퀄리티에 민감한분들을 위해
              설계되었습니다. 고유량 6기통 금속 펌프는 소음과 진동이 적고 벽에
              고정하여 사용가능합니다.
            </Text>

            <Wrapper overflow={width < 700 ? `scroll` : `auto`}>
              <Wrapper
                width={width < 700 ? `1000px` : `auto`}
                dr={`row`}
                ju={`space-between`}
              >
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-v6/img_1.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-v6/img_2.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-v6/img_3.png`}
                />
              </Wrapper>
            </Wrapper>
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

export default Index;
