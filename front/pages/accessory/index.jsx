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
        <title>AVA | 악세사리</title>
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
                    <Text>AVA ACCESSORY</Text>
                    <Text
                      fontSize={
                        width < 900 ? (width < 700 ? `25px` : `30px`) : `48px`
                      }
                      fontWeight={`bold`}
                      color={Theme.basicTheme_C}
                      margin={`0 0 25px`}
                    >
                      악세사리
                    </Text>

                    <Text>악세사리의 설명이 들어갈 곳입니다.</Text>
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
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/banner/img_acc-main.png`}
                  width={
                    width < 1000 ? (width < 700 ? `100%` : `700px`) : `850px`
                  }
                />
              </RsWrapper>
            </Wrapper>
          </Wrapper>

          {/* 폼 캐논*/}
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
                폼 캐논
              </Text>
              <CustomBtn margin={width < 900 ? `10px 0 0` : `0`}>
                <Text padding={width < 900 ? `0 20px 0 0` : `0 40px 0 0`}>
                  폼캐논
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
            </Wrapper>
            <Text
              fontSize={width < 800 ? `14px` : `22px`}
              fontWeight={`bold`}
              margin={width < 800 ? `0 0 30px` : `0 0 68px`}
            >
              AVA 폼 캐논은 모든 표면에 도포 및 지속이 가능한 두꺼운 폼을
              만들어냅니다. 고품질의 스테인리스 스틸 매쉬 필터를 사용하여 세제,
              물, 공기를 혼합합니다. 대부분의 1리터 병으로 결합이 가능합니다.
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
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-foam-lance/img_foam-1.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-foam-lance/img_foam-2.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-foam-lance/img_foam-3.png`}
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>

          {/* 랜스  */}
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
                랜스
              </Text>
              <CustomBtn margin={width < 900 ? `10px 0 0` : `0`}>
                <Text padding={width < 900 ? `0 20px 0 0` : `0 40px 0 0`}>
                  랜스
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
            </Wrapper>
            <Text
              fontSize={width < 800 ? `14px` : `22px`}
              fontWeight={`bold`}
              margin={width < 800 ? `0 0 30px` : `0 0 68px`}
            >
              고객님의 니즈에 맞게 다양한 종류의 랜스를 제공합니다. 작업하려는
              곳의 높이와 각도가 다르기 때문에 용도에 맞는 랜스를 사용해보세요!
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
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-foam-lance/img_lance-1.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-foam-lance/img_lance-2.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-foam-lance/img_lance-3.png`}
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>

          {/* 노즐 */}
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
                노즐
              </Text>
              <CustomBtn margin={width < 900 ? `10px 0 0` : `0`}>
                <Text padding={width < 900 ? `0 20px 0 0` : `0 40px 0 0`}>
                  노즐
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
            </Wrapper>
            <Text
              fontSize={width < 800 ? `14px` : `22px`}
              fontWeight={`bold`}
              margin={width < 800 ? `0 0 30px` : `0 0 68px`}
            >
              압력, 폭, 작업거리의 완벽한 조합을 찾기 위해 수많은 테스트를
              진행하고 작업 상황에 맞는 노즐을 개발하였습니다. 특수 노즐은
              펌프에서 세척하는 표면으로 적절한 양의 힘을 전달할 때 가장
              효과적입니다.
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
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-nozzle-patio/img_nozzle-4.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-nozzle-patio/img_nozzle-5.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-nozzle-patio/img_nozzle-6.png`}
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>

          {/* 파티오 클리너 */}
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
                파티오 클리너
              </Text>
              <CustomBtn margin={width < 900 ? `10px 0 0` : `0`}>
                <Text padding={width < 900 ? `0 20px 0 0` : `0 40px 0 0`}>
                  파티오 클리너
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
            </Wrapper>
            <Text
              fontSize={width < 800 ? `14px` : `22px`}
              fontWeight={`bold`}
              margin={width < 800 ? `0 0 30px` : `0 0 68px`}
            >
              AVA의 파티오 클리너는 나무 데크 뿐만 아니라 딱딱한 표면에 매우
              효율적입니다.
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
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-nozzle-patio/img_patio-1.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-nozzle-patio/img_patio-2.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-nozzle-patio/img_patio-3.png`}
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>

          {/* 호스 */}
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
                호스
              </Text>
              <CustomBtn margin={width < 900 ? `10px 0 0` : `0`}>
                <Text padding={width < 900 ? `0 20px 0 0` : `0 40px 0 0`}>
                  호스
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
            </Wrapper>
            <Text
              fontSize={width < 800 ? `14px` : `22px`}
              fontWeight={`bold`}
              margin={width < 800 ? `0 0 30px` : `0 0 68px`}
            >
              AVA에서 제작된 4가지의 호스는 높은 품질과 유연성 그리고 긴 수명을
              보장합니다. 다양한 호스로 모든 고압세척기를 보다 편리하게
              사용해보세요!
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
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-hose-brush/img_hose-1.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-hose-brush/img_hose-2.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-hose-brush/img_hose-3.png`}
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>

          {/* 브러시 */}
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
                브러시
              </Text>
              <CustomBtn margin={width < 900 ? `10px 0 0` : `0`}>
                <Text padding={width < 900 ? `0 20px 0 0` : `0 40px 0 0`}>
                  브러시
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
            </Wrapper>
            <Text
              fontSize={width < 800 ? `14px` : `22px`}
              fontWeight={`bold`}
              margin={width < 800 ? `0 0 30px` : `0 0 68px`}
            >
              사각 브러시는 대부분의 표면에 적합하며 쉽게 사용할 수 있습니다.
              가구 브러시는 실외의 작은 면적의 표면을 청소하는 곳에 적합합니다.
              극세사 브러시는 창문, 유리 등깨지기 쉬운 표면에 적합합니다.
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
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-hose-brush/img_brush-1.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-hose-brush/img_brush-2.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-hose-brush/img_brush-3.png`}
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>

          {/* 고압건 */}
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
                고압건
              </Text>
              <CustomBtn margin={width < 900 ? `10px 0 0` : `0`}>
                <Text padding={width < 900 ? `0 20px 0 0` : `0 40px 0 0`}>
                  고압건
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
            </Wrapper>
            <Text
              fontSize={width < 800 ? `14px` : `22px`}
              fontWeight={`bold`}
              margin={width < 800 ? `0 0 30px` : `0 0 68px`}
            >
              고객님들이 고압세척기를 사용하면서 느낀 불편함은 고압건 레버를
              잡을 때 많은 힘이 들어간다는 것이었습니다. 이러한 고객님들의
              피드백을 바탕으로 Zero-Force 방아쇠를 개발하여 레버를 잡을 때 많은
              힘이 들어가지 않고 손이 피로해지는 것을 방지했습니다.
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
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-gun-adapter-org/img_gun-1.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-gun-adapter-org/img_gun-2.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-gun-adapter-org/img_gun-3.png`}
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>

          {/* 어댑터 */}
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
                어댑터
              </Text>
              <CustomBtn margin={width < 900 ? `10px 0 0` : `0`}>
                <Text padding={width < 900 ? `0 20px 0 0` : `0 40px 0 0`}>
                  어댑터
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
            </Wrapper>
            <Text
              fontSize={width < 800 ? `14px` : `22px`}
              fontWeight={`bold`}
              margin={width < 800 ? `0 0 30px` : `0 0 68px`}
            >
              고압건용 어댑터로 카처와 아바 부속을 사용하기 위해 필요합니다.
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
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-gun-adapter-org/img_adapter-1.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-gun-adapter-org/img_adapter-2.png`}
                />
                <Image
                  width={`32%`}
                  alt={`product_img`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-gun-adapter-org/img_adapter-3.png`}
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
