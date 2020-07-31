export default function Textarea({ children, resize, ...props }) {
  return (
    <>
      <textarea {...props}></textarea>
      <style jsx>{`
        textarea {
          background: #fff;
          color: #000;
          border: 2px solid rgba(12, 12, 13, 0.1);
          border-radius: 4px;
          padding: 8px 16px;
          resize: ${resize};
          display: inline-flex;
          justify-content: center;
          align-items: center;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        textarea:hover,
        textarea:focus {
          border-color: #000;
          outline: #000;
        }
      `}</style>
    </>
  );
}
