import { render } from '@testing-library/vue';
import HelloWorld from './HelloWorld';
import store, { key } from '@/store';

test('render HelloWorld', async () => {
  const { getByText } = render(HelloWorld, { props: { msg: 'Hello Vue 3' }, global: { plugins: [[store, key]] } });
  getByText('Hello Vue 3');
});
