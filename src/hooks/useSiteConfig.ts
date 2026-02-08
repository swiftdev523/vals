import { useState, useEffect } from "react";

export function useSiteConfig() {
  const [config, setConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    try {
      const response = await fetch("/api/admin/config");
      const data = await response.json();
      setConfig(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to load config:", error);
      setLoading(false);
    }
  };

  return { config, loading, reload: loadConfig };
}
