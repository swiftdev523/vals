"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Forever from "../../src/lib/Forever";

export default function ForeverPage() {
  const router = useRouter();

  useEffect(() => {
    const auth = sessionStorage.getItem("authenticated");
    if (auth !== "true") {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <Forever />
    </>
  );
}
