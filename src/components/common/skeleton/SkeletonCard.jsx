import React from "react";
import { Box, Stack } from "@mui/material";
import { Skeleton } from "@mui/material";

const SkeletonCard = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      <Stack spacing={2} style={{ margin: "2rem" }}>
        <Skeleton
          variant="circular"
          width={300}
          height={290}
          style={{ borderRadius: "5%", margin: "0.08rem" }}
        />
        <Skeleton variant="rectangular" width={300} height={90} />
        <Skeleton variant="rounded" width={300} height={60} />
      </Stack>
      <Stack spacing={2} style={{ margin: "2rem" }}>
        <Skeleton
          variant="circular"
          width={300}
          height={290}
          style={{ borderRadius: "5%", margin: "0.08rem" }}
        />
        <Skeleton variant="rectangular" width={300} height={90} />
        <Skeleton variant="rounded" width={300} height={60} />
      </Stack>
      <Stack spacing={2} style={{ margin: "2rem" }}>
        <Skeleton
          variant="circular"
          width={300}
          height={290}
          style={{ borderRadius: "5%", margin: "0.08rem" }}
        />
        <Skeleton variant="rectangular" width={300} height={90} />
        <Skeleton variant="rounded" width={300} height={60} />
      </Stack>
      <Stack spacing={2} style={{ margin: "2rem" }}>
        <Skeleton
          variant="circular"
          width={300}
          height={290}
          style={{ borderRadius: "5%", margin: "0.08rem" }}
        />
        <Skeleton variant="rectangular" width={300} height={90} />
        <Skeleton variant="rounded" width={300} height={60} />
      </Stack>
    </Box>
  );
};

export default SkeletonCard;
