import { defineConfig } from "vite";

/** Prepends Connect middleware so it runs before Vite’s static/transform pipeline. */
function prependMiddleware(middlewares, handler) {
  middlewares.stack.unshift({
    route: "",
    handle: handler,
  });
}

function always404Plugin() {
  const handler = (_req, res) => {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("404 Not Found");
  };

  return {
    name: "always-404",
    configureServer(server) {
      prependMiddleware(server.middlewares, handler);
    },
    configurePreviewServer(server) {
      prependMiddleware(server.middlewares, handler);
    },
  };
}

export default defineConfig({
  plugins: [always404Plugin()],
});
