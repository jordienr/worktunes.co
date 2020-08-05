<template>
    <div class="contact-form">
        <form action="https://formspree.io/mzbjoynj" method="POST">
        <label for="name">
            Name
            <input type="text" name="name">
        </label>
        <label for="email">
            Email
            <input type="email" name="_replyto">
        </label>
        <label for="message">
            Message
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </label>
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.contact-form {
    form {
        display: flex;
        flex-direction: column;
        font-family: $sans-serif;
        label {
            display: flex;
            flex-direction: column;
            margin: .5rem;
            font-weight: bold;
            font-size: 1.2rem;
            input, textarea {
                margin-top: .25rem;
                font-size: 1.2rem;
                padding: .3rem;
            }
        }

        button {
            background-color: $gray-700;
            border: none;
            padding: 1rem;
            font-size: 1.2rem;
            color: $gray-100;
        }
    }
}
</style>