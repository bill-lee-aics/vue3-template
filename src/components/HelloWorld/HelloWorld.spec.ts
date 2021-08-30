import { render } from '@testing-library/vue';
import HelloWorld from './HelloWorld.vue';

test('render HelloWorld', async () => {
  const { getByText } = render(HelloWorld, { props: { msg: 'Hello Vue 3' } });
  getByText('Hello Vue 3');
});
