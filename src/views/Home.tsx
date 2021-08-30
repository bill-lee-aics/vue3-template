import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';
import logoUrl from '@/assets/logo.png';
import { createUseStyles } from 'vue-jss';

const useStyles = createUseStyles({ customBg: { backgroundColor: '#eee' } });

const Home = defineComponent({
  setup() {
    const classes = useStyles();

    return () => (
      <div class={['flex flex-col justify-center items-center', classes.value.customBg]}>
        <img alt="Vue logo" src={logoUrl} />
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      </div>
    );
  },
});

export default Home;
