<template lang="pug">
    el-form-item( size="small" :label="' '")
      el-upload.upload-demo(
        action=""
        :http-request="handleIUpload"
        :before-upload="checkFileType"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :list-type="listType"
        v-bind="uploadBind"
      )
        el-button(v-if="['text','picture'].includes(listType)" size="large" type="primary") {{ $t('upload') }}
        i.el-icon-plus(v-else-if="listType=='picture-card'")
        .el-upload__tip.red--text(slot="tip") {{ $t('g_uploadFailMsg',{type:'jpg/png',size:'1MB'}) }}
</template>
<script>
import { uploadFile } from '@/api/public';

export default {
  name: 'UploadForm',
  props: {
    uploadBind: {
      type: Object,
      required: false,
      default: () => {
        return {
          limit: 5,
          accept: 'image/jpeg, image/png',
          multiple: false,
        };
      },
    },
    fileList: {
      type: Array,
      required: true,
    },
    listType: {
      type: String,
      required: false,
      default: 'picture',
    },
    checkFileTypeList: {
      type: Array,
      required: false,
      default: () => [],
    },
    checkFileTypeMsg: {
      type: String,
      required: false,
      default: '',
    },
    sizeOverLimit: {
      type: Object,
      required: false,
      default: () => {
        return {
          size: 1,
          msg: '1mb',
        };
      },
    },
    tipTypeMsg: {
      type: String,
      required: false,
      default: 'jpg/png',
    },
    tipSizeMsg: {
      type: String,
      required: false,
      default: '1MB',
    },
  },
  methods: {
    async handleIUpload(response) {
      const { file } = response;
      const form = new FormData();
      const fileArray = [];
      fileArray.push(file);
      form.append('file', fileArray[0]);
      const {
        data: { filePath },
      } = await uploadFile(form);
      this.fileList.push({ url: filePath });
    },
    checkFileType({ size, type }) {
      const sizeOverLimit = size / 1024 / 1024 > this.sizeOverLimit.size;
      if (sizeOverLimit) {
        this.$message.error(this.$t('g_fileSizeCheck', { msg: this.sizeOverLimit.msg }));
        return false;
      }
      if (this.checkFileTypeList.length > 0 && !this.checkFileTypeList.includes(type)) {
        this.$message.error(this.$t('g_fileTypeCheck', { msg: this.checkFileTypeMsg }));
        return false;
      }
      return true;
    },
    handleRemove(file, fileList) {
      this.$emit('updateFileList', fileList !== null ? fileList : []);
    },
    handlePreview(file) {
      console.log(file);
    },
  },
};
</script>
