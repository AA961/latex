<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <NuxtLink to="/" class="navbar-item">
                <!-- <img src="/logo.png" alt="Logo" /> -->
                <!-- <h3>LaTeX Tools</h3> -->
            </NuxtLink>
            <!-- <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                @click="isNavOpen = !isNavOpen">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a> -->
        </div>
        <div class="navbar-menu is-active">
            <div class="navbar-start">
                <!-- <NuxtLink to="/csv-to-latex" class="navbar-item">CSV to LaTeX</NuxtLink>
                <NuxtLink to="/mathml-to-latex" class="navbar-item">MathML to LaTeX</NuxtLink>
                <NuxtLink to="/latex-tools" class="navbar-item">More Tools</NuxtLink> -->
            </div>
        </div>
    </nav>
</template>
  
<script>
export default {
    data() {
        return {
            isNavOpen: false,
        };
    },
};
</script>
  
<style scoped>
.navbar {
    background-color: #066666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: relative;
}

a {
    text-decoration: none;
    color: white;
    padding: 1rem 0.5rem;
}

.navbar-brand {
    display: flex;
    align-items: center;
}

.navbar-item {
    padding: 1rem;
    font-size: 1.2rem;
}

.navbar-burger {
    color: #fff;
}

.burger {
    cursor: pointer;
}

.burger:hover {
    background-color: #333;
}

.navbar-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 20;
    background-color: #066666;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    min-width: 100vw;
    display: none;
}

.navbar-menu.is-active {
    display: block;
}

@media screen and (min-width: 768px) {
    .navbar-burger {
        display: none;
    }

    .navbar-menu {
        position: static;
        background-color: transparent;
        box-shadow: none;
        display: flex;
        justify-content: flex-end;
    }

    .navbar-start {
        display: flex;
    }

    .navbar-item {
        padding: 1rem;
        font-size: 1.2rem;
        margin: 0 0.5rem;
    }
}
</style>
  