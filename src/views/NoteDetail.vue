<template>
<div class="note-detail">
  <h1>{{msg}}: {{$route.params.noteId}}</h1>
</div>
</template>

<script>
export default {
  name: 'NoteDetail',
  data() {
    return{
      msg: '笔记详情页'
    }
  }
};
</script>

<style lang="scss" scoped>

</style>