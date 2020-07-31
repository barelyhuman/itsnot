import Padding from './padding';

export default function Page({ children }) {
  return (
    <>
      <Padding all={2}>
        <div className="text-group">
          <h1 align="center">ItsNot</h1>
          <p align="center">
            <small>It Doesn't mean that!</small>
          </p>
        </div>
        <main>{children}</main>
      </Padding>
      <style jsx>
        {`
          main {
            max-width: 800px;
            margin: 0 auto;
            box-sizing: border-box;
            padding: 10px;
          }
        `}
      </style>
    </>
  );
}
