import { Box } from "@chakra-ui/react";
import NextImage from "next/image";
import { FunctionComponent } from "react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Navigation]);

type ImageDetails = {
  url: string;
  alt: string;
};

export type ImageCarouselProps = {
  images: ImageDetails[];
};

export const ImageCarousel: FunctionComponent<ImageCarouselProps> = ({
  images,
}) => {
  return (
    <Box my={5} pb={5}>
      <Swiper pagination navigation>
        {images.map((image) => (
          <SwiperSlide key={image.url}>
            <Box pb={10}>
              <NextImage
                width="800"
                height="600"
                src={image.url}
                alt={image.alt}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
