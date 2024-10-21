import { serveDir } from "@std/http/file-server";

Deno.serve(async (req) => {
  const rootPath = `${Deno.cwd()}/build`;
  const url = new URL(req.url);
  const pathname = decodeURIComponent(url.pathname);

  if (pathname.startsWith("/static")) {
    return serveDir(req, {
      fsRoot: `${rootPath}`,
    });
  }

  let file;

  if (pathname === "/" || pathname === "/index.html") {
    file = await Deno.open(`${rootPath}/index.html`, { read: true });
    return new Response(file.readable);
  }

  try {
    file = await Deno.open(`${rootPath}${pathname}`, { read: true });
    return new Response(file.readable);
  } catch (error) {
    return new Response(`Not Found\nError: ${JSON.stringify(error, null, 2)}`, {
      status: 404,
    });
  }
});
