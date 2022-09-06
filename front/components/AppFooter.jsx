import React, { useEffect } from "react";
import {
  Wrapper,
  Text,
  Image,
  WholeWrapper,
  RsWrapper,
  ATag,
} from "./commonComponents";
import Theme from "./Theme";
import useWidth from "../hooks/useWidth";
import { useSelector, useDispatch } from "react-redux";
import { COMPANY_GET_REQUEST } from "../reducers/company";
import { message } from "antd";
import styled from "styled-components";

const SnsBox = styled(Wrapper)`
  &:hover {
    transform: rotateY(180deg);
  }
`;

const HoverT = styled(Text)`
  color: ${(props) => props.theme.black2_C};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${(props) => props.theme.basicTheme_C};
  }
`;

const AppFooter = () => {
  const width = useWidth();

  const dispatch = useDispatch();

  const {
    companys,
    //
    st_companyDone,
    st_companyError,
  } = useSelector((state) => state.company);

  useEffect(() => {
    dispatch({
      type: COMPANY_GET_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (st_companyError) {
      return message.error(st_companyError);
    }
  }, [st_companyError]);

  return (
    <WholeWrapper
      bgColor={Theme.white_C}
      color={Theme.black2_C}
      padding={width < 700 ? `50px 0 30px` : `200px 0 80px`}
      position={`relative`}
    >
      <Image
        position={`absolute`}
        right={`0`}
        top={width < 700 ? `0` : `20%`}
        width={width < 700 ? `50%` : `30%`}
        alt={`img`}
        src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_footer-pattern.png`}
      />
      <RsWrapper al={`flex-start`}>
        <Image
          width={`160px`}
          margin={`0 0 50px`}
          alt={`img`}
          src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/img_footer-txt.png`}
        />
        <Wrapper
          al={`flex-start`}
          dr={`row`}
          fontSize={width < 700 ? `14px` : `18px`}
          fontWeight={`600`}
          margin={`0 0 60px`}
        >
          <Wrapper width={`33.3%`} al={`flex-start`}>
            <HoverT margin={`0 0 14px`}>브랜드 소개</HoverT>
            <HoverT margin={`0 0 14px`}>제품 소개</HoverT>
            <HoverT>악세사리</HoverT>
          </Wrapper>
          <Wrapper
            width={`33.3%`}
            al={`flex-start`}
            fontSize={width < 700 ? `14px` : `18px`}
          >
            <HoverT>고객지원</HoverT>
          </Wrapper>
          <Wrapper
            width={`33.3%`}
            al={`flex-start`}
            fontSize={width < 700 ? `14px` : `18px`}
          >
            <HoverT margin={`0 0 14px`}>Evolution Series</HoverT>
            <HoverT margin={`0 0 14px`}>Master Series</HoverT>
            <HoverT margin={`0 0 14px`}>GO Series</HoverT>
            <HoverT margin={`0 0 14px`}>Smart Series</HoverT>
            <HoverT>V6 Series</HoverT>
          </Wrapper>
        </Wrapper>

        <Wrapper
          dr={`row`}
          ju={`flex-start`}
          fontSize={width < 700 ? `12px` : `16px`}
        >
          <HoverT>이용약관</HoverT>
          <HoverT margin={width < 800 ? `0 30px` : `0 100px`}>
            개인정보처리방침
          </HoverT>
          <HoverT>example@email.com</HoverT>
        </Wrapper>
      </RsWrapper>

      <Wrapper dr={`row`} margin={` 40px 0 0`} zIndex={`1`}>
        <SnsBox
          margin={`0 6px`}
          width={`40px`}
          height={`40px`}
          radius={`50%`}
          border={`1px solid ${Theme.black2_C}`}
        >
          <Image
            width={`14px`}
            alt={`facebook`}
            src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_face-book.png`}
          />
        </SnsBox>
        <SnsBox
          margin={`0 6px`}
          width={`40px`}
          height={`40px`}
          radius={`50%`}
          border={`1px solid ${Theme.black2_C}`}
        >
          <Image
            width={`14px`}
            alt={`instar`}
            src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_insta.png`}
          />
        </SnsBox>
        <SnsBox
          margin={`0 6px`}
          width={`40px`}
          height={`40px`}
          radius={`50%`}
          border={`1px solid ${Theme.black2_C}`}
        >
          <Image
            width={`14px`}
            alt={`in`}
            src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_in.png`}
          />
        </SnsBox>
        <SnsBox
          margin={`0 6px`}
          width={`40px`}
          height={`40px`}
          radius={`50%`}
          border={`1px solid ${Theme.black2_C}`}
        >
          <Image
            width={`14px`}
            alt={`yoptodu`}
            src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_youtube.png`}
          />
        </SnsBox>
      </Wrapper>
    </WholeWrapper>
  );
};

export default AppFooter;
