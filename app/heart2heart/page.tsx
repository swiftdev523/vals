"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Heart2Heart from "../../src/lib/Heart2Heart";

export default function Heart2HeartPage() {
  const router = useRouter();

  useEffect(() => {
    const auth = sessionStorage.getItem("authenticated");
    if (auth !== "true") {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <Heart2Heart />
    </>
  );
}
