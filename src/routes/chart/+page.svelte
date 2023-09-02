<script>
    import PolarChart from "$lib/PolarChart.svelte";
    import CountryDataTable from "../../lib/CountryDataTable.svelte";
</script>

<div class="grid grid-cols-3 grid-rows-1 gap-4 p-10 chart-container">
    <div class="col-span-2"><CountryDataTable/></div>
    <div class="col-start-3"><PolarChart/></div>
</div>
    
<style>
    .chart-container{
        background-color: #F4F7FF;
    }
</style>