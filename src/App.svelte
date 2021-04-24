<script lang="ts">
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import { link } from 'svelte-spa-router'
</script>

<a href="/" use:link>Home</a> | <a href="/about" use:link>About</a>

<Router {routes} />
