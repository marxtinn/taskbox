<template>
  <div>
    <div v-if="error" class="page lists-show">
      <div class="wrapper-message">
        <span class="icon-face-sad" />
        <p class="title-message">Oh no!</p>
        <p class="subtitle-message">Something went wrong</p>
      </div>
    </div>
    <div v-else class="page lists-show">
      <nav>
        <h1 class="title-page">Taskbox</h1>
      </nav>
      <PureTaskList :tasks="tasks" @archive-task="onArchiveTask" @pin-task="onPinTask" />
    </div>
  </div>
</template>

<script>
import PureTaskList from './PureTaskList.vue'
export default {
  name: 'PureInboxScreen',
  components: { PureTaskList },
  props: {
    error: { type: Boolean, default: false },
    tasks: { type: Array, default: () => [] }
  },
  emits: ['archive-task', 'pin-task'],
  setup(props, { emit }) {
    const onArchiveTask = (task) => emit('archive-task', task)
    const onPinTask = (task) => emit('pin-task', task)

    return {
      onArchiveTask,
      onPinTask
    }
  }
}
</script>
