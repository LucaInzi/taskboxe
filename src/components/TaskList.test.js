import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { WithPinnedTasks } from './TaskList.stories';

it('renders pinned tasks at the start of the list', async () => {
  render(<WithPinnedTasks {...WithPinnedTasks.args} />);

  // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
  const allTasks = await screen.findAllByTestId('task-title');
  expect(allTasks[0]).toHaveValue('Task 6 (pinned)');

  // Other tests can be added here
});
