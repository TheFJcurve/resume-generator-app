import { Box, Divider, SkeletonText } from "@chakra-ui/react";

const ResumeDetailSkeleton = () => {
  return (
    <Box>
        <SkeletonText mt="4" noOfLines={2} spacing="4" />
        <Divider />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        <Divider />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
    </Box>
  );
};

export default ResumeDetailSkeleton;
