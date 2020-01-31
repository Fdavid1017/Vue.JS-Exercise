<template>
  <div id="profilePicture" class="row p-0 m-0 justify-content-center">
    <label
      for="profilePic"
      class="row w-100 justify-content-center align-items-center"
      id="profilePicText"
    >
      Upload Profile Picture
    </label>
    <input
      id="profilePic"
      name="profilePic"
      type="file"
      accept="image/png, image/jpeg, image/jpg"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#profilePicText {
  $pictureBoxSize: 100px;
  width: $pictureBoxSize !important;
  height: $pictureBoxSize !important;
  background-color: white;
  border: 1px $textColor solid;
}

#profilePic {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  cursor: pointer;
}

label {
  cursor: pointer;
}
</style>
