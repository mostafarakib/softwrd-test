<div class="layout-container grid grid-cols-12 grid-rows-6 flex-grow">
    <div class="md:col-span-2 md:row-span-3 bg-blue-400"></div>
    <div class="md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-4 bg-teal-400"></div>
    <div class="md:col-span-6 md:col-start-1 md:row-start-6 bg-fuchsia-400"></div>
    <div class="md:col-span-4 md:row-span-5 md:col-start-3 md:row-start-1 bg-rose-100"></div>
    <div class="md:col-span-6 md:row-span-2 md:col-start-7 md:row-start-1 bg-sky-400"></div>
    <div class="md:col-span-4 md:row-span-4 md:col-start-7 md:row-start-3 bg-yellow-100 flex items-center justify-center md:py-10">
        <div class="mountain-container flex items-center justify-center">
            <div class="mountain-circle bg-yellow-100">
            </div>
        </div>
    </div>
    <div class="md:col-span-2 md:row-span-4 md:col-start-11 md:row-start-3 bg-emerald-400"></div>
</div>

<style>
    @media (max-width: 768px){
        .layout-container {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }
        .layout-container > * {
            min-height: 50vh;
        }
    }
    .mountain-container {
        background-color: #293462;
        height: 300px;
        width: 300px;
    }
    .mountain-circle {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        transform: rotate(45deg);
    }
    .mountain-circle::before,
    .mountain-circle::after {
        content: '';
        position: absolute;
        background: #fe5f55;
    }
    .mountain-circle::before {
        width: 30px;
        height: 30px;
        right: calc(50% - 1px);
        bottom: 0;
    }
    .mountain-circle::after{
        width: 50%;
        height: 100%;
        left: 50%;
        top: 42px;
    }
</style>