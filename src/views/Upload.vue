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
            <p class="mt-0">(max 16 mb at a time)</p>
            <p class="mt-0" v-if="isSaving">Uploading {{ fileCount }} file(s)...</p>
            <p class="mt-0 text-success" v-if="isSuccess">Uploaded {{ fileCount }} file(s)!</p>
            <p class="mt-0 text-danger" v-if="isFailed">{{ uploadError }}</p>
            <form
              enctype="multipart/form-data"
              novalidate
              v-if="isInitial || isSaving || isSuccess"
              @keydown.enter="submit"
            >
              <base-input alternative placeholder="Username" v-model="username"></base-input>
              <base-file-input
                :placeholder="placeholder"
                alternative
                multiple
                addon-left-icon="fa fa-file"
                :disabled="isSaving"
                @change="filesChange($event.target.files);"
              ></base-file-input>
              <base-button type="default" round block size="lg" @click="submit">Upload replays</base-button>
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
      placeholder: "Select replay file(s)...",
      fileCount: 0,
      uploadError: null,
      currentStatus: null,
      formData: "",
      username: ""
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
      this.uploadError = null;
      this.fileCount = 0;
      this.formData = new FormData(); 
    },
    filesChange(fileList) {
        if (!fileList.length) return;
        this.fileCount = fileList.length;
        // append the files to FormData
        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            this.formData.append('data_file', fileList[x], fileList[x].name);
          });
      },
    submit() {

      this.formData.append("username", this.username);

      // save it
      this.save(this.formData);
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;

      this.service
        .upload(formData)
        .then(response => {
          if (response.status == "success") {
            this.fileCount = response.uploaded;
            this.currentStatus = STATUS_SUCCESS;
          }
          else {
            this.uploadError = response.message;
            this.currentStatus = STATUS_FAILED;
          }
        })
        .catch(e => {
          console.log(e);
          this.uploadError = e.response;
          this.currentStatus = STATUS_FAILED;
        });
    }
  }
};
</script>
<style>
</style>
