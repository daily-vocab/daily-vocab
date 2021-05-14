<script>
    import { goto } from "@sapper/app";
    import { DateTime } from "luxon";
    import IconButton from "../../components/icon-button.svelte";
    import Accordion from "../../components/accordion.svelte";
    import { vocab } from "../../stores/vocab";

</script>

<section class="home">
    <h1>daily vocab</h1>

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
                <Accordion>
                    <div slot="header" class="vocab_header">
                        <div class="vocab_title">
                            <div class="vocab_word">{vocabItem.word}</div>
                            <div class="vocab_createdAt">
                                {DateTime.fromISO(
                                    vocabItem.createdAt
                                ).toRelativeCalendar()}
                            </div>
                        </div>
                        <p class="vocab_sentence">
                            {vocabItem.usage}
                        </p>
                    </div>

                    <div slot="content" class="vocab_sentence">
                        <p>{vocabItem.notes}</p>
                        <div class="vocab_actions">
                            <IconButton
                                icon="edit"
                                size="small"
                                on:click={async () => {
                                    await goto(`words/add?id=${vocabItem.id}`);
                                }}
                            />
                            <IconButton
                                icon="delete--color"
                                size="small"
                                on:click={() => vocab.deleteVocab(vocabItem.id)}
                            />
                        </div>
                    </div>
                </Accordion>
            </div>
        {/each}

        <IconButton icon="add" on:click={() => goto(`words/add`)} />
    </div>
</section>

<style>
    .vocab {
        margin: 0.5rem 0;
    }

    .vocab_header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-self: stretch;
    }

    .vocab_word {
        font-weight: 700;
        font-size: 1.5rem;
    }

    .vocab_createdAt {
        font-size: 0.75rem;
        align-self: center;
    }

    .vocab_sentence {
        margin: 1rem 0 0 0;
        text-align: start;
        font-size: 1rem;
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

    .vocab_title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    /* vocab action button */
    .vocab_actions {
        display: flex;
        justify-content: flex-end;
    }

    /* FAB button styling */
    :global(section.home .add-icon) {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
    }

    /* vocab action buttons styling */

    :global(section.home .cmp-accordion) {
        padding: 1rem 0.5rem;
    }

    :global(section.home .vocab .icon-button) {
        margin: 0 0.25rem;
    }

</style>
