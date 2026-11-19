import { env } from "cloudflare:workers";
import { handleProgress } from "../../../lib/progress-model.mjs";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  return handleProgress(request, env.DB, request.headers.get("oai-authenticated-user-id"));
}
export async function PUT(request: Request) {
  return handleProgress(request, env.DB, request.headers.get("oai-authenticated-user-id"));
}
