<script>
    import { faPlus } from "@fortawesome/free-solid-svg-icons";
    import { goto } from '@sapper/app';
    import { DateTime } from 'luxon';
    import Card from "../../components/card.svelte";
    import Ellipsis from "../../components/ellipsis.svelte";
    import IconButton from "../../components/icon-button.svelte";
    import { vocab } from '../../stores/vocab';

</script>

<section>
    <h1>welcome back</h1>

    {#if $vocab.length === 0}
    <p>uh oh 🙊 looks like you don't have any vocab yet!  No worries, let's add one now! 😃</p>
    {/if}

    {#each $vocab as vocabItem}
        <div class="vocab">
            <Card>
                <div class="vocab_header">
                    <div class="vocab_word">{vocabItem.word}</div>
                    <div class="vocab_createdAt">
                        {DateTime.fromISO(vocabItem.createdAt).toRelativeCalendar()}
                    </div>
                </div>

                <p class="vocab_sentence">{vocabItem.sentences[0].text}</p>
            </Card>
        </div>
    {/each}

    <div class='new-vocab'>
        <Ellipsis />
        <IconButton icon={faPlus} on:click={() => goto('/words/add')}/>
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
</style>
