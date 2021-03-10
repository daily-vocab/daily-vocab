<script>
import Card from "../../components/card.svelte";

    const vocabs = [
        {
            language: 'fr',
            word: 'mange',
            sentences: [
                {
                    text: 'je mange de la pizza.'
                }
            ]
        },
        {
            language: 'fr',
            word: 'arrondissement',
            sentences: [
                {
                    text: 'je suis à la deuxième arrondissement.'
                }
            ]
        }
    ]
</script>

<section>
    <h1>welcome back</h1>

    {#each vocabs as vocab}
        <Card />
    {/each}
</section>
