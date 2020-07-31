import cn from 'classnames';
import Link from 'next/link';
import Spacer from './spacer';

export const TABS = {
  HOT: 0,
  NEW: 1,
  ADD: 2,
};

export default function HomeTabs({ tab, setTab }) {
  const classNames = (_tab) => cn({ active: tab === _tab });

  return (
    <>
      <ul className="tab-wrapper">
        <li className="tab-item">
          <Link href="/hot">
            <a href="" className={classNames(TABS.HOT)}>
              Hot
            </a>
          </Link>
        </li>
        <Spacer x={1} inline />
        <li className="tab-item">
          <Link href="/new">
            <a href="" className={classNames(TABS.NEW)}>
              New
            </a>
          </Link>
        </li>
        <Spacer x={1} inline />
        <li className="tab-item">
          <Link href="/add">
            <a href="" className={classNames(TABS.ADD)}>
              Add
            </a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {`
          .tab-wrapper {
            display: flex;
            padding: 0;
            margin: 0;
            align-items: base-line;
            border-bottom: 2px solid rgba(12, 12, 13, 0.1);
          }

          .tab-item {
            list-style-type: none;
            color: #666;
            position: relative;
            height: 32px;
            padding: 0 16px;
          }

          .tab-item:hover {
            color: #000;
          }

          .tab-item a.active {
            color: #000;
          }

          a.active::after {
            content: ' ';
            height: 2px;
            position: absolute;
            background: #000;
            left: 0;
            bottom: -2px;
            right: 0;
          }
        `}
      </style>
    </>
  );
}
