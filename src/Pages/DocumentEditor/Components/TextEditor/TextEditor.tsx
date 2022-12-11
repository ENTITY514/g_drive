import * as React from "react";
import { Editor } from "draft-js";
import "./TextEditor.css";
import { BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP } from "./config";
import { useEditorApi } from "./context";

const TextEditor: React.FC = () => {
  const editorApi = useEditorApi();

  return (
    <div className={"text-editor"}>
      <Editor
        spellCheck
        handleKeyCommand={editorApi.handleKeyCommand}
        customStyleMap={CUSTOM_STYLE_MAP}
        blockRenderMap={BLOCK_RENDER_MAP}
        editorState={editorApi.state}
        onChange={editorApi.onChange}
        keyBindingFn={editorApi.handlerKeyBinding}
      />
    </div>
  );
};

export default TextEditor;
