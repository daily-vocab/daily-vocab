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
        const updatedVocabItems = [...vocabItems, vocab]
        const vocabString = JSON.stringify(updatedVocabItems)
        localStorage.setItem(VOCAB_STORE_KEY, vocabString)
        return updatedVocabItems
    })
  }
}