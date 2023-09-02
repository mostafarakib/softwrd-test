<script>
    import { countryDataStore } from '../stores/countryDataStore'; 
    import { onMount } from 'svelte';

    let countries = [];

    // Subscribe to the countryDataStore to get updates
    const unsubscribe = countryDataStore.subscribe((data) => {
        countries = data;
    });

    // Unsubscribe when the component is destroyed
    onMount(() => {
        return unsubscribe;
    });
</script>

<div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-left text-sm font-light bg-white rounded">
            <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" class="px-6 py-4">Flag</th>
                <th scope="col" class="px-6 py-4">Name</th>
                <th scope="col" class="px-6 py-4">Population</th>
                <th scope="col" class="px-6 py-4">CIOC</th>
                <th scope="col" class="px-6 py-4">UN Member Status</th>
                <th scope="col" class="px-6 py-4">Currencies</th>
                <th scope="col" class="px-6 py-4">Languages</th>
              </tr>
            </thead>
            <tbody>
                {#each countries as country}
                <tr
                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100
                    bg-white 
                    dark:border-neutral-500 dark:hover:bg-neutral-600">
                        <td class="whitespace-nowrap px-6 py-4 font-medium"><img src={country.flags.png} alt={country.name.common} width="30" height="20" /></td>
                        <td class="whitespace-nowrap px-6 py-4">{country.name.common}</td>
                        <td class="whitespace-nowrap px-6 py-4">{country.population}</td>
                        <td class="whitespace-nowrap px-6 py-4">{country.cioc}</td>
                        <td class="whitespace-nowrap px-6 py-4">{country.unMember ? 'Yes' : 'No'}</td>
                        <td class="whitespace-nowrap px-6 py-4">{country.currencies ? Object.keys(country.currencies).join(', ') : ''}</td>
                        <td class="whitespace-nowrap px-6 py-4">{country.languages ? Object.values(country.languages).join(', ') : ''}</td>
                </tr>
                {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
</div>

<style>
    table {
        border: 1px solid rgb(229 229 229);
    }
</style>