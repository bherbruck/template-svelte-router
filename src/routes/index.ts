import type { RouteDefinition } from 'svelte-spa-router'
import About from './About.svelte'
import Home from './Home.svelte'
import NotFound from './NotFound.svelte'

const routes: RouteDefinition = {
  '/': Home,
  '/about': About,
  '*': NotFound,
}

export default routes
