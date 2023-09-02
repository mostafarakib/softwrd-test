<script>
    import '../styles/app.css';
    import Navbar from '$lib/Navbar.svelte';
</script>
<div class="flex flex-col min-h-screen">
  <Navbar></Navbar>
  <slot></slot>
</div>
<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>