<script lang="ts">
    export let form
</script>
<h1>Reproducing timeout error</h1>
<p>Press button to run long-running function</p>
<form method="POST" action="?/callFunction">
    <button>Run function</button>
</form>
{#if form}
    <p>{form.message}</p>
{/if}