<template>
  <!--  Текстовое поле с вьтифая немного не удобное, я сделал совё, которое лучше подойдет в карточку -->
  <div
      class="textArea"
      :class="divClasses"
      ref="editable"
      :contenteditable="editMode"
      v-on="listeners"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },

    contentClass: {
      type: String,
      required: false,
    },

    editMode: {
      type: Boolean,
      required: false,
      default: false,
    }
  },

  computed: {
    listeners() {
      return { ...this.$listeners, input: this.onInput };
    },

    divClasses() {
        let styles = this.contentClass;

        if (this.editMode)
          styles += ' textArea-edit';

        return styles;
    },
  },

  mounted() {
    this.$refs.editable.innerText = this.value;
  },

  methods: {
    onInput(e) {
      this.$emit('input', e.target.innerText);
    },
  },
};
</script>

<style scoped lang="scss">
  .textArea {
    overflow: hidden;
    outline: none;
    padding: 0 4px;

    &-edit {
      -webkit-box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);
      box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);
    }
  }
</style>