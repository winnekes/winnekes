import {
  ComponentWithAs,
  IconButton,
  IconButtonProps,
  Link,
} from "@chakra-ui/react";

type Props = {
  href: string;
};

export const SocialIconButton: ComponentWithAs<
  "button",
  IconButtonProps & Props
> = ({ href, ...props }) => {
  return (
    <Link href={href} isExternal>
      <IconButton size="lg" variant="ghost" aria-label="" {...props} />
    </Link>
  );
};
