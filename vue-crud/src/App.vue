<template>
  <ul class="pagination">
    <li><button @click="p1 = 'add'">新增</button></li>
    <li><button @click="p1 = 'update'">修改</button></li>
    <li><button @click="p1 = 'delete'">刪除</button></li>
    <li><button @click="p1 = 'viewall'">查詢</button></li>
  </ul>
  <div class="result">
    <Edit v-if="p1 == 'add'" actions="新增"></Edit>
    <Search
      v-if="p1 == 'update'"
      actions="修改"
      :actionflag="updatesearch"
    ></Search>
    <Search
      v-if="p1 == 'delete'"
      actions="刪除"
      :actionflag="deletesearch"
    ></Search>
    <ViewALL v-if="p1 == 'viewall'"></ViewALL>
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
      p1: "",
      cnt: 0,
    };
  },
};
</script>

<style>
ul.pagination {
  display: inline-block;
  padding: 0;
  margin: 0;
}

ul.pagination li {
  display: inline;
}

ul.pagination li button {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid #ddd;
  font-size: 18px;
}

ul.pagination li button.active {
  background-color: #eee;
  color: black;
  border: 1px solid #ddd;
}

ul.pagination li button:hover:not(.active) {
  background-color: #ddd;
}
</style>
