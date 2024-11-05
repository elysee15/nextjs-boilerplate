import { AppConfig } from "@/utils/app-config";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: AppConfig.locales,
  defaultLocale: AppConfig.defaultLocale,
  localePrefix: AppConfig.localePrefix,
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/"],
};
