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

  if (pathname === "/pages/sheet.html" || pathname === "/sheet.html") {
    file = await Deno.open(`${rootPath}/pages/sheet.html`, { read: true });
    return new Response(file.readable);
  }

  if (url.pathname === "/search") {
    const params = new URLSearchParams(url.search);
    const query = params.get("search-value");

    if (query?.endsWith(".html")) {
      try {
        const filePath = `${rootPath}/${query}`;
        const file = await Deno.open(filePath, { read: true });
        return new Response(file.readable, {
          headers: { "Content-Type": "text/html" },
        });
      } catch (error) {
        console.error("File load error:", error);
        return new Response("Page not found", {
          status: 404,
          headers: { "Content-Type": "text/html" },
        });
      }
    }

    // If we're still searching (not a .html file yet)
    if (query) {
      return new Response("", {
        status: 200,
        headers: { "Content-Type": "text/html" },
      });
    }

    return new Response("No match found", {
      status: 200,
      headers: { "Content-Type": "text/html" },
    });
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
