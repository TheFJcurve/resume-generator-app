import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const ResumeCardSkeleton = () => {
  return (
    <Card>
      <Skeleton width="100%" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default ResumeCardSkeleton;
