import { TODOList } from './TODOList';
import { render } from '@testing-library/react';

describe('TODO-ItemContainer', () => {
  describe('with a list has more than zero (3) items ', () => {
    it('renders all (3) items', () => {
      const threeTODOItems = ['Item 1', 'Item 2', 'Item 3'];

      const { getByText } = render(<TODOList todoItems={threeTODOItems} />);

      threeTODOItems.forEach((item) => {
        expect(getByText(item)).toBeDefined();
      });
    });
  });

  describe('when a list of zero items', () => {
    it('show the "No Items" message', () => {
      const noTODOItems: string[] = [];

      const { getByText } = render(<TODOList todoItems={noTODOItems} />);

      expect(getByText('No Items')).toBeDefined();
    });
  });
});
