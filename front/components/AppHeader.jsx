import React from "react";
import {
  Image,
  RsWrapper,
  Wrapper,
  CommonButton,
  ATag,
  Text,
} from "./commonComponents";
import Theme from "./Theme";
import wrapper from "../store/configureStore";
import axios from "axios";
import { END } from "@redux-saga/core";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import useWidth from "../hooks/useWidth";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const CustomBtn = styled(Text)`
  width: 130px;
  padding: 10px 0;
  font-size: 16px;
  color: ${(props) => props.theme.white_C};

  ${(props) =>
    props.isActive &&
    `
    color:  ${Theme.basicTheme_C};
    `};

  &:hover {
    color: ${(props) => props.theme.basicTheme_C};
  }

  @media (max-width: 800px) {
    width: 90px;
    padding: 6px 0;
    font-size: 14px;
  }
`;

const AppHeader = () => {
  const width = useWidth();
  const router = useRouter();

  ////////////// - USE STATE- ///////////////
  ///////////// - EVENT HANDLER- ////////////
  ////////////// - USE EFFECT- //////////////

  return (
    <>
      <Wrapper
        // bgColor={router.pathname === "/" ? `transparent` : `Theme.white_C`}
        bgColor={Theme.black2_C}
      >
        <RsWrapper
          width={`auto`}
          height={`80px`}
          dr={`row`}
          padding={`10px 0`}
          ju={`space-between`}
        >
          <Wrapper dr={`row`} width={`auto`}>
            <Link href={`/`}>
              <ATag width={`auto`} cursor={`pointer`}>
                <Image
                  width={width < 800 ? `70px` : `90px`}
                  src={
                    router.pathname === "/"
                      ? `https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/logo/logo_white.png`
                      : `https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/logo/logo_black.png`
                  }
                  alt={`Logo`}
                />
              </ATag>
            </Link>

            <Wrapper width={`auto`} dr={`row`} margin={`0 0 0 50px`}>
              <CustomBtn isActive={router.pathname === `/1`}>
                <Link href={`/`}>
                  <ATag>제품소개</ATag>
                </Link>
              </CustomBtn>
              <CustomBtn isActive={router.pathname === `/1`}>
                <Link href={`/`}>
                  <ATag>악세사리</ATag>
                </Link>
              </CustomBtn>
              <CustomBtn isActive={router.pathname === `/1`}>
                <Link href={`/`}>
                  <ATag>고객지원</ATag>
                </Link>
              </CustomBtn>
              <CustomBtn isActive={router.pathname === `/1`}>
                <Link href={`/`}>
                  <ATag>브랜드소개</ATag>
                </Link>
              </CustomBtn>
            </Wrapper>
          </Wrapper>

          <CommonButton width={`84px`} height={`35px`}>
            SHOP
          </CommonButton>
        </RsWrapper>
      </Wrapper>
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

    // context.store.dispatch({
    //   type: ACCEPT_LOG_REQUEST,
    //   data: { typeId: "1" },
    // });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default AppHeader;
