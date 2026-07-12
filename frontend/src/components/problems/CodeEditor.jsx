import Editor from "@monaco-editor/react";

function CodeEditor({

  language,

  code,

  setCode

}) {

  return (

    <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">

      <Editor

        height="700px"

        language={language.toLowerCase()}

        value={code}

        onChange={(value)=>

          setCode(value || "")

        }

        theme="vs-dark"

        options={{

          fontSize:16,

          fontFamily:"JetBrains Mono",

          minimap:{
            enabled:false
          },

          automaticLayout:true,

          smoothScrolling:true,

          cursorBlinking:"smooth",

          roundedSelection:true,

          scrollBeyondLastLine:false

        }}

      />

    </div>

  );

}

export default CodeEditor;