export const track = (event, params = {}) => {
  if (typeof window === "undefined") return;

  if (import.meta.env.DEV) console.log("[track]", event, params);

  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
};
