<template>
  <div class="sidebar">
    <User/>
    <div class="icons">
      <router-link to="/detail" title="笔记">
        <Icon name="biji"/>
      </router-link>
      <router-link to="/notebook" title="笔记本">
        <Icon name="bijiben"/>
      </router-link>
      <router-link to="/trash" title="回收站">
        <Icon name="huishouzhan"/>
      </router-link>
    </div>
    <div class="logout" @click="logout" title="注销登陆">
      <Icon name="tuichu"/>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';
import User from '@/components/User.vue';
import LoginApi from "@/api/LoginApi";

export default {
  name: 'Sidebar',
  components: {User, Icon},
  methods: {
    logout() {
      LoginApi.logout().then(data => {
        this.$router.push({path: 'login'});
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: relative;
  width: 56px;
  height: 100vh;
  text-align: center;
  background: #2c333c;
  color: white;
}

.icons {
}

.icons > a {
  margin: 15px auto;
  display: block;
}

.icons > .router-link-active {
  background: #5e6266;
}

.icon {
  color: #fff;
  width: 24px;
  height: 24px;
}

.logout {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  cursor: pointer;
}
</style>
