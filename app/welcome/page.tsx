"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Welcome from "../../src/lib/Welcome";

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    const auth = sessionStorage.getItem("authenticated");
    if (auth !== "true") {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <Welcome />
    </>
  );
}
