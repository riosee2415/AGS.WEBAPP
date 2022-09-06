import React, { useEffect, useCallback } from "react";
import {
  ColWrapper,
  RowWrapper,
  Wrapper,
  CommonButton,
  RsWrapper,
  Text,
  Image,
} from "../commonComponents";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { MAIN_BANNER_REQUEST } from "../../reducers/banner";
import Theme from "../Theme";
import { Carousel } from "antd";
import useWidth from "../../hooks/useWidth";
import { useRouter } from "next/router";

const UseInfoSliderWrapper = styled(RowWrapper)`
  & .ant-carousel {
    width: 100%;
  }
`;

const UseInfoSlider = ({ useInfoArr }) => {
  const width = useWidth();

  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  const router = useRouter();

  const moveLinkHandler = useCallback((link) => {
    window.open(link);
  }, []);
  return (
    <UseInfoSliderWrapper>
      <Carousel
        slidesToShow={width < 1100 ? (width < 700 ? 1 : 2) : 4}
        autoplay={true}
        speed={3000}
      >
        {useInfoArr.map((data, idx) => {
          return (
            <Wrapper
              key={idx}
              width={
                width < 1100
                  ? width < 800
                    ? `100%`
                    : `calc(100% / 2)`
                  : `calc(100% / 4)`
              }
              ju={`flex-start`}
              padding={
                width < 700
                  ? `10px`
                  : idx === 0
                  ? `0 10px 0 0`
                  : idx === 3
                  ? `0 0 0 10px`
                  : `0 10px`
              }
              margin={width < 1100 && width < 800 ? `0 0 20px` : `0 0 10px`}
            >
              <Image
                height={`334px`}
                src={data.thumbnail}
                alt={`useInfoImage`}
              />

              <Text
                fontSize={width < 800 ? `16px` : `18px`}
                textAlign={`center`}
                margin={`20px 0 0`}
              >
                {data.content}
              </Text>
            </Wrapper>
          );
        })}
      </Carousel>
    </UseInfoSliderWrapper>
  );
};

export default UseInfoSlider;
