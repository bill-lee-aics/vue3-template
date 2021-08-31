import { computed, defineComponent, toRefs } from 'vue';
import { useStore } from '@/store';
import { createUseStyles } from 'vue-jss';

const useStyles = createUseStyles({
  container: {
    '& a': {
      color: '#42b983',
    },
    '& code': {
      backgroundColor: '#eee',
      padding: '2px 4px',
      borderRadius: '4px',
      color: '#304455',
    }
  }
});

const HelloWorld = defineComponent({
  name: 'HelloWorld',
  props: ['msg'],
  setup(props: { msg: string }) {
    const { msg } = toRefs(props);
    const store = useStore();
    const count = computed(() => store.state.count);
    const classes = useStyles();

    const increment = () => {
      store.commit('increment');
    };

    return () => (
      <div class={classes.value.container}>
        <h1>{msg.value}</h1>

        <p>
          Recommended IDE setup:
          <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
          +
          <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        </p>


        <p>See <code>README.md</code> for more information.</p>

        <p>
          <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
          |
          <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
        </p>

        <button type="button" onClick={increment}>count is: {count.value}</button>
        <p>
          Edit
          <code>components/HelloWorld.vue</code> to test hot module replacement.
        </p>
      </div>
    )
  }

})

export default HelloWorld;
