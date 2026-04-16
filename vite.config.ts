import type { Connect } from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** Prepends middleware so it runs before Vite’s static / transform handlers. */
function prependMiddleware(
  middlewares: Connect.Server,
  handler: Connect.NextHandleFunction,
) {
  // Connect layer shape; typed loosely for compatibility across vite/connect versions.
  middlewares.stack.unshift({
    route: '',
    handle: handler,
  } as Parameters<Connect.Server['stack']['unshift']>[0])
}

function all404(): {
  name: string
  configureServer: (server: { middlewares: Connect.Server }) => void
  configurePreviewServer: (server: { middlewares: Connect.Server }) => void
} {
  const handler: Connect.NextHandleFunction = (_req, res) => {
    res.statusCode = 404
    res.end()
  }
  return {
    name: 'all-404',
    configureServer(server) {
      prependMiddleware(server.middlewares, handler)
    },
    configurePreviewServer(server) {
      prependMiddleware(server.middlewares, handler)
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [all404(), react()],
})
