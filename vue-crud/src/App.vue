<template>
  <button v-on:click="addclick">新增</button>
  <button v-on:click="updateclick">修改</button>
  <button v-on:click="deleteclick">刪除</button>
  <button v-on:click="selectclick">查詢</button>
  <div class="result">
    <ViewALL v-if="viewall"></ViewALL>
    <Edit v-if="addedit" actions="新增"></Edit>
    <Search
      v-if="updatesearch"
      actions="修改"
      :actionflag="updatesearch"
    ></Search>
    <Search
      v-if="deletesearch"
      actions="刪除"
      :actionflag="deletesearch"
    ></Search>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Edit from "./components/Edit.vue";
import ViewALL from "./components/ViewAll.vue";

export default {
  name: "App",
  components: {
    Search,
    Edit,
    ViewALL,
  },
  data() {
    return {
      viewall: false,
      addedit: false,
      updatesearch: false,
      deletesearch: false,
    };
  },
  methods: {
    selectclick: function () {
      this.viewall = true;
      this.addedit = this.updatesearch = this.deletesearch = false;
    },
    addclick: function () {
      this.addedit = true;
      this.viewall = this.updatesearch = this.deletesearch = false;
    },
    updateclick: function () {
      this.updatesearch = true;
      this.addedit = this.viewall = this.deletesearch = false;
    },
    deleteclick: function () {
      this.deletesearch = true;
      this.addedit = this.updatesearch = this.viewall = false;
    },
  },
};
</script>

<style>
button {
  margin: 0 5px 0 0;
}
.result {
  margin: 10px 0 0 0;
}
</style>
