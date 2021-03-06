import { DateTime } from "luxon";
import { v4 as uuid } from 'uuid'
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
      let updatedVocabItems = []

      if (vocab.id) {
        updatedVocabItems = vocabItems.map(v => {
          if (v.id !== vocab.id) return v;
          return {
            ...v,
            word: vocab.word,
            usage: vocab.usage,
            notes: vocab.notes,
          }
        })
      }

      else {
        const vocabToAdd = {
          id: uuid(),
          word: vocab.word,
          usage: vocab.usage,
          notes: vocab.notes,
          createdAt: DateTime.local()
        }
        updatedVocabItems = [...vocabItems, vocabToAdd]
      }
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
  }),
  deleteVocab: (vocabId) => {
    update(vocabItems => {
      let updatedVocabItems = vocabItems.filter(v => v.id !== vocabId)
      const vocabString = JSON.stringify(updatedVocabItems)
      localStorage.setItem(VOCAB_STORE_KEY, vocabString)
      return updatedVocabItems
    })
  },
}