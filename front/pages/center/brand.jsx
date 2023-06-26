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
  Text,
  Title,
  WholeWrapper,
  Wrapper,
} from "../../components/commonComponents";

const Brand = () => {
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
        <title>AGS | 브랜드 소개</title>
      </Head>

      <ClientLayout>
        <WholeWrapper>
          <RsWrapper padding={`100px 0 50px`}>
            <Wrapper al={`flex-start`}>
              <Title>브랜드 소개</Title>

              <Image
                src="https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/customer-support/img_brand-1.png"
                alt="img"
                margin={`60px 0 30px`}
              />

              <Text isEng={true} fontSize={width < 700 ? `13px` : `16px`}>
                In picture: Harald Lavik &#38; Morten Torlei
              </Text>

              <Text
                fontSize={width < 700 ? `28px` : `42px`}
                fontWeight={`800`}
                margin={`80px 0 40px`}
              >
                AVA 브랜드 창립자
              </Text>

              <Text
                fontSize={
                  width < 900 ? (width < 700 ? `14px` : `16px`) : `20px`
                }
                display={width < 700 ? `none` : `flex`}
              >
                20년동안 고압세척기 시장에서 주요 브랜드에 서비스를 제공하는
                경험을 통하여
              </Text>
              <Text
                fontSize={
                  width < 900 ? (width < 700 ? `14px` : `16px`) : `20px`
                }
                margin={width < 700 ? `0 0 20px` : `0 0 40px`}
              >
                {width < 700
                  ? "20년동안 고압세척기 시장에서 주요 브랜드에 서비스를 제공하는 경험을 통하여 저희는 무엇이 기능적이고 무엇이 기능적이지 않은지에 대한 충분한 경험을 쌓았습니다."
                  : "저희는 무엇이 기능적이고 무엇이 기능적이지 않은지에 대한 충분한 경험을 쌓았습니다."}
              </Text>

              <Text
                fontSize={
                  width < 900 ? (width < 700 ? `14px` : `16px`) : `20px`
                }
              >
                판매자의 관점에서 볼 때 명백한 문제뿐만 아니라 고객이 제품을
                어떻게 보는지에 대해서도 마찬가지입니다.
              </Text>
              <Text
                fontSize={
                  width < 900 ? (width < 700 ? `14px` : `16px`) : `20px`
                }
                margin={width < 700 ? `0 0 20px` : `0 0 40px`}
              >
                저희는 구매자에게 사용이 편리하고 효율성이 높은 제품을
                제공함으로써 저희가 가진 지식과 경험들 또한 제공합니다.
              </Text>

              <Text
                fontSize={
                  width < 900 ? (width < 700 ? `14px` : `16px`) : `20px`
                }
                display={width < 700 ? `none` : `flex`}
              >
                80년대 고압세척기 시장에서 헌신한 아버지와 함께 자라며 수십년 후
                아버지와 같은 업계에 종사하게 된 것은 자연스러운 일이었으며
              </Text>
              <Text
                fontSize={
                  width < 900 ? (width < 700 ? `14px` : `16px`) : `20px`
                }
                margin={width < 700 ? `0 0 20px` : `0 0 40px`}
              >
                {width < 700
                  ? "80년대 고압세척기 시장에서 헌신한 아버지와 함께 자라며 수십년 후 아버지와 같은 업계에 종사하게 된 것은 자연스러운 일이었으며 까다로운 고객에게 어떠한 방법으로 영업을 하는지 배워 성장하게 되었습니다."
                  : "까다로운 고객에게 어떠한 방법으로 영업을 하는지 배워 성장하게 되었습니다."}
              </Text>

              <Text
                fontSize={
                  width < 900 ? (width < 700 ? `14px` : `16px`) : `20px`
                }
                display={width < 700 ? `none` : `flex`}
              >
                저희는 고압세척기 제품을 보다 사용이 편리하고 실용적이며
                효율적인 방안을 제공하기 위해 지속적으로 개발하며 노력하고
                있습니다.
              </Text>
              <Text
                fontSize={
                  width < 900 ? (width < 700 ? `14px` : `16px`) : `20px`
                }
                margin={width < 700 ? `0 0 20px` : `0 0 40px`}
              >
                {width < 700
                  ? "저희는 고압세척기 제품을 보다 사용이 편리하고 실용적이며 효율적인 방안을 제공하기 위해 지속적으로 개발하며 노력하고 있습니다. 저희의 디자이너, 엔지니어들은 AVA 브랜드를 더욱 개선 및 구축을 위해 더 나은 해결방안을 찾으며 협력하고 있습니다."
                  : "저희의 디자이너, 엔지니어들은 AVA 브랜드를 더욱 개선 및 구축을 위해 더 나은 해결방안을 찾으며 협력하고 있습니다."}
              </Text>

              <Text
                fontSize={
                  width < 900 ? (width < 700 ? `14px` : `16px`) : `20px`
                }
                display={width < 700 ? `none` : `flex`}
              >
                저희의 목표는 고압세척기 시장에서 가장 혁신적인 브랜드가 되는
                것입니다.
              </Text>
              <Text
                fontSize={
                  width < 900 ? (width < 700 ? `14px` : `16px`) : `20px`
                }
                margin={`0 0 60px`}
              >
                {width < 700
                  ? "저희의 목표는 고압세척기 시장에서 가장 혁신적인 브랜드가 되는 것입니다. 저희는 AVA 브랜드가 고압세척기의 경험을 재창조 했다고 자랑스럽게 말씀 드릴 수 있습니다."
                  : "저희는 AVA 브랜드가 고압세척기의 경험을 재창조 했다고 자랑스럽게 말씀 드릴 수 있습니다."}
              </Text>

              <Text
                fontSize={width < 700 ? `14px` : `18px`}
                fontWeight={`600`}
                margin={`0 0 110px`}
              >
                Morten Torlei, CEO겸 설립자
              </Text>

              <Wrapper dr={`row`} ju={`space-between`}>
                <Image
                  src="https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/customer-support/img_brand-2.png"
                  alt="img"
                  width={`48%`}
                />
                <Image
                  src="https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/customer-support/img_brand-3.png"
                  alt="img"
                  width={`48%`}
                />
              </Wrapper>
            </Wrapper>
          </RsWrapper>
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

export default Brand;
