<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/" exact-active-class="active">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/csv-to-latex" exact-active-class="active">CSV to LaTex</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/mathml-to-latex" exact-active-class="active">MathML to LaTeX</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/latex-eqution-editor" exact-active-class="active">LaTeX Equation Editor</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
  
<style scoped>
nav {
    /* background-color: #eee; */
    padding: 1rem;
    background-color: #066666;

}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
}

a {
    text-decoration: none;
    color: white;
    padding: 1rem 0.5rem;
}

li {
    /* margin: 0 1rem; */
    font-size: 1rem;
}

.active {
    background-color: #eee;
    color: #066666;
}
</style>
  