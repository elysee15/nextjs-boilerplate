import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { AppConfig } from "@/utils/app-config";

export default getRequestConfig(async ({ locale }) => {
  if (!AppConfig.locales.includes(locale)) notFound();

  return {
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
