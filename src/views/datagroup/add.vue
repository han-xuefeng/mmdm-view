<template>
  <div class="mixin-components-container">
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span v-if="isEdit===false">添加数据组</span>
          <span v-if="isEdit===true">修改数据组</span>
        </div>
        <div style="margin-bottom:50px;">
          <el-form ref="form" :model="form" label-width="140px">
            <el-form-item label="数据组名称" class="is-required">
              <el-input v-model="form.name" placeholder="数据组名称" />
            </el-form-item>
            <el-form-item label="组前缀" class="is-required">
              <el-input v-model="form.prefix" placeholder="prefix" />
            </el-form-item>
            <el-form-item label="数据源" class="is-required">
              <el-select v-model="form.source_id" placeholder="请选择">
                <el-option v-for="item in datasourceList" :key="item.name" :label="item.name" :value="item.id" />
              </el-select>
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
import { datagroupCreate, datagroupDetail, datagroupUpdate } from '@/api/datagroup'
import { datasourceListAll } from '@/api/datasource'
export default {
  name: 'DatagroupCreate',
  data() {
    return {
      isEdit: false,
      submitButDisabled: false,
      form: {
        name: '',
        user_name: '',
        host: '',
        port: '',
        password: '',
        source_id: ''
      },
      datasourceList: []
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    if (id > 0) {
      this.isEdit = true
      this.fetchData(id)
    }
    this.fetchDatasourceList()
  },
  methods: {
    fetchData(id) {
      const query = { 'id': id }
      datagroupDetail(query).then(response => {
        this.form.id = response.data.id
        this.form.name = response.data.name
        this.form.host = response.data.host
        this.form.user_name = response.data.userName
        this.form.port = response.data.port
        this.form.password = response.data.password
      }).catch(() => {
      })
    },
    fetchDatasourceList() {
      datasourceListAll().then(response => {
        this.datasourceList = response.data.list
      }).catch(() => {
      })
    },
    handleSubmit() {
      this.submitButDisabled = true
      const query = Object.assign({}, this.form)
      if (this.isEdit) {
        datagroupUpdate(query).then(response => {
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
        datagroupCreate(query).then(response => {
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
