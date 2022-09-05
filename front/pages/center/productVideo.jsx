import React from "react";
import ClientLayout from "../../components/ClientLayout";
import Head from "next/head";
import wrapper from "../../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import axios from "axios";
import { END } from "redux-saga";
import useWidth from "../../hooks/useWidth";
import {
  RsWrapper,
  SpanText,
  Text,
  Title,
  WholeWrapper,
  Wrapper,
} from "../../components/commonComponents";
import { withRouter } from "next/router";
import Theme from "../../components/Theme";
import { PRODUCT_LIST_REQUEST } from "../../reducers/product";
import { useSelector } from "react-redux";
import { Empty } from "antd";

const ProductVideo = () => {
  ////// GLOBAL STATE //////
  const width = useWidth();

  const { products } = useSelector((state) => state.product);

  console.log(products);
  ////// HOOKS //////
  ////// REDUX //////
  ////// USEEFFECT //////
  ////// TOGGLE //////
  ////// HANDLER //////
  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>페이지 이름을 적어주세요</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <RsWrapper>
            <Title dr={`row`} margin={`78px 0 0`}>
              제품
              <SpanText color={Theme.basicTheme_C}>{` 관련영상`}</SpanText>
            </Title>
            <Wrapper dr={!products ? `column` : `row`} ju={`space-between`}>
              {products ? (
                products.map((data) => (
                  <Wrapper
                    width={width < 700 ? `100%` : `48.6%`}
                    margin={`60px 0 0`}
                    al={`flex-start`}
                    key={data.id}
                  >
                    <Wrapper height={`350px`}>
                      <iframe
                        width={`100%`}
                        height={`100%`}
                        src={data.youtubeLink}
                        frameBorder="0"
                        allow="accelerometer; loop; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </Wrapper>
                    <Text
                      padding={`25px 0 8px`}
                      fontWeight={`700`}
                      fontSize={`28px`}
                    >
                      {data.title}
                    </Text>
                    <Text fontWeight={`600`}>{data.subTitle}</Text>
                  </Wrapper>
                ))
              ) : (
                <Empty
                  style={{ margin: "100px" }}
                  description={`제품 관련영상이 없습니다.`}
                />
              )}
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

    context.store.dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default withRouter(ProductVideo);
