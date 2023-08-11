import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import { Container } from "@mui/material";

export default function Quest({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [momend, setMounted] = useState(false);
  const { id } = router.query;
  useEffect(() => {
    setMounted(true);
  }, [id]);
  const DynamicComponent = dynamic(
    () => import(`../../../components/study/${id}_move.tsx`),
    {
      // Replace `./components/Component${id}` with the actual path to your components
      loading: () => <p>Loading...{id}</p>,
      ssr: false, // Disable server-side rendering for dynamic imports
    }
  );
  return (
    momend && (
      <Container maxWidth="lg">
        <DynamicComponent />
      </Container>
    )
  );
}
