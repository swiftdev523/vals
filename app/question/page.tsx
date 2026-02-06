"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ValentineQuestion from "../../src/lib/ValentineQuestion";

export default function QuestionPage() {
  const router = useRouter();

  useEffect(() => {
    const auth = sessionStorage.getItem("authenticated");
    if (auth !== "true") {
      router.push("/");
    }
  }, [router]);

  return <ValentineQuestion />;
}
