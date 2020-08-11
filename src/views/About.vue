<template>
    <div class="about">
        <h1>About</h1>
        <p>Worktunes is a web app designed and developed by Jordi Enric</p>
        <br>
        <p><a href="https://joen.co">website: joen.co</a></p>
        <p><a href="https://twitter.com/joen_co">Twitter: joen_co</a></p>
        <p><a href="https://github.com/jordienr/worktunes.co">Code</a></p>
        <p>Don't expect really good commit messages, I built this in an afternoon.</p>
        <div class="divider"></div>
        <article>
            <h3>What is worktunes built with?</h3>
            <ul>
                <li>UI: Vue</li>
                <li>DB: Firebase</li>
                <li>Host: Netlify</li>
                <li>Other: Youtube Iframe API</li>
            </ul>
        </article>
        <article>
            <h3>Can I add worktunes to my website as an iframe?</h3>
            <p>Go ahead :)</p>
        </article>
    </div>
</template>

<style lang="scss" scoped>
.about {
    max-width: 1100px;
    width: 100%;
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
    }
    ul {
        color: $gray-100;
        font-family: $sans-serif;
        line-height: 1.5rem;
        letter-spacing: 1px;
        font-size: 1.2rem;
    }
}
</style>