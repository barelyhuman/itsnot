import cx from 'classnames';

export default function Card({ children, hover, className, ...props }) {
  const classNames = cx('card', { hover }, className);
  return (
    <>
      <div className={classNames} {...props}>
        {children}
      </div>
      <style jsx>{`
        .card {
          background: #fff;
          border: 2px solid #000;
          border-radius: 4px;
        }

        .card.hover {
          border-color: rgba(12, 12, 13, 0.1);
        }

        .card.hover:hover {
          border-color: #000;
        }
      `}</style>
    </>
  );
}
