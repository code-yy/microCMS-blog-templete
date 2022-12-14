import { Header as MantineHeader, Container, ActionIcon, Group, useMantineColorScheme, Menu } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";
import { FC } from "react";
import { LINK } from "@/constant/link";
import { AppLink } from "../ui/AppLink";
import { SnsIcon } from "../feature/SnsIcon";
import { ProfileIcon } from "../ui/ProfileIcon";

const NavList = [
  {
    label: "Home",
    link: LINK.HOME,
  },
  {
    label: "Blog",
    link: LINK.BLOGS,
  },
];

export const Header: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <MantineHeader height={56} className="mb-4 md:mb-8">
      <Container className="flex justify-between items-center h-[56px]">
        <Menu className="block sm:hidden">
          {NavList.map((item) => (
            <Menu.Item key={item.label}>
              <AppLink href={item.link}>{item.label}</AppLink>
            </Menu.Item>
          ))}
        </Menu>
        <Group className="hidden w-[260px] sm:flex" spacing={5}>
          {NavList.map(({ link, label }) => {
            return (
              <AppLink
                key={label}
                href={link}
                className={`block py-2 px-3 font-medium leading-[1] dark:text-gray-700 decoration-[none]  ${
                  dark ? "hover:bg-blue-500" : "hover:bg-gray-100"
                }`}
              >
                {label}
              </AppLink>
            );
          })}
        </Group>
        <Group>
          <div className="hidden items-center w-11 h-11 sm:flex">
            <ProfileIcon />
          </div>
        </Group>
        <Group spacing={0} className="w-[260px]" position="right" noWrap>
          <div className="flex mr-3">
            <SnsIcon />
          </div>
          <ActionIcon
            onClick={() => toggleColorScheme()}
            size="lg"
            className={`${dark ? "text-yellow-400" : "text-blue-400"}`}
          >
            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </Group>
      </Container>
    </MantineHeader>
  );
};
