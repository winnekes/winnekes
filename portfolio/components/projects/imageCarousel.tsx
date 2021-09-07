import { Box, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { FunctionComponent } from "react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Navigation]);

export type ImageDetails = {
  url: string;
  alt: string;
};

type Props = {
  images: ImageDetails[];
};

export const ImageCarousel: FunctionComponent<Props> = ({ images }) => {
  return (
    <Box my={5}>
      <Swiper pagination navigation className="mySwiper">
        {images.map((image) => (
          <SwiperSlide key={image.url}>
            <NextImage
              width="502"
              height="313"
              src={image.url}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
