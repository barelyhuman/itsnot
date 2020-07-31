import { useEffect, useRef } from 'react';

export default function Editor(props) {
  const editor = useRef('');

  useEffect(() => {
    if (!editor || !editor.current) {
      return;
    }

    const MediumEditor = require('medium-editor');

    const _editor = new MediumEditor(editor.current, {
      placeholder: {
        text: props.placeholder || '',
        hideOnClick: true,
      },
      toolbar: {
        buttons: [
          'bold',
          'italic',
          'underline',
          'anchor ',
          'h2',
          'h3',
          'quote',
          'orderedlist',
          'unorderedlist',
        ],
      },
    });

    if (typeof document !== 'undefined') {
      _editor.subscribe('editableInput', (e) => {
        props.onChange(_editor.getContent());
      });
    }
  }, [editor]);

  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <div ref={editor} onChange={handleChange}></div>
      <style jsx>{`
        div {
          border: 2px solid rgba(12, 12, 13, 0.1);
          border-radius: 4px;
          padding: 8px;
        }

        div:hover,
        div:focus {
          outline: #000;
          border-color: #000;
        }
      `}</style>
    </>
  );
}
