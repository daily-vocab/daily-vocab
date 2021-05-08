import { DateTime } from "luxon";
import { writable } from "svelte/store";

const VOCAB_STORE_KEY = 'dv_vocabStoreKey'

const {subscribe, set, update} = writable([])

export const vocab = {
  subscribe,
  loadVocab: async () => {
    return new Promise((resolve) => {
      const vocabString = localStorage.getItem(VOCAB_STORE_KEY) || '[]'
      const vocabItems = JSON.parse(vocabString)
      set(vocabItems)
      resolve()
    })
  },
  addVocab: (vocab) => {
    update(vocabItems => {
      const vocabToAdd = {
          word: vocab.word,
          sentences: [{ text: vocab.usage, createdAt: DateTime.local() }],
          createdAt: DateTime.local()
        }
        const updatedVocabItems = [...vocabItems, vocabToAdd]
        const vocabString = JSON.stringify(updatedVocabItems)
        localStorage.setItem(VOCAB_STORE_KEY, vocabString)
        return updatedVocabItems
    })
  },
  clearVocabs: async () => new Promise((resolve) => {
    localStorage.setItem(VOCAB_STORE_KEY, '[]')
    const updatedVocabs = []
    set(updatedVocabs)
    resolve(updatedVocabs)
  })
}