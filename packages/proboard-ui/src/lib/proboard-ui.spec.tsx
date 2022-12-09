import { render } from '@testing-library/react';

import ProboardUi from './proboard-ui';

describe('ProboardUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProboardUi />);
    expect(baseElement).toBeTruthy();
  });
});
