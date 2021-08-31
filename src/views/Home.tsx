import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld/HelloWorld';
import logoUrl from '@/assets/logo.png';
import { createUseStyles } from 'vue-jss';


const Home = defineComponent({
  name: 'Home',
  setup() {

    return () => (
      <div class="flex flex-col justify-center items-center">
        <img alt="Vue logo" src={logoUrl} />
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      </div>
    );
  },
});

export default Home;
