"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import VideoMessage from "../../src/lib/VideoMessage";

export default function VideoMessagePage() {
  const router = useRouter();

  useEffect(() => {
    const auth = sessionStorage.getItem("authenticated");
    if (auth !== "true") {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <VideoMessage />
    </>
  );
}
