import { Paper, Title, Button, Text } from "@mantine/core";
import { FC } from "react";
import { Blog } from "@/type/blog";
import { AppLink } from "../ui/AppLink";

type Props = {
  blog: Blog;
};

export const BlogCard: FC<Props> = ({ blog }) => {
  return (
    <div>
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        sx={{ backgroundImage: `url(${blog.eyecatch.url})` }}
        className="flex flex-col justify-between items-start mx-auto w-[350px] h-[440px] bg-center bg-cover sm:w-[260px]"
      >
        <div>
          <Text className="font-greycliff" size="xs">
            {blog.category.name}
          </Text>
          <Title order={3} className="font-medium text-black uppercase	opacity-70">
            {blog.title}
          </Title>
        </div>
        <AppLink href={`/blogs/${blog.slug}`}>
          <Button variant="white" color="dark" className="text-white bg-gray-500">
            Read article
          </Button>
        </AppLink>
      </Paper>
    </div>
  );
};
