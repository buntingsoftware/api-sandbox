module.exports = {
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ]
  },
  loading: { color: "#000000" },
  router: {
    base: "/"
  },
  modules: [
    "@nuxtjs/axios"
  ],
  mode: "spa",
  axios: {
    baseURL: "/",
    proxyHeaders: false,
    credentials: true
  }
}
