"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Flowers from "../../src/lib/Flowers";

export default function FlowersPage() {
  const router = useRouter();

  useEffect(() => {
    const auth = sessionStorage.getItem("authenticated");
    if (auth !== "true") {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <Flowers />
    </>
  );
}
