<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 shape-dark bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card gradient="secondary" shadow body-classes="p-lg-5">
            <h4 class="mb-1">Upload your replay(s)</h4>
            <p class="mt-0">And see how you performed.</p>
            <p class="mt-0" v-if="isSaving">Uploading {{ fileCount }} file(s)...</p>
            <p class="mt-0 text-success" v-if="isSuccess">Uploaded {{ fileCount }} file(s)!</p>
            <p class="mt-0 text-danger" v-if="isFailed">{{ uploadError }}</p>
            <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving || isSuccess" >
              <base-file-input
                :name="uploadFieldName"
                :placeholder="placeholder"
                alternative
                multiple
                addon-left-icon="fa fa-file"
                :disabled="isSaving"
                @change="filesChange($event.target.name, $event.target.files);"
                accept="*/replay"
              ></base-file-input>
            </form>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ReplayService from "../services/replayService";

const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;

export default {
  name: "upload",
  components: {},
  data() {
    return {
      service: undefined,
      placeholder: "Select file...",
      fileCount: 0,
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: "replays"
    };
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    }
  },
  mounted() {
    this.service = new ReplayService();
    this.reset();
  },
  methods: {
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
      this.fileCount = 0;
    },
    filesChange(fieldName, fileList) {
      this.reset();

      // handle file changes
      const formData = new FormData();

      if (!fileList.length) return;
      this.fileCount = fileList.length;

      for(let i = 0, l = this.fileCount; i < l; i++) {
        if (!fileList[i].name.endsWith(".replay")) {
          this.uploadError = "Uploaded a file that is not a replay!";
        }
      }

      if (this.uploadError !== null) {
        this.currentStatus = STATUS_FAILED;
        return;
      }

      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      })

      // save it
      this.save(formData);
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;

      this.service
        .upload(formData)
        .then(x => {
          this.uploadedFiles = [].concat(x);
          this.currentStatus = STATUS_SUCCESS;
        })
        .catch(err => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
    }
  }
};
</script>
<style>
</style>
