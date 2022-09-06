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
  Title,
  WholeWrapper,
  Wrapper,
} from "../../components/commonComponents";
import Theme from "../../components/Theme";
import styled from "styled-components";

const MenuWrap = styled(Wrapper)`
  width: 410px;
  height: 240px;
  background-color: ${(props) => props.theme.black2_C};
  color: ${(props) => props.theme.white_C};
  border-radius: 10px;
  margin: 0 15px 15px;
  transition: 0.3s;

  & > div {
    width: 80px;
    height: 80px;
    border: 2px solid ${(props) => props.theme.basicTheme_C};
    border-radius: 50%;
  }

  & img {
    width: 40px;
    height: 40px;
  }

  &:hover {
    background-color: ${(props) => props.theme.basicTheme_C};
    & > div {
      border: 2px solid ${(props) => props.theme.white_C};
    }

    & img {
      filter: brightness(500%);
    }
  }

  @media (max-width: 900px) {
    width: 250px;
    height: 150px;

    & > div {
      width: 54px;
      height: 54px;
    }

    & img {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 700px) {
    width: 48%;
    height: 150px;
    margin: 1%;
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
        <title>AGS | 고객지원</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <RsWrapper height={width < 700 ? `80vh` : `100vh`}>
            <Title fontSize={`50px`} margin={`0 0 50px`}>
              고객지원
            </Title>

            <Wrapper dr={`row`}>
              <MenuWrap>
                <Wrapper>
                  <Image
                    alt={`icon`}
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/customer-support/icon-faq.png`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `20px` : `36px`}
                  margin={`10px 0 0`}
                  fontWeight={`bold`}
                  color={Theme.white_C}
                >
                  FAQ
                </Text>
              </MenuWrap>

              <MenuWrap>
                <Wrapper>
                  <Image
                    alt={`icon`}
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/customer-support/icon_brand.png`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `20px` : `36px`}
                  margin={`10px 0 0`}
                  fontWeight={`bold`}
                  color={Theme.white_C}
                >
                  브랜드 소개
                </Text>
              </MenuWrap>
            </Wrapper>

            <Wrapper dr={`row`}>
              <MenuWrap>
                <Wrapper>
                  <Image
                    alt={`icon`}
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/customer-support/icon_video.png`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `20px` : `36px`}
                  margin={`10px 0 0`}
                  fontWeight={`bold`}
                  color={Theme.white_C}
                >
                  제품 관련 영상
                </Text>
              </MenuWrap>

              <MenuWrap>
                <Wrapper>
                  <Image
                    alt={`icon`}
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/customer-support/icon-store.png`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `20px` : `36px`}
                  margin={`10px 0 0`}
                  fontWeight={`bold`}
                  color={Theme.white_C}
                >
                  대리점 안내
                </Text>
              </MenuWrap>
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

export default Index;
