<script>
    import Card from "../../components/card.svelte";
    import { DateTime } from "luxon";

    const vocabs = [
        {
            language: "fr",
            createdAt: DateTime.now().minus({ days: 1 }),
            word: "mange",
            sentences: [
                {
                    text: "je mange de la pizza.",
                },
            ],
        },
        {
            language: "fr",
            createdAt: DateTime.now().minus({ days: 2 }),
            word: "arrondissement",
            sentences: [
                {
                    text: "je suis à la deuxième arrondissement.",
                },
            ],
        },
    ];
</script>

<section>
    <h1>welcome back</h1>

    {#each vocabs as vocab}
        <div class="vocab">
            <Card>
                <div class="vocab_header">
                    <div class="vocab_word">{vocab.word}</div>
                    <div class="vocab_createdAt">
                        {vocab.createdAt.toRelative()}
                    </div>
                </div>

                <p class="vocab_sentence">{vocab.sentences[0].text}</p>
            </Card>
        </div>
    {/each}
</section>

<style>
    .vocab {
        margin: 0.5rem 0;
    }

    .vocab_header {
        display: flex;
        justify-content: space-between;
    }

    .vocab_word {
        font-weight: 700;
    }

    .vocab_createdAt {
        font-size: 0.75rem;
        align-self: flex-start;
    }

    .vocab_sentence {
        margin: 1rem 0 0 0;
    }
</style>
