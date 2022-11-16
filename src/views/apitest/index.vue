<template>
  <div>
    <el-card class="box-card mb-4" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">言论抽取</span>
        </div>
      </template>
      <span style="font-size: 15px">
        言论抽取是从一片文本中，抽取言论的主体、SVB动词，宾语的功能
      </span>
    </el-card>
    <div class="p-5">
      <el-card class="box-card mb-4" shadow="never">
        <template #header>
          <div class="card-header">
            <span class="font-medium">表单</span>
          </div>
        </template>
        <span style="font-size: 15px" />

        <el-form :model="form" label-width="120px">
          <el-form-item label="新闻内容">
            <el-input v-model="form.content" type="textarea" :rows="20" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button type="warning" @click="onReset">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <div class="p-5">
      <el-card class="box-card mb-4" shadow="never">
        <el-table
          v-el-table-infinite-scroll="false"
          :data="tableData"
          :infinite-scroll-disabled="true"
          height="435px"
        >
          <el-table-column type="index" />
          <el-table-column
            v-for="{ prop, label } in colConfigs"
            :key="prop"
            :prop="prop"
            :label="label"
          />
          <!--        <el-table-column prop="subject" label="主语" />-->
          <!--        <el-table-column prop="verb" label="动词" />-->
          <!--        <el-table-column prop="obj" label="言论" />-->
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  margin: 0 !important;
}
</style>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { http } from "@/utils/http";
// do not use same name with ref
const form = reactive({
  content: ""
});
const tableData = ref([]);
const colConfigs = [
  { prop: "subject", label: "主语" },
  { prop: "verb", label: "动词" },
  { prop: "obj", label: "言论" }
];
const onSubmit = async () => {
  console.log("submit!");
  const textRequest = (params?: object): object => {
    // http.request("post", "http://172.23.16.223:2201/api/speechExtract", {
    return http.request("post", "http://127.0.0.1:8778/api/speechExtract", {
      data: params
    });
  };
  const rtn = await textRequest({ text: form.content });
  console.log(rtn);
  const objectArray: object[] = rtn["data"];
  console.log(objectArray);
  for (const index in objectArray) {
    tableData.value.push({
      subject: objectArray[index]["v1"],
      verb: objectArray[index]["v2"],
      obj: objectArray[index]["v3"]
    });
  }
  console.log(tableData);
};
const onReset = () => {
  form.content = "";
};

defineOptions({
  name: "Api测试"
});
</script>
