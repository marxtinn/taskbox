<template>
  <PureInboxScreen
    :error="isError"
    :tasks="tasks"
    @archive-task="archiveTask"
    @pin-task="pinTask"
  />
</template>

<script>
import PureInboxScreen from './PureInboxScreen.vue'

import { computed } from 'vue'

import { useTaskStore } from '../store'

export default {
  name: 'InboxScreen',
  components: { PureInboxScreen },
  setup() {
    //👇 Creates a store instance
    const store = useTaskStore()

    //👇 Retrieves the error from the store's state
    const isError = computed(() => store.status === 'error')

    //👇 Retrieves the tasks from the store
    const tasks = computed(() => store.getFilteredTasks)

    //👇 Dispatches the actions back to the store
    const archiveTask = (task) => store.archiveTask(task)
    const pinTask = (task) => store.pinTask(task)

    return {
      isError,
      tasks,
      archiveTask,
      pinTask
    }
  }
}
</script>
