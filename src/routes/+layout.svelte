<script>
    import '../styles/app.css';
    import Navbar from '$lib/Navbar.svelte';
</script>
<Navbar></Navbar>
<slot></slot>
<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>