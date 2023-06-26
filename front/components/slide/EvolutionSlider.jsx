import React from "react";
import { RowWrapper, Image, Wrapper } from "../commonComponents";
import styled from "styled-components";
import { Carousel } from "antd";
import useWidth from "../../hooks/useWidth";

const SliderWrapper = styled(RowWrapper)`
  & .ant-carousel {
    width: 100%;
  }

  .ant-carousel .slick-dots-bottom {
    bottom: -50px;
  }

  .ant-carousel .slick-dots li button {
    background: ${(props) => props.theme.lightGrey_C};
  }

  .ant-carousel .slick-dots li {
    width: 68px;
    height: 6px;
    background: ${(props) => props.theme.lightGrey_C};
  }

  .ant-carousel .slick-dots li.slick-active button,
  .ant-carousel .slick-dots li.slick-active {
    background: ${(props) => props.theme.basicTheme_C};
  }
`;

const EvolutionSlider = () => {
  const width = useWidth();

  return (
    <SliderWrapper>
      <Carousel
        slidesToShow={width < 1100 ? (width < 700 ? 1 : 2) : 3}
        autoplay={true}
        speed={3000}
        arrows={true}
      >
        <Wrapper padding={`0 15px`}>
          <Image
            alt="image"
            src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-evolution/img_4.png`}
          />
        </Wrapper>
        <Wrapper padding={`0 15px`}>
          <Image
            alt="image"
            src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-evolution/img_5.png`}
          />
        </Wrapper>
        <Wrapper padding={`0 15px`}>
          <Image
            alt="image"
            src={`https://ags-s3.s3.ap-northeast-2.amazonaws.com/ags/assets/images/prod-evolution/img_6.png`}
          />
        </Wrapper>
      </Carousel>
    </SliderWrapper>
  );
};

export default EvolutionSlider;
