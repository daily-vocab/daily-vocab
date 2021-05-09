<script>
    import { goto } from "@sapper/app";
    import { DateTime } from "luxon";
    import { onMount } from "svelte";
    import Card from "../../components/card.svelte";
    import Ellipsis from "../../components/ellipsis.svelte";
    import IconButton from "../../components/icon-button.svelte";
    import { vocab } from "../../stores/vocab";
</script>

<section class="home">
    <h1>welcome back</h1>

    <div
        class={$vocab.length === 0
            ? "home_content__novocab home_content"
            : "home_content"}
    >
        {#if $vocab.length === 0}
            <p class="novocab_message">
                uh oh 🙊 looks like you don't have any vocab yet! No worries,
                let's add one now! 😃
            </p>
        {/if}

        {#each $vocab as vocabItem}
            <div class="vocab">
                <Card>
                    <div class="vocab_header">
                        <div class="vocab_word">{vocabItem.word}</div>
                        <div class="vocab_createdAt">
                            {DateTime.fromISO(
                                vocabItem.createdAt
                            ).toRelativeCalendar()}
                        </div>
                    </div>

                    <p class="vocab_sentence">{vocabItem.usage}</p>
                </Card>
            </div>
        {/each}

        <IconButton icon="add" on:click={() => goto("words/add")} />
    </div>
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

    .new-vocab {
        display: flex;
        flex-direction: column;
        align-self: center;
        position: relative;
        top: -1.25rem;
    }

    .home_content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    .home_content__novocab {
        justify-content: center;
        align-items: center;
    }

    .novocab_message {
        text-align: center;
        margin: 2rem 1rem;
    }

    :global(.home button) {
        position: fixed;
        margin: 1rem;
        bottom: 1rem;
        right: 1rem;
    }
</style>
