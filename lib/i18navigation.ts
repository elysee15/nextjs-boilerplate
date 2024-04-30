import { AppConfig } from "@/utils/app-config";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const { usePathname, useRouter, Link } = createSharedPathnamesNavigation(
  {
    locales: AppConfig.locales,
    localePrefix: AppConfig.localePrefix,
  }
);
