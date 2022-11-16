import React, { useEffect } from "react";
import {
  Wrapper,
  Text,
  Image,
  WholeWrapper,
  RsWrapper,
  ATag,
  SpanText,
} from "./commonComponents";
import Theme from "./Theme";
import useWidth from "../hooks/useWidth";
import { useSelector, useDispatch } from "react-redux";
import { COMPANY_GET_REQUEST } from "../reducers/company";
import { message } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { InstagramFilled } from "@ant-design/icons";

const SnsBox = styled(Wrapper)`
  &:hover {
    transform: rotateY(180deg);
  }
`;

const HoverT = styled(Text)`
  color: ${(props) => props.theme.black2_C};
  cursor: pointer;
  transition: 0.3s;

  ${(props) =>
    props.isActive &&
    `
    color:  ${Theme.basicTheme_C};
    `};

  &:hover {
    color: ${(props) => props.theme.basicTheme_C};
  }
`;

const AppFooter = () => {
  const width = useWidth();
  const router = useRouter();

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
      padding={width < 700 ? `100px 0 40px` : `200px 0 80px`}
      position={`relative`}
    >
      <Image
        position={`absolute`}
        right={`0`}
        top={`20%`}
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
            <HoverT
              isActive={router.pathname === `/center/brand`}
              margin={`0 0 14px`}
            >
              <Link href={`/center/brand`}>
                <ATag>브랜드 소개</ATag>
              </Link>
            </HoverT>
            <HoverT
              isActive={router.pathname === `/product`}
              margin={`0 0 14px`}
            >
              <Link href={`/product`}>
                <ATag>제품 소개</ATag>
              </Link>
            </HoverT>
            <HoverT isActive={router.pathname === `/accessory`}>
              <Link href={`/accessory`}>
                <ATag>악세사리</ATag>
              </Link>
            </HoverT>
          </Wrapper>
          <Wrapper
            width={`33.3%`}
            al={`flex-start`}
            fontSize={width < 700 ? `14px` : `18px`}
          >
            <HoverT isActive={router.pathname === `/center`}>
              <Link href={`/center`}>
                <ATag>고객지원</ATag>
              </Link>
            </HoverT>
          </Wrapper>
          <Wrapper
            width={`33.3%`}
            al={`flex-start`}
            fontSize={width < 700 ? `14px` : `18px`}
          >
            <HoverT
              isActive={router.pathname === `/product/evolution`}
              margin={`0 0 14px`}
            >
              <Link href={`/product/evolution`}>
                <ATag>Evolution Series</ATag>
              </Link>
            </HoverT>
            <HoverT
              isActive={router.pathname === `/product/master`}
              margin={`0 0 14px`}
            >
              <Link href={`/product/master`}>
                <ATag>Master Series</ATag>
              </Link>
            </HoverT>
            <HoverT
              isActive={router.pathname === `/product/go`}
              margin={`0 0 14px`}
            >
              <Link href={`/product/go`}>
                <ATag>GO Series</ATag>
              </Link>
            </HoverT>
            <HoverT
              isActive={router.pathname === `/product/smart`}
              margin={`0 0 14px`}
            >
              <Link href={`/product/smart`}>
                <ATag>Smart Series</ATag>
              </Link>
            </HoverT>
            <HoverT isActive={router.pathname === `/product/v6`}>
              <Link href={`/product/v6`}>
                <ATag>V6 Series</ATag>
              </Link>
            </HoverT>
          </Wrapper>
        </Wrapper>

        <Wrapper
          dr={`row`}
          ju={`flex-start`}
          fontSize={width < 700 ? `12px` : `16px`}
        >
          <Text>AGS(에이지에스)</Text>
        </Wrapper>
        <Wrapper
          dr={`row`}
          ju={`flex-start`}
          fontSize={width < 700 ? `12px` : `16px`}
          margin={`5px 0`}
        >
          <Text>대표자명 : 오승훈</Text>
          <SpanText margin={`0 10px`} fontSize={`12px`}>
            |
          </SpanText>
          <Text>주소: 경기도 하남시 미사강변서로 25 테스타타워 FB247호</Text>
        </Wrapper>
        <Wrapper
          dr={`row`}
          ju={`flex-start`}
          fontSize={width < 700 ? `12px` : `16px`}
          margin={`5px 0`}
        >
          <HoverT>
            <ATag href={"tel:024754558"}>전화번호: 02-475-4558</ATag>
          </HoverT>
          <SpanText margin={`0 10px`} fontSize={`12px`}>
            |
          </SpanText>
          <Text>사업자번호: 212-25-46219</Text>
        </Wrapper>
        <Wrapper
          dr={`row`}
          ju={`flex-start`}
          fontSize={width < 700 ? `12px` : `16px`}
        >
          <HoverT>
            <ATag href={"mailto:avakorea@agskorea.com"}>
              avakorea@agskorea.com
            </ATag>
          </HoverT>
        </Wrapper>
      </RsWrapper>

      <Wrapper dr={`row`} margin={` 40px 0 0`} zIndex={`1`}>
        {/* <SnsBox
          margin={`0 6px`}
          width={`40px`}
          height={`40px`}
          radius={`50%`}
          border={`1px solid ${Theme.black2_C}`}
        >
          <ATag
            href={`https://www.facebook.com/avaofnorway/`}
            target={`_blank`}
          >
            <Image
              width={`14px`}
              alt={`facebook`}
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_face-book.png`}
            />
          </ATag>
        </SnsBox> */}
        {/* <SnsBox
          margin={`0 6px`}
          width={`40px`}
          height={`40px`}
          radius={`50%`}
          border={`1px solid ${Theme.black2_C}`}
        >
          <ATag
            href={`https://www.instagram.com/avapressurewashers/`}
            target={`_blank`}
          >
            <Image
              width={`14px`}
              alt={`instar`}
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_insta.png`}
            />
          </ATag>
        </SnsBox> */}
        <SnsBox
          margin={`0 6px`}
          width={`40px`}
          height={`40px`}
          radius={`50%`}
          border={`1px solid ${Theme.black2_C}`}
        >
          <ATag
            href={`https://instagram.com/ags_tool?igshid=YmMyMTA2M2Y=`}
            target={`_blank`}
          >
            {/* <Image
              width={`14px`}
              alt={`in`}
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_in.png`}
            /> */}
            <InstagramFilled />
          </ATag>
        </SnsBox>
        <SnsBox
          margin={`0 6px`}
          width={`40px`}
          height={`40px`}
          radius={`50%`}
          border={`1px solid ${Theme.black2_C}`}
        >
          <ATag
            href={`https://www.youtube.com/channel/UCqS6nxonSftycRBUgFsT6VA`}
            target={`_blank`}
          >
            <Image
              width={`14px`}
              alt={`yoptodu`}
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_youtube.png`}
            />
          </ATag>
        </SnsBox>
      </Wrapper>
    </WholeWrapper>
  );
};

export default AppFooter;
