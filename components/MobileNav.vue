<template>
    <nav class="navbar">
        <div class="navbar-container">
            <!-- <div class="navbar-brand">
               
            </div> -->
            <button class="navbar-toggle" type="button" @click="toggleNavbar">
                <span class="navbar-toggle-icon"></span>
            </button>
            <div class="navbar-links" :class="{ active: isNavbarOpen }">
                <ul>
                    <li>
                        <NuxtLink to="/" exact-active-class="active" @click="toggleNavbar">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/csv-to-latex" exact-active-class="active" @click="toggleNavbar">CSV to LaTeX
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/mathml-to-latex" exact-active-class="active" @click="toggleNavbar">MathML to LaTeX
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/latex-editor" exact-active-class="active" @click="toggleNavbar">LaTeX
                            Equation Editor</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script setup>


const isNavbarOpen = ref(false)

function toggleNavbar() {
    isNavbarOpen.value = !isNavbarOpen.value
}
</script>
  
<style scoped >
/* Navbar styles */
.navbar {
    background-color: #066666;
    padding: 20px 10px;
}

.navbar-container {
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-direction: column;
}

.navbar-brand {
    font-size: 1.5rem;
}

.navbar-toggle {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
}

.navbar-toggle:focus {
    outline: none;
}

.navbar-toggle-icon {
    display: block;
    width: 30px;
    height: 3px;
    background-color: white;
    border-radius: 2px;
    position: relative;
}

.navbar-toggle-icon::before,
.navbar-toggle-icon::after {
    content: "";
    display: block;
    width: 30px;
    height: 3px;
    background-color: white;
    border-radius: 2px;
    position: absolute;
    top: -6px;
    left: 0;
}

.navbar-toggle-icon::after {
    top: 6px;
}

.navbar-links {
    display: none;
    margin-top: 2rem;
}

.navbar-links.active {
    display: block;
    width: 90vw;
    height: 100vh;
}

.navbar-links ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.navbar-links li {
    margin: 0;


}

a.active {
    background-color: #eee;
    color: #066666 !important;
}

.navbar-links a {
    display: block;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    text-decoration: none;
    color: white;
    padding: 1rem 0.5rem;
}

li:hover {
    background-color: #eee;
}

li:hover a {
    color: #066666;
}

/* Media query for screens smaller than 768px */
@media (max-width: 768px) {

    /* Hide the default navbar links */
    .navbar-links {
        display: none;
    }
}
</style>
  