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
            <Text margin={`0 0 14px`}>브랜드 소개</Text>
            <Text margin={`0 0 14px`}> 제품 소개</Text>
            <Text>악세사리</Text>
          </Wrapper>
          <Wrapper
            width={`33.3%`}
            al={`flex-start`}
            fontSize={width < 700 ? `14px` : `18px`}
          >
            <Text>고객 문의</Text>
          </Wrapper>
          <Wrapper
            width={`33.3%`}
            al={`flex-start`}
            fontSize={width < 700 ? `14px` : `18px`}
          >
            <Text margin={`0 0 14px`}>Evolution Series</Text>
            <Text margin={`0 0 14px`}>Master Series</Text>
            <Text margin={`0 0 14px`}>GO Series</Text>
            <Text>Smart Series</Text>
          </Wrapper>
        </Wrapper>

        <Wrapper
          dr={`row`}
          ju={`flex-start`}
          fontSize={width < 700 ? `12px` : `16px`}
        >
          <Text>이용약관</Text>
          <Text margin={width < 800 ? `0 30px` : `0 100px`}>
            개인정보처리방침
          </Text>
          <Text>example@email.com</Text>
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
