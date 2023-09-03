<script>
    import { countryDataStore } from '../stores/countryDataStore'; 
    import { onMount } from 'svelte';
    import { Chart } from 'chart.js/auto';

    function createChart (countryData){
        const ctx = document.getElementById('polar-chart');
        const sortedData = [...countryData].sort((a, b) => b.population - a.population).slice(0, 10);

        const labels = sortedData.map(country => country.name.common);
        const populations = sortedData.map(country => country.population);

        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: populations,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)',
                        'rgba(100, 200, 150, 0.5)',
                        'rgba(50, 100, 250, 0.5)',
                        'rgba(200, 75, 100, 0.5)',
                        'rgba(80, 160, 200, 0.5)',
                    ]
                }
            ]
        }

        const chart = new Chart(ctx, {
            type: 'polarArea',
            data: data,
            options: {
                responsive: true,
                plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Top 10 most populated countries'
                }
                }
            },
        })
    }

    // Unsubscribe when the component is destroyed
    onMount(() => {
        // Subscribe to the countryDataStore to get updates
        const unsubscribe = countryDataStore.subscribe((data) => {
        createChart(data);
    });
        return unsubscribe;
    });
    
</script>

<canvas id="polar-chart" width="400" height="400"></canvas>