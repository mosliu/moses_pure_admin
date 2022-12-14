import { $t } from "@/plugins/i18n";
import type { RouteConfigsTable } from "/#/index";

const aboutRouter: RouteConfigsTable = {
  path: "/about",
  redirect: "/about/index",
  meta: {
    // icon: "question-line",
    title: $t("menus.hsAbout"),
    rank: 150
  },
  children: [
    {
      path: "/about/index",
      name: "About",
      component: () => import("@/views/about/index.vue"),
      meta: {
        title: $t("menus.hsAbout")
      }
    }
  ]
};

export default aboutRouter;
