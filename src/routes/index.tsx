import { createFileRoute } from "@tanstack/react-router";
import { CampaignPage } from "@/components/campaign-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Professora Nara 18018 | Deputada Estadual" },
      { name: "description", content: "Professora Nara 18018: educação pública, diálogo, territórios e cuidado para Minas Gerais." },
      { property: "og:title", content: "Professora Nara 18018 | Deputada Estadual" },
      { property: "og:description", content: "Educação pública, diálogo, territórios e cuidado para Minas Gerais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CampaignPage,
});
