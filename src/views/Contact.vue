<template>
    <div class="contact">
        <h1>Contact</h1>
        <ContactForm />
    </div>
</template>
<script>
import { ContactForm } from "@/components/Organisms";

export default {
  name: 'Contact Page',
  components: {
    ContactForm,
  },
  created() {
  }
};
</script>

<style lang="scss" scoped>

.contact {
    max-width: 100%;
    width: 500px;
    margin: auto;
    padding: 1rem;
    .divider {
        margin: 2rem auto;
        height: 1px;
        width: 100%;
        background-color: $gray-600;
    }
    article {
        margin-bottom: 2rem;
    }
    a {
        font-weight: 400;
        text-decoration: underline;
    }
    ul {
        color: $gray-100;
        font-family: $sans-serif;
        line-height: 1.5rem;
        letter-spacing: 1px;
        font-size: 1rem;
    }
}
</style>