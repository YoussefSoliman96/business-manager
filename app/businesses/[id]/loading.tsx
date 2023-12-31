import { Box, Card, Flex } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const LoadingBusinessDetailPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex className="gap-3">
        <Skeleton width="10rem" />
        <Skeleton width="10rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingBusinessDetailPage;
