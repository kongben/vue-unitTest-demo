<template>
  <div class="user-info">
    <div class="name">{{user.name}}</div>
    <div class="desc">{{user.desc}}</div>
  </div>
</template>

<script>

import {getUserInfo} from '../apis/user';

export default {
  name: 'UserInfo',
  data() {
    return {
      user: {},
    };
  },
  created() {
    getUserInfo()
      .then((res) => {
        this.user = res;
      });
  },
};
</script>