import { ComponentWithAs, Text, TextProps } from "@chakra-ui/react";

export const Subheading: ComponentWithAs<"p", TextProps> = ({
  children,
  ...props
}) => {
  return (
    <Text
      color="gold"
      fontWeight="bold"
      fontSize="xs"
      textTransform="uppercase"
      {...props}
    >
      {children}
    </Text>
  );
};
