"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ClientApp from "./ClientApp";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const auth = sessionStorage.getItem("authenticated");
    if (auth === "true") {
      router.push("/question");
    }
  }, [router]);

  return <ClientApp />;
}
