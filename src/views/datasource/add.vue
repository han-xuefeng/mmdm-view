<template>
  <div class="mixin-components-container">
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span v-if="isEdit===false">添加数据源</span>
          <span v-if="isEdit===true">修改数据源</span>
        </div>
        <div style="margin-bottom:50px;">
          <el-form ref="form" :model="form" label-width="140px">
            <el-form-item label="数据源名称" class="is-required">
              <el-input v-model="form.name" placeholder="数据源名称" />
            </el-form-item>
            <el-form-item label="Host" class="is-required">
              <el-input v-model="form.host" placeholder="主机名" />
            </el-form-item>
            <el-form-item label="用户名" class="is-required">
              <el-input v-model="form.user_name" placeholder="用户名" />
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.password" placeholder="密码" />
            </el-form-item>
            <el-form-item label="端口">
              <el-input v-model="form.port" placeholder="端口" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" :disabled="submitButDisabled" @click="handleSubmit">立即提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { datasourceCreate, datasourceDetail, datasourceUpdate } from '@/api/datasource'
export default {
  name: 'DatasourceCreate',
  data() {
    return {
      isEdit: false,
      submitButDisabled: false,
      form: {
        name:'',
        user_name:'',
        host:'',
        port:'',
        password:''
      }
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    if (id > 0) {
      this.isEdit = true
      this.fetchData(id)
    }
  },
  methods: {
    fetchData(id) {
      const query = { 'id': id }
      datasourceDetail(query).then(response => {
        this.form.id = response.data.id
        this.form.name = response.data.name
        this.form.host = response.data.host
        this.form.user_name = response.data.userName
        this.form.port = response.data.port
        this.form.password = response.data.password
      }).catch(() => {
      })
    },
    handleSubmit() {
      this.submitButDisabled = true
      const query = Object.assign({}, this.form)
      if (this.isEdit) {
        datasourceUpdate(query).then(response => {
          this.submitButDisabled = false
          this.$notify({
            title: 'Success',
            message: '修改成功',
            type: 'success',
            duration: 2000
          })
        }).catch(() => {
          this.submitButDisabled = false
        })
      } else {
        datasourceCreate(query).then(response => {
          this.submitButDisabled = false
          this.$notify({
            title: 'Success',
            message: '添加成功',
            type: 'success',
            duration: 2000
          })
        }).catch(() => {
          this.submitButDisabled = false
        })
      }
    }
  }
}

</script>

<style scoped>
.mixin-components-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: calc(100vh - 84px);
}
.component-item{
  min-height: 100px;
}
</style>
