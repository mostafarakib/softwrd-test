<script>
    import PolarChart from "$lib/PolarChart.svelte";
    import CountryDataTable from "../../lib/CountryDataTable.svelte";
</script>

<div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-4 p-10 chart-container">
    <div class="md:col-span-2"><CountryDataTable/></div>
    <div class="md:col-start-3"><PolarChart/></div>
</div>
    
<style>
    .chart-container{
        background-color: #F4F7FF;
    }
</style>