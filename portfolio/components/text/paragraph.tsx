import { ComponentWithAs, Text, TextProps } from "@chakra-ui/react";

export const Paragraph: ComponentWithAs<"p", TextProps> = ({
  children,
  ...props
}) => {
  return (
    <Text
      fontSize={["xl", null, null, "2xl"]}
      lineHeight={["2rem", null, null, "3rem"]}
      my="24px"
      {...props}
    >
      {children}
    </Text>
  );
};
