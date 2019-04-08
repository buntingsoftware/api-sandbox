<template lang="html">
  <main>
    <h1>Bunting API</h1>
    <section>
      <input placeholder="Subdomain" v-model="subdomain" />
      <input placeholder="API Key" v-model="apiKey" />
      <input placeholder="Endpoint" v-model="endpoint" />
      <input placeholder="Email Query" v-model="email" />
      <button @click="submit">Go!</button>
    </section>
    <section>
      <h4>Querying</h4>
      <p>{{ `https://${this.subdomain}.1.bunting.com/api/${this.endpoint}?authtoken=${this.apiKey}&email_address=${this.email}` }}</p>
      <pre>{{ apiResponse }}</pre>
    </section>
  </main>
</template>

<script>
export default {
  data(){
    return {
      apiKey: "123456",
      apiResponse: "",
      endpoint: "profiles/v1/get",
      email: "ben.smith@bunting.com",
      subdomain: "demo",
    }
  },
  methods: {
    async submit(){
      if (!this.apiKey || !this.endpoint || !this.subdomain){
        return;
      }
      const res = await this.$axios.get(`https://${this.subdomain}.1.bunting.com/api/${this.endpoint}?authtoken=${this.apiKey}&email_address=${this.email}`);
      console.log(res);
      this.apiResponse = res.data;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
