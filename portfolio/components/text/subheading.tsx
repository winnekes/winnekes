import { ComponentWithAs, Text, TextProps } from "@chakra-ui/react";
import { colors } from "../../styles/theme";

export const Subheading: ComponentWithAs<"p", TextProps> = ({
  children,
  ...props
}) => {
  return (
    <Text
      color="brand01.500"
      fontWeight="bold"
      fontSize="xs"
      textTransform="uppercase"
      {...props}
    >
      {children}
    </Text>
  );
};
