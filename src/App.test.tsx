import App from './App';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('should contain an introductory message.', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('introductory-message')).toBeTruthy();
  });

  it('should contain a TODO list', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('todo-list')).toBeTruthy();
  });

  describe('todo input', () => {
    describe('when "Task 4" entered', () => {
      it('should reflect entered text inside todo input ', async () => {
        const { getByRole } = render(<App />);

        await act(() => {
          userEvent.type(getByRole('textbox'), 'Task 4');
        });

        const todoInput = screen.getByRole<HTMLInputElement>('textbox');

        await waitFor(() => {
          expect(todoInput.value).toBe('Task 4');
        });
      });

      describe('when add button is clicked', () => {
        it('should add "Task 4" to the TODO list', async () => {
          render(<App />);

          const button = screen.getByRole('button');

          await act(() => {
            userEvent.type(screen.getByRole('textbox'), 'Task 4');
          });

          await waitFor(() => {
            expect(screen.getByRole<HTMLInputElement>('textbox').value).toBe(
              'Task 4'
            );
          });

          await act(() => {
            userEvent.click(button);
          });

          await waitFor(() => {
            expect(screen.getByText('Task 4')).toBeDefined();
          });
        });
      });
    });
  });
});
