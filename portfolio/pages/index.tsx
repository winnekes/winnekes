import {
  Heading,
  Flex,
  Text,
  Box,
  Icon,
  IconProps,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Page } from "../components/layout/page";
import { Paragraph } from "../components/text/paragraph";

export default function Home() {
  //backgroundImage="url(./background_space.png)"
  return (
    <Page>
      <Flex
        as="header"
        direction={["column", null, null, "row"]}
        align="center"
        justify="space-between"
      >
        <header>
          <Heading as="h1" fontSize="6xl">
            <Text>
              Robots, cats, <br />
              all things cute,
              <br /> that is me.
            </Text>
          </Heading>
        </header>

        <Image src="/hands.svg" />
      </Flex>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis
        dolor, gravida sed imperdiet at, rutrum eget massa. Nullam turpis arcu,
        tempus quis ex vitae, egestas pretium sem. Nullam nec vestibulum est.
        Praesent ornare turpis odio, a ultrices sem congue vel. Proin nisi
        augue, tempor quis quam sed, interdum mattis sapien. Aliquam consectetur
        quam non felis fermentum, at convallis elit convallis. Nullam consequat
        hendrerit venenatis. In tincidunt consectetur mauris, at iaculis quam
        venenatis at. Donec tempor tincidunt mauris, quis tincidunt elit
        porttitor ac. Nam tincidunt libero arcu. Nunc mollis lacinia urna et
        cursus. Donec sodales, mauris in aliquam lacinia, est diam malesuada
        dui, in mattis nisl mi quis ipsum. Etiam augue tellus, tincidunt sed
        diam ut, mattis tincidunt risus. In eros metus, maximus vel accumsan
        nec, maximus a turpis. Quisque et dolor feugiat nulla semper mattis.
        Aenean at volutpat dolor, in malesuada odio. In fringilla massa id eros
        vestibulum maximus. Donec sed tincidunt dolor. Curabitur lacinia
        pharetra lobortis. Fusce velit sem, egestas sed libero sit amet, auctor
        ornare felis. Praesent consectetur erat et accumsan iaculis. Phasellus
        ut gravida ligula, quis cursus risus. Vestibulum tempus erat quis mollis
        faucibus. Nullam imperdiet sem quis ligula semper, egestas sollicitudin
        velit tempus. Maecenas at vestibulum ipsum, non commodo risus.
      </Paragraph>
    </Page>
  );
}
