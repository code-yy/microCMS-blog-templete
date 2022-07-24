import { BrandTwitter, BrandGithub, BrandInstagram } from "tabler-icons-react";
import { ActionIcon } from "@mantine/core";
import { LINK } from "@/constants/links";
import { AppLink } from "../ui/AppLink";

const SnsIcons = [
  {
    icon: <BrandTwitter size={18} />,
    link: LINK.TWITTER,
  },
  {
    icon: <BrandGithub size={18} />,
    link: LINK.GITHUB,
  },
  {
    icon: <BrandInstagram size={18} />,
    link: LINK.INSTAGRAM,
  },
];

export const SnsIcon = () => {
  return (
    <>
      {SnsIcons.map(({ icon, link }) => {
        return (
          <AppLink key={link} href={link} target="_blank" rel="noreferrer">
            <ActionIcon size="lg">{icon}</ActionIcon>
          </AppLink>
        );
      })}
    </>
  );
};