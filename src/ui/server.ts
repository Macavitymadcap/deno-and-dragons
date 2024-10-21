import { serveDir } from "@std/http/file-server";
import * as path from "jsr:@std/path";

Deno.serve(async (req) => {
  const rootPath = `${Deno.cwd()}/build`;
  const url = new URL(req.url);
  const pathname = decodeURIComponent(url.pathname);

  if (pathname.startsWith("/static")) {
    return serveDir(req, {
      fsRoot: `${rootPath}`,
    });
  }
  const filePath = pathname === "/"
    ? `${rootPath}/index.html`
    : `${rootPath}${pathname}`;
  const file = await Deno.open(filePath, { read: true });

  return new Response(file.readable);
});
