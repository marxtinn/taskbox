import PureInboxScreen from './PureInboxScreen.vue'

import { fireEvent, within } from 'storybook/test'

export default {
  component: PureInboxScreen,
  title: 'PureInboxScreen',
  tags: ['autodocs']
}

export const Default = {
  args: {
    tasks: [
      { id: '1', title: 'Something', state: 'TASK_INBOX' },
      { id: '2', title: 'Something more', state: 'TASK_INBOX' },
      { id: '3', title: 'Something else', state: 'TASK_INBOX' },
      { id: '4', title: 'Something again', state: 'TASK_INBOX' },
      { id: '5', title: 'Something pinned', state: 'TASK_PINNED' }
    ]
  }
}

export const Error = {
  args: { error: true }
}

export const WithInteractions = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Simulates pinning the first task
    await fireEvent.click(canvas.getByLabelText('pinTask-1'))
    // Simulates pinning the third task
    await fireEvent.click(canvas.getByLabelText('pinTask-3'))
  }
}
