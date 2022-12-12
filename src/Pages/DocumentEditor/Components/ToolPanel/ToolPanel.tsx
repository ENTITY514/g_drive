import { cryptico, RSAKey } from "@daotl/cryptico";
import * as React from "react";
import { useAppSelector } from "../../../../Store/hooks/redux";
import { useEditorApi } from "../TextEditor";
import { BlockType, InlineStyle } from "../TextEditor/config";
import "./ToolPanel.css";

const ToolPanel: React.FC = () => {
  const state = useAppSelector(state => state.UserSlice)
  const {
    toHtml,
    addLink,
    toggleBlockType,
    currentBlockType,
    toggleInlineStyle,
    hasInlineStyle,
  } = useEditorApi();

  function nonoid() {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="tool-panel">
      <button
        className={currentBlockType === BlockType.h1 ? "tool-panel__item_active" : "tool-panel__item"}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleBlockType(BlockType.h1);
        }}
      >
        Заголовок
      </button>
      <button
        className={currentBlockType === BlockType.h2 ? "tool-panel__item_active" : "tool-panel__item"}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleBlockType(BlockType.h2);
        }}
      >
        Подзаголовок
      </button>
      <button
        className={currentBlockType === BlockType.cite ? "tool-panel__item_active" : "tool-panel__item"}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleBlockType(BlockType.cite);
        }}
      >
        Сноска
      </button>
      <button
        className={currentBlockType === BlockType.default ? "tool-panel__item_active" : "tool-panel__item"}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleBlockType(BlockType.default);
        }}
      >
        Простой
      </button>

      {Object.values(InlineStyle).map((v) => (
        <button
          key={v}
          className={hasInlineStyle(v) ? "tool-panel__item_active" : "tool-panel__item"}
          onMouseDown={(e) => {
            e.preventDefault();
            toggleInlineStyle(v);
          }}
        >
          {v}
        </button>
      ))}

      <button
        className={"tool-panel__item"}
        onClick={() => {
          const url = prompt("URL:");
          if (url) {
            addLink(url);
          }
        }}
      >
        LINK
      </button>

      <button
        className={"tool-panel__item"}
        onClick={() => {
          var documents = localStorage.getItem("documents")
          var find = false
          if (documents !== null) {
            var array = JSON.parse(documents)
            const key: RSAKey = cryptico.generateRSAKey("iman", 1024)
            var MattsPublicKeyString = cryptico.publicKeyString(key);
            var EncryptionName = cryptico.encrypt(state.name, MattsPublicKeyString, key) as { status: string, cipher: string }
            var EncryptionRData = cryptico.encrypt(toHtml(), MattsPublicKeyString, key) as { status: string, cipher: string }
            array.forEach((element: { data: string, id: string }) => {
              if (element.id === state.id) {
                find = true
                element.data = EncryptionRData.cipher
              }
            });
            if (!find) {
              array.push({ name: EncryptionName.cipher, data: EncryptionRData.cipher, id: state.id })
            }
            localStorage.setItem("documents", JSON.stringify(array))
          }

        }}
      >
        Save
      </button>
    </div >
  );
};

export default ToolPanel;
