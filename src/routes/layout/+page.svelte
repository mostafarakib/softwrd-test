<div class="layout-container grid grid-cols-1 md:grid-cols-12 grid-rows-6 flex-grow">
    <div class="col-span-2 row-span-3 bg-blue-400"></div>
    <div class="col-span-2 row-span-3 md:row-span-2 col-start-1 row-start-4 bg-teal-400"></div>
    <div class="col-span-6 col-start-1 row-start-6 bg-fuchsia-400"></div>
    <div class="col-span-4 row-span-5 col-start-3 row-start-1 bg-rose-100"></div>
    <div class="col-span-6 row-span-2 col-start-7 row-start-1 bg-sky-400"></div>
    <div class="col-span-4 row-span-4 col-start-7 row-start-3 bg-yellow-100"></div>
    <div class="col-span-2 row-span-4 col-start-11 row-start-3 bg-emerald-400"></div>
</div>

<style>
    @media (max-width: 768px){
        .layout-container {
            display: flex;
            flex-direction: column;
        }
        .layout-container > * {
            min-height: 50vh;
        }
    }
    
</style>