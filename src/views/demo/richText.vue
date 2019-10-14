<template>
  <div class="rich-text">
    <CKEditor v-model="editorData" :editor="editor" @ready="onReady" />
  </div>
</template>

<script>
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn'
import CKEditor from '@ckeditor/ckeditor5-vue'
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
export default {
  name: 'DemoRichText',
  components: {
    CKEditor: CKEditor.component
  },
  data() {
    return {
      editor: DecoupledEditor,
      editorData: '',
      editorConfig: {
        // https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorconfig-EditorConfig.html
      }
    }
  },
  methods: {
    onReady(editor) {
      console.log('editor', editor)
      editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement())
    }
  }
}
</script>

<style lang="scss" scoped>
.rich-text{
  position: relative;
  padding: 8px;
  & >>> .ck.ck-editor__editable_inline {
    /* Make sure the toolbar container is always above the editable. */
    z-index: 1;

    // /* Create the illusion of the toolbar floating over the editable. */
    // box-shadow: 0 0 5px hsla( 0,0%,0%,.2 );

    /* Use the CKEditor CSS variables to keep the UI consistent. */
    border: 1px solid var(--ck-color-toolbar-border);
    border-top: none;
  }
}
</style>
