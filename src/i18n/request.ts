import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { hasLocale } from "next-intl";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    getMessageFallback({ namespace, key, error }) {
      const path = [namespace, key].filter((part) => part != null).join(".");
      if (error.code === "MISSING_MESSAGE") {
        return path; // renders missing keys gracefully as text
      }
      return path;
    },
    onError(error) {
      if (error.code === 'MISSING_MESSAGE') {
        // Prevent fatal crashes during development for missing keys
        console.log(`Fallback triggered for: ${error.message}`);
      } else {
        console.error(error);
      }
    }
  };
});
