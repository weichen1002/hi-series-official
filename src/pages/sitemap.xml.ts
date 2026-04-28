import type { APIRoute } from "astro";
import { products } from "@data/site";

const pages = [
  "/",
  "/use-cases",
  "/pricing",
  "/about",
  "/philosophy",
  ...products.map((product) => `/products/${product.slug}`)
];

export const GET: APIRoute = ({ site }) =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
      .map((page) => `  <url><loc>${new URL(page, site).href}</loc></url>`)
      .join("\n")}\n</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml"
      }
    }
  );
