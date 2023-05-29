<template>
  <div id="app">

    <MobileNav />
    <NuxtPage />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,700;1,400;1,700&family=Libre+Franklin:wght@400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

#app{
  overflow: hidden;
}

.katex-html .base {
  display: none;
}



mtable {
  font-size: 3rem;
  font-family: 'Courier Prime', monospace !important;
  color: #276391;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem auto;
}

/* For screens smaller than 600px */
@media screen and (max-width: 600px) {
  .container {
    max-width: 90%;
  }
}

/* For screens between 601px and 900px */
@media screen and (min-width: 601px) and (max-width: 900px) {
  .container {
    max-width: 80%;
  }
}

/* For screens larger than 900px */
@media screen and (min-width: 901px) {
  .container {
    max-width: 1200px;
  }
}

.btn {
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  background-color: #3a3a3a;
  color: blanchedalmond;
  outline: none;
  border: none;
  padding: 0.6rem;
  margin: 1rem auto;
  font-size: 1rem;

}

.w-100 {
  width: 100%;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.col {
  flex-direction: column;
}

h2 {
  margin: 1rem auto;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #066666;
}

.subtitle {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 50px;

}


.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.dropzone-message {
  text-align: center;
}

.latex-output,
.matrix-preview,
.dropzone {
  border: 2px solid gray;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  width: 100%;
  height: 300px;
}

.latex-output {
  margin-top: 20px;
  font-size: 1.3rem;
  position: relative;
}



.matrix-preview {
  font-family: monospace;
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}

@media (max-width :500px) {
  .title {
    font-size: 2rem;
  }
}
</style>