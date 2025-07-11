import Task from './Task.vue'

import { action } from 'storybook/actions'

export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {}
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}
export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task')
}

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`

export const LongTitle = {
  args: {
    task: {
      ...Default.args.task,
      title: longTitleString
    }
  }
}
