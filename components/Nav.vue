<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/" exact-active-class="active">CSV to LaTex</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/mathml-to-latex" exact-active-class="active">MathML to LaTeX</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
  
<style>
nav {
    background-color: #eee;
    padding: 1rem;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
}

a {
    text-decoration: none;
    color: #066666;
    padding: 1rem;
}

li {
    margin: 0 1rem;
    font-size: 1rem;
}

.active {
    background-color: #04476f;
    color: blanchedalmond;
}
</style>
  