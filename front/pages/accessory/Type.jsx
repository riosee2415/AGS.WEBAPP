import React, { useEffect } from "react";
import ClientLayout from "../../components/ClientLayout";
import { useDispatch, useSelector } from "react-redux";

import wrapper from "../../store/configureStore";
import { END } from "redux-saga";
import useWidth from "../../hooks/useWidth";
import useInput from "../../hooks/useInput";
import Theme from "../../components/Theme";
import styled from "styled-components";
import axios from "axios";

import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import { SEO_LIST_REQUEST } from "../../reducers/seo";

import Head from "next/head";
import {
  Image,
  RsWrapper,
  WholeWrapper,
  Wrapper,
  Text,
} from "../../components/commonComponents";
import { useRouter } from "next/router";

const Type = () => {
  ////// GLOBAL STATE //////
  const width = useWidth();

  ////// HOOKS //////
  ////// REDUX //////
  const router = useRouter();
  ////// USEEFFECT //////
  ////// TOGGLE //////
  ////// HANDLER //////
  ////// DATAVIEW //////

  const accDataArr = [
    // 1
    {
      type: "foamcannon",
      title: "폼 캐논",
      description: [
        {
          description:
            "AVA 폼 캐논은 모든 표면에 도포 및 지속이 가능한 두꺼운 폼을 만들어냅니다.",
        },
        {
          description:
            "고품질의 스테인리스 스틸 매쉬 필터를 사용하여 세제, 물, 공기를 혼합합니다.",
        },
        {
          description: "대부분의 1리터 병으로 결합이 가능합니다.",
        },
      ],
      thumbnail:
        "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/banner/img_acc-foam-cannon.png",
      youtube: "",
      images: [
        {
          image:
            "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-foam-lance/img_foam-1.png",
        },
        {
          image:
            "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-foam-lance/img_foam-2.png",
        },
        {
          image:
            "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-foam-lance/img_foam-3.png",
        },
      ],
      products: [
        {
          type: "1",
          prodImg:
            "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-foam-lance/img_foam-basic.png",
          prodTitle: "베이직 폼 캐논",
          prodDescription:
            "시중에 판매되는 기본 폼캐논의 분포량은 2-7%까지 조절이 가능하였으나 AVA 폼캐논은 최대 1-20% 사이로 조절이 가능합니다. 기본 28mm 직경의 병을 결합하여 사용할 수 있습니다. 노즐 부분에 잠금기능이 있는데 하나는 폼 발포가 잠긴 상태에서 물만 도포가 되며, 웃는 모양으로 변경 시 폼이 도포가 됩니다.",
        },
        {
          type: "2",
          prodImg:
            "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/acc-foam-lance/img_foam-brass.png",
          prodTitle: "브라스 폼 캐논",
          prodDescription:
            "AVA 브라스 폼캐논은 황동으로 제작된 본체와 스테인리스스틸 노즐이 제공되며 베이직 폼 캐논보다는 내구성이 뛰어나고 긴 수명을 자랑합니다. 분포량은 최대 1-5% 사이로 조절이 가능하며 노즐 분사 각도 및 세제량 또한 미세하게 조절 가능합니다.",
        },
      ],
    },
    // 2
    {
      type: "foamcannon",
      title: "랜스",
      description: [
        {
          description: "고객님의 요구에 맞게 다양한 종류의 랜스를 제공합니다.",
        },
        {
          description:
            "다양한 길이, 다양한 각도로 작업이 힘든 현장에서도 손쉽게 작업이 가능합니다.",
        },
      ],
      thumbnail: "",
      images: [{ image: "" }, { image: "" }, { image: "" }],
      products: [
        {
          type: "1",
          prodImg: "",
          prodTitle: "줌 랜스",
          prodDescription:
            "가장 기본적인 랜스로 63cm에서 96cm까지 길이 조절이 가능하며 낮은곳이든 높은곳이든 쉽게 작업이 가능합니다.",
        },
        {
          type: "2",
          prodImg: "",
          prodTitle: "플랙스 렌스",
          prodDescription:
            "유니크한 제품으로 자동차 루프, 하부 그리고 바퀴 안쪽까지 세척이 가능할 정도로 여러가지 방법으로 사용할 수 있습니다. 메인 손잡이를 돌려 상하 방향을 조절해주고 측면의 손잡이로 각도 조절과 고정 기능까지 있어 손쉽게 사용할 수 있습니다. 측면 손잡이는 탈부착이 가능하여 작업하기 편한쪽에 결합하여 사용할 수 있습니다.",
        },
        {
          type: "3",
          prodImg: "",
          prodTitle: "텔레스코픽 랜스",
          prodDescription:
            "이 제품은 최대 4M까지 확장이 가능하며 사용자의 키에 따라 더 높게도 사용이 가능합니다. 헤드 부분의 각도를 조절할 수 있으며 주택이나, 건물, 차량 등 5M정도의 높이에 쉽게 사용 가능합니다. 랜스를 이용하여 세제를 도포할 때 폼캐논 또는 랜스에 내장되어 있는 세제도포 시스템으로 가능합니다.",
        },
        {
          type: "4",
          prodImg: "",
          prodTitle: "90˚ 앵글 랜스",
          prodDescription:
            "고압건과 랜스로 접근이 힘든 위치에 작업이 가능하며 차 하부를 청소할 때 적합합니다.",
        },
        {
          type: "5",
          prodImg: "",
          prodTitle: "135˚ 앵글 랜스",
          prodDescription:
            "고압건과 랜스로 접근이 힘든 위치에 작업이 가능하며 사다리 없이 지붕 빗물 받이 등을 청소하는데 적합합니다.",
        },
        {
          type: "6",
          prodImg: "",
          prodTitle: "고정 랜스",
          prodDescription:
            "이 제품은 35cm와 60cm로 각각 구성되어 있습니다. 사용하려는 위치에 맞는 길이로 고정하여 사용하는데 적합합니다.",
        },
      ],
    },
    // 3
    {
      type: "nozzle",
      title: "노즐",
      description: [
        {
          description: "압력, 폭, 작업거리의 완벽한 조합을 찾기 위해",
        },
        {
          description:
            "수많은 테스트를 진행하고 작업 상황에 맞는 노즐을 개발하였습니다.",
        },
        {
          description:
            "특수 노즐은 펌프에서 세척하는 표면으로 적절한 양의 힘을 전달할 때 가장 효과적입니다.",
        },
      ],
      thumbnail: "",
      subTitle:
        "AVA의 모든 노즐에는 어떤 제품과 호환이 되는지 표시가 되어있습니다.",
      subTitle2: "초록색: P30-P60 모델, 파란색: P70-P80 모델, 보라색: P90 모델",
      images: [
        { image: "" },
        { image: "" },
        { image: "" },
        { image: "" },
        { image: "" },
        { image: "" },
      ],
      products: [
        {
          type: "1",
          prodImg: "",
          prodTitle: "가변노즐",
          prodDescription:
            "가변노즐은 고객분들께서 가장 선호하는 제품으로 20˚, 40˚, 60˚ 3가지 모드로 분사각도를 조절할 수 있습니다. 다양한 압력을 필요로 하는 작업에 적합하며 손쉽게 그립을 돌려 각도를 조절할 수 있습니다.",
        },
        {
          type: "2",
          prodImg: "",
          prodTitle: "터보노즐",
          prodDescription:
            "터보노즐은 노즐 중 가장 강력한 힘을 가진 노즐입니다. 0˚ 노즐과 20˚ 노즐의 힘을 합친 정도의 세기로 압력이 너무 강해 가까운 거리에서 직접 분사 시 손상이 있을 수 있습니다. 차량에 직접 분사 시 도색 부분이 벗겨질 수 있으며 유리, 나무, 도자기 등 강도가 높지 않은 곳에 사용 시 파손 위험이 있으니 주의하셔야 합니다.",
        },
        {
          type: "3",
          prodImg: "",
          prodTitle: "0˚ 노즐",
          prodDescription:
            "0˚ 노즐은 콘크리트 및 단단한 금속과 같은 매우 단단한 표면에서 곰팡이, 타르, 접착제, 기름, 나무 수액, 마른 껌 등과 같은 거친 얼룩을 제거하는데 효과적입니다. 나무 또는 부드러운 표면에 사용 시 심각한 손상을 유발할 수 있습니다.",
        },
        {
          type: "4",
          prodImg: "",
          prodTitle: "15˚ 노즐 ",
          prodDescription:
            "15˚ 노즐은 페인팅, 얼룩, 먼지, 녹, 페인트 또는 곰팡이를 제거하기에 적합합니다. 먼 거리에서 주의해서 사용해야하며 농기구, 트럭 등에 묻은 진흙을 제거하기에 효과적입니다.",
        },
        {
          type: "5",
          prodImg: "",
          prodTitle: "25˚ 노즐",
          prodDescription:
            "25˚ 노즐은 일반적인 표면을 청소하기에 적합합니다. 흔히 가정에서 볼수있는 다용도 노즐로 이끼, 진흙, 나뭇잎 등을 제거하기에 효과적입니다. 데크, 진입로, (비닐 사이딩), 자동차, 보트, 및 옥외가구에 사용할 수 있습니다.",
        },
        {
          type: "6",
          prodImg: "",
          prodTitle: "40˚ 노즐",
          prodDescription:
            "40˚ 노즐은 창문, 블라인드, 화분, 자동차 등 손상되기 쉬운 표면을 청소하기에 적합하며 폼랜스 사용 후 거품제거에도 효과적입니다.",
        },
        {
          type: "7",
          prodImg: "",
          prodTitle: "60˚ 노즐",
          prodDescription:
            "60˚ 노즐은 표면을 매우 부드럽게 처리하는 스프레이 효과가 있습니다. 목재 또는 페인트 표면이 손상되지 않기 때문에 가정에서 사용하기에 효과적입니다.",
        },
      ],
    },
    // 4
    {
      type: "nozzle",
      title: "파티오클리너",
      description: [
        {
          description:
            "AVA의 파티오 클리너는 나무 데크 뿐만 아니라 딱딱한 표면에 매우 효율적입니다.",
        },
      ],
      thumbnail: "",
      images: [{ image: "" }, { image: "" }, { image: "" }],
      products: [
        {
          type: "1",
          prodImg: "",
          prodTitle: "베이직 파티오 클리너",
          prodDescription:
            "베이직 파티오 클리너는 딱딱한 표면에 효율적인 클리너입니다. 40˚ 황동 노즐과 스핀들 2개가 포함되어 있어 성능이 높고 긴 수명을 자랑합니다.",
        },
        {
          type: "2",
          prodImg: "",
          prodTitle: "프리미엄 파티오 클리너",
          prodDescription:
            "프리미엄 파티오 클리너는 노즐 높이 조절이 가능하며 손잡이가 있어 수직 표면 세척에 효율적인 클리너입니다.",
        },
      ],
    },
    // 5
    {
      type: "hose",
      title: "호스",
      description: [
        {
          description:
            "AVA에서 제작된 4가지의 호스는 고압세척기의 작업 범위를 확장하기에 효율적입니다.",
        },
        {
          description: "다양한 호스로 더 효과적인 작업을 해보세요!",
        },
      ],
      thumbnail: "",
      images: [{ image: "" }, { image: "" }, { image: "" }],
      products: [
        {
          type: "1",
          prodImg: "",
          prodTitle: "스틸 고압호스",
          prodDescription:
            "전문적인 품질과 고급 재질의 고무로 높은 유연성과 긴 수명을 보장합니다.",
        },
        {
          type: "2",
          prodImg: "",
          prodTitle: "고압 연장호스",
          prodDescription:
            "AVA의 고압 연장호스는 튼튼하고 내구성이 강하지만 스틸 고압호스보다 유연성이 부족합니다.",
        },
        {
          type: "3",
          prodImg: "",
          prodTitle: "편사호스",
          prodDescription:
            "AVA의 모든 제품은 자흡기능과 수도연결이 가능하기 때문에 편사호스를 사용하여 기계에 물을 공급해야 합니다.",
        },
        {
          type: "4",
          prodImg: "",
          prodTitle: "파이프 세척 호스",
          prodDescription:
            "이 제품은 배수관 및 파이프 청소를 위한 호스입니다. 고효율 회전 노즐로 파이프 내에 이물질을 제거하기 위해 설계되었습니다. 강화 섬유 재질로 좁은 통로 및 굽어진 곳에서 사용이 가능하며 호스의 세척 효율과 추진 강도는 사용중인 기계의 압력에 따라 달라집니다. (본 제품은 모든 AVA 및 카쳐 제품에 사용이 가능합니다).",
        },
      ],
    },
    // 6
    {
      type: "hose",
      title: "브러시",
      description: [
        {
          description:
            "사각 브러시는 대부분의 표면에 적합하며 쉽게 사용할 수 있으며,",
        },
        {
          description:
            "가구 브러시는 실외의 작은 면적의 표면을 청소하는 곳에 적합합니다.",
        },
        {
          description:
            "극세사 브러시는 창문, 유리 등 깨지기 쉬운 표면에 적합합니다.",
        },
      ],
      thumbnail: "",
      images: [{ image: "" }, { image: "" }, { image: "" }],
      products: [
        {
          type: "1",
          prodImg: "",
          prodTitle: "사각 브러시",
          prodDescription:
            "브러시에 내장된 3개의 60˚ 고압노즐과 완벽한 크기의 브러시를 통해 정면과 나무표면을 청소하기에 효율적입니다. (본 제품은 모든 AVA 및 카쳐 제품에 사용이 가능합니다.)",
        },
        {
          type: "2",
          prodImg: "",
          prodTitle: "가구 브러시",
          prodDescription:
            "가구브러시는 고압 노즐이 특징이며 실외가구 등 작은 면적의 표면을 청소하기에 적합합니다. 사용이 편리한 40˚ 노즐은 표면을 부드럽게 처리합니다.",
        },
        {
          type: "3",
          prodImg: "",
          prodTitle: "극세사 브러시",
          prodDescription:
            "- 물 세척 기능이 포함된 AVA의 극세사 브러시는 자동차 창문 및 유리 등 깨지기 쉬운 표면에 적합합니다. (본 제품은 모든 AVA 및 카쳐 제품에 사용이 가능합니다.)",
        },
      ],
    },
    // 6
    {
      type: "gun",
      title: "고압건",
      description: [
        {
          description:
            "고객님들이 고압세척기를 사용하면서 느낀 불편함은 고압건 레버를 잡을 때 많은 힘이 들어간다는 것이었습니다.",
        },
        {
          description:
            "이러한 고객님들의 피드백을 바탕으로 Zero-Force 방아쇠를 개발하여 레버를",
        },
        {
          description:
            "최대 90%의 적은 힘으로 손가락 하나로 작동이 가능하며 손이 피로해지는 것을 방지했습니다.",
        },
      ],
      thumbnail: "",
      images: [{ image: "" }, { image: "" }, { image: "" }],
      products: [
        {
          type: "1",
          prodImg: "",
          prodTitle: "고압건",
          prodDescription:
            "고객님들이 고압세척기를 사용하면서 느낀 불편함은 고압건 레버를 잡을 때 많은 힘이 들어간다는 것이었습니다. 이러한 고객님들의 피드백을 바탕으로 Zero-Force 방아쇠를 개발하여 레버를 최대 90%의 적은 힘으로 손가락 하나로 작동이 가능하며 손이 피로해지는 것을 방지했습니다.",
        },
      ],
    },
    // 7
    {
      type: "gun",
      title: "어댑터",
      description: [
        {
          description:
            "다양한 장비를 보유한 고객들을 위하여 AVA 또는 카쳐 고압건에",
        },
        {
          description:
            "나사산이 있는 부속품을 결합할 수 있도록 제작된 어댑터입니다.",
        },
      ],
      thumbnail: "",
      images: [{ image: "" }, { image: "" }, { image: "" }],
      products: [
        {
          type: "1",
          prodImg: "",
          prodTitle: "수 어댑터",
          prodDescription:
            "1/4”의 체결부로 최대 160bar 제품에 사용 가능합니다.",
        },
        {
          type: "2",
          prodImg: "",
          prodTitle: "암 어댑터",
          prodDescription:
            "1/4”의 체결부로 최대 160bar 제품에 사용 가능합니다.",
        },
        {
          type: "3",
          prodImg: "",
          prodTitle: "노즐 회전 어댑터",
          prodDescription:
            "AVA의 노즐들은 부채꼴로 분사 방향이 정해져 있으나 이 제품을 사용하면 분사 방향을 15˚씩 조절이 가능하며 총 360˚ 각도를 조절할 수 있습니다. 랜스와 노즐 사이에 결합하여 사용가능합니다.",
        },
        {
          type: "4",
          prodImg: "",
          prodTitle: "AVA to 카쳐 호스 어댑터",
          prodDescription:
            "AVA 고압건에 카쳐 호스 체결을 돕기위한 어댑터입니다.",
        },
      ],
    },
    // 8
    {
      type: "gun",
      title: "수납합",
      description: [
        {
          description:
            "제품을 이용하다가 종종 부속품들을 잃어버리거나 어디에 보관하였는지 잊어버릴 때가 있습니다.",
        },
        {
          description:
            "고객님들의 편한 사용을 위해 보관함을 제작하였습니다. 수납함 하나로 모든 노즐을 보관 할 수 있습니다.",
        },
      ],
      thumbnail: "",
      images: [{ image: "" }, { image: "" }, { image: "" }],
      products: [
        {
          type: "1",
          prodImg: "",
          prodTitle: "수납합",
          prodDescription:
            "제품을 이용하다가 종종 부속품들을 잃어버리거나 어디에 보관하였는지 잊어버릴 때가 있습니다. 고객님들의 편한 사용을 위해 보관함을 제작하였습니다. 수납함 하나로 모든 노즐을 보관 할 수 있습니다.",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>AVA | 폼캐논&#38;렌스</title>
      </Head>

      <ClientLayout>
        {accDataArr.map((data, idx) => {
          if (router.query.type === data.type) {
            return (
              <>
                <Wrapper position={`relative`} key={idx}>
                  <Image
                    src={
                      "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/banner/img_bg-black.png"
                    }
                    alt="bgImg"
                    width={`100%`}
                    height={`600px`}
                  />
                  <Image
                    src={
                      "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/banner/img_bg-green.png"
                    }
                    alt="bgImg"
                    width={`100%`}
                    height={`230px`}
                  />

                  <Wrapper
                    position={`absolute`}
                    top={`0`}
                    left={`0`}
                    height={`100%`}
                  >
                    <RsWrapper
                      al={`flex-start`}
                      ju={`flex-start`}
                      padding={`200px 0 0`}
                      position={`relative`}
                    >
                      <Wrapper
                        position={`absolute`}
                        bottom={`0`}
                        right={`0`}
                        width={`auto`}
                      >
                        <Image
                          src={data.thumbnail}
                          alt="thumbnail"
                          width={`auto`}
                        />
                      </Wrapper>

                      <Text
                        fontSize={`20px`}
                        fontWeight={`700`}
                        color={Theme.white_C}
                      >
                        AVA ACCESSORY
                      </Text>

                      <Text
                        fontSize={`48px`}
                        fontWeight={`700`}
                        color={Theme.basicTheme_C}
                        margin={`15px 0 25px`}
                      >
                        {data.title}
                      </Text>

                      {data.description.map((value, idx) => {
                        return (
                          <Text
                            fontSize={`20px`}
                            color={Theme.white_C}
                            key={idx}
                          >
                            {value.description}
                          </Text>
                        );
                      })}
                    </RsWrapper>
                  </Wrapper>
                </Wrapper>

                <Wrapper padding={`0 50px`}>
                  <Wrapper margin={`100px 0`}>
                    <Wrapper
                      width={width < 900 ? `100%` : `910px`}
                      height={`512px`}
                      bgColor={Theme.lightGrey_C}
                    >
                      유튜부
                    </Wrapper>
                  </Wrapper>

                  <Wrapper dr={`row`} ju={`space-between`} margin={`0 0 100px`}>
                    {data.images.map((value, idx) => {
                      return (
                        <Image
                          src={value.image}
                          alt="img"
                          width={`calc(100% / 3 - 10px)`}
                        />
                      );
                    })}
                  </Wrapper>
                </Wrapper>

                {data.products.map((value, idx) => {
                  return (
                    <Wrapper
                      key={idx}
                      bgColor={Theme.black3_C}
                      al={`flex-end`}
                      ju={`flex-end`}
                      position={`relative`}
                    >
                      <Image
                        src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_right-pattern.png`}
                        alt="bgImg"
                        width={`auto`}
                      />

                      <Wrapper
                        position={`absolute`}
                        padding={`100px 0`}
                        top={`0`}
                        left={`0`}
                      >
                        <RsWrapper>
                          <Wrapper dr={`row`}>
                            <Image
                              src={value.prodImg}
                              width={`390px`}
                              alt="prodImg"
                            />
                            <Wrapper
                              width={
                                width < 900 ? `100%` : `calc(100% - 390px)`
                              }
                              padding={width < 900 ? `0` : `0 0 0 80px`}
                              al={`flex-start`}
                            >
                              <Text
                                fontSize={`36px`}
                                fontWeight={`700`}
                                color={Theme.basicTheme_C}
                                margin={`0 0 30px`}
                              >
                                {value.prodTitle}
                              </Text>

                              <Text color={Theme.white_C} fontSize={`20px`}>
                                {value.prodDescription}
                              </Text>
                            </Wrapper>
                          </Wrapper>
                        </RsWrapper>
                      </Wrapper>
                    </Wrapper>
                  );
                })}
              </>
            );
          }
        })}
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

export default Type;
