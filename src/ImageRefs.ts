import { ref } from 'firebase/storage'
import { storage } from './firebase'

const eyes = ref(storage, 'images/eyes/')
const rickAndMorty = ref(storage, 'images/rickandmorty/')
const sweet = ref(storage, 'images/sweet/')
const tjuvgods = ref(storage, 'images/tjuvgods/')
const gomoku = ref(storage, 'images/gomoku/')
const kwitter = ref(storage, 'images/kwitter/')
const techware = ref(storage, 'images/techware/')

export default {
    eyes,
    rickAndMorty,
    sweet,
    tjuvgods,
    gomoku,
    kwitter,
    techware
}
