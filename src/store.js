const STORAGE_KEY = 'tasks-vuejs'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const taskSaver = store => {
    store.subscribe((mutation, {tasks}) => {
        // console.log('saving to storage')
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    })
}

export default new Vuex.Store({
    state: {
        // Current state of the application lies here.
        tasks: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),

    },
    getters: {
        getTasks: state => {
            return state.tasks
        },
    },
    mutations: {
        addTask: (state, text) => {
            var newId = Math.floor(Math.random() * 100) + 1
            state.tasks.push({ id: newId, text: text })
        },
        deleteTask: (state, id) => {
            console.log('deleting: ',id)
            state.tasks = state.tasks.filter((task) => { 
                return task.id != id;
            })
        }
    },
    actions: {},

    plugins: [taskSaver]
})