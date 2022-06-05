import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import StructurePage from '../pages/StructurePage.vue'
import TextPage from '../pages/TextPage.vue'
import ListsPage from '../pages/ListsPage.vue'
import LinksPage from '../pages/LinksPage.vue'
import CssPage from '../pages/CssPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path:'/', component: HomePage},
    {path:'/Structure', component: StructurePage},
    {path:'/Text', component: TextPage},
    {path:'/Lists', component: ListsPage},
    {path:'/Links', component: LinksPage},
    {path:'/Css', component: CssPage}
  ],
  mounted: function()
  {
    // From testing, without a brief timeout, it won't work.
    setTimeout(() => this.scrollFix(this.$route.hash), 1);
  },
  methods: {
    scrollFix: function(hashbang)
    {
      location.hash = hashbang;
    }
  }
})

export default router
