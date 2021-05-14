const c1 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Genemator\\Developer\\telegraf\\node_modules\\gridsome\\app\\pages\\404.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-doc-vue" */ "C:\\Users\\Genemator\\Developer\\telegraf\\src\\templates\\Doc.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\Genemator\\Developer\\telegraf\\src\\pages\\Index.vue")

export default [
  {
    name: "404",
    path: "/404/",
    component: c1
  },
  {
    path: "/:slug/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c1
  }
]
