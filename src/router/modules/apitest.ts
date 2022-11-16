import { $t } from "@/plugins/i18n";
import type { RouteConfigsTable } from "/#/index";

const apiTestRouter: RouteConfigsTable = {
  path: "/apitest",
  redirect: "/apitest/index",
  meta: {
    icon: "rest-api",
    title: $t("menus.apiTest"),
    rank: 16
  },
  children: [
    {
      path: "/apitest/index",
      name: "api_test",
      component: () => import("@/views/apitest/index.vue"),
      meta: {
        icon: "format-chat",
        title: $t("menus.apiTest"),
        showParent: true
      }
    }
  ]
};

export default apiTestRouter;
