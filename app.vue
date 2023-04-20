<template>
  <div>
    <NavBar />
    <NuxtPage />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
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
  margin-top: 30px;
  width: 300px;
  height: 200px;
}

.latex-output {
  margin-top: 20px;
  font-size: 1.3rem;
  position: relative;
}

.copy-icon {
  position: absolute;
  bottom: 4%;
  right: 4%;
  cursor: pointer;
  font-size: 1.3rem;
}

.matrix-preview {
  font-family: monospace;
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
</style>