import React, { useState, useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Row, Col, Drawer } from "antd";
import Link from "next/link";
import { withResizeDetector } from "react-resize-detector";
import { AlignRightOutlined } from "@ant-design/icons";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { Image, WholeWrapper, Wrapper } from "./commonComponents";
import { useRouter } from "next/router";

const SnsBox = styled(Wrapper)`
  &:hover {
    transform: rotateY(180deg);
  }
`;

const ClientLayout = ({ children, width }) => {
  const router = useRouter();

  return (
    <section>
      {/* HEADER */}
      <AppHeader />

      {/* <MobileCol >
        <CustomRow justify={`space-between`} margin={`10px`}>
          <Col span={5}>
            <img
              width={`100%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SOUL%2Fassets%2Fimages%2Flogo%2Fsoul_logo.png?alt=media&token=2cfae161-5462-4687-b5ed-d7ee85755b7a`}
            />
          </Col>
          <Col span={2}>
            <AlignRightOutlined onClick={drawarToggle} />
          </Col>
        </CustomRow>
      </MobileCol>

      */}

      {/* content */}
      <WholeWrapper
        margin={router.pathname === "/" ? `0` : `80px 0 0`}
        position={`relative`}
      >
        <SnsBox
          height={width < 700 ? `50px` : `75px`}
          width={width < 700 ? `50px` : `75px`}
          position={`fixed`}
          bottom={`30px`}
          right={`30px`}
          zIndex={`100`}
          cursor={`pointer`}
        >
          <Image
            src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/common/icon_kakao.png"
            alt="kakaoIcon"
            width={`100%`}
          />
        </SnsBox>
        {children}
      </WholeWrapper>

      {/* Footer */}

      <AppFooter />
    </section>
  );
};

ClientLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withResizeDetector(ClientLayout);
