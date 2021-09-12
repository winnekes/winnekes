import { ComponentWithAs, Heading, HeadingProps, Text } from "@chakra-ui/react";

export const Header: ComponentWithAs<"h2", HeadingProps> = ({
  children,
  ...props
}) => {
  return (
    <header>
      <Heading as="h1" fontSize="6xl">
        <Text>
          Robots, cats, <br />
          all things cute,
          <br /> that is me.
        </Text>
      </Heading>
    </header>
  );
};
