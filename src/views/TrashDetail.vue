<template>
  <div id="trash" class="detail">
    <div class="note-sidebar">
      <h3 class="notebook-title">回收站</h3>
      <div class="menu">
        <div>更新时间</div>
        <div>标题</div>
      </div>
      <ul class="notes">
        <li v-for="note in trashNotes">
          <router-link :to="`/trash?noteId=${note.id}`">
            <span class="date">{{ note.updatedAtFriendly }}</span>
            <span class="title">{{ note.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="note-detail">
      <div class="note-bar" v-if="true">
        <span> 创建日期: {{ curTrashNote.createdAtFriendly }}</span>
        <span> | </span>
        <span> 更新日期: {{ curTrashNote.updatedAtFriendly }}</span>
        <span> | </span>
        <span> 所属笔记本: {{ belongTo }}</span>

        <a class="btn action" @click="onRevert">恢复</a>
        <a class="btn action" @click="onDelete">彻底删除</a>
      </div>
      <div class="note-title">
        <span>{{ curTrashNote.title }}</span>
      </div>
      <div class="editor">
        <div class="preview markdown-body" v-html="compiledMarkdown"></div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginApi from "@/api/LoginApi";
import MarkdownIt from 'markdown-it'

let md = new MarkdownIt()

export default {
  name: 'TrashDetail',
  data() {
    return {
      msg: '回收站笔记详情页',
      curTrashNote: {
        id: 1,
        title: '我的笔记本',
        content: '内容',
        createdAtFriendly: '2小时前',
        updatedAtFriendly: '刚刚'
      },
      belongTo: '我的笔记本',
      trashNotes: [
        {
          id: 2,
          title: '我的笔记本',
          content: '内容',
          createdAtFriendly: '2小时前',
          updatedAtFriendly: '刚刚'
        },
        {
          id: 3,
          title: '我的笔记本',
          content: '内容',
          createdAtFriendly: '2小时前',
          updatedAtFriendly: '刚刚'
        }
      ]
    }
  },
  created() {
    LoginApi.getInfo().then(res => {
      if (!res.isLogin) {
        this.$router.push({path: '/login'})
      }
    })
  },
  methods: {
    onRevert() {
      console.log('恢复')
    },
    onDelete() {
      console.log('删除')
    }
  },
  computed: {
    compiledMarkdown() {
      return md.render(this.curTrashNote.content || '')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/detailSidebar.scss";
@import "../assets/style/notedetail.scss";

#trash {
  display: flex;
  align-items: stretch;
  background-color: #fff;
  flex: 1;

  .note-bar {
    .action {
      float: right;
      margin-left: 10px;
      padding: 2px 4px;
      font-size: 12px;
      cursor: pointer;
      background: #999999;
      color: white;
    }
  }
}
</style>
