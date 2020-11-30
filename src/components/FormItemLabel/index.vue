<!-- style in element-ui.scss -->
<template>
  <div class="form-item-label-container d-flex align-center">
    <label class="gray--text text--darken-3">
      <slot />
    </label>
    <slot name="custom-area" />
  </div>
</template>
