import React from 'react';
import Link from 'next/link';
import { COLOR_NEUTRAL } from '../config';

const Footer = () => (
  <footer>
    <ul>
      <li>(c) Automática, {new Date().getFullYear()}</li>
      <li>
        <Link href={'https://twitter.com/_automatica_'}>
          <a>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <title>twitter-square</title>
              <path
                d="M24 4.31c-.884.39-1.833.655-2.83.774 1.018-.61 1.798-1.574 2.166-2.724-.95.564-2.005.974-3.127 1.195C19.31 2.598 18.03 2 16.614 2c-2.72 0-4.924 2.205-4.924 4.924 0 .386.045.762.128 1.122C7.726 7.84 4.098 5.88 1.67 2.9c-.424.73-.667 1.574-.667 2.477 0 1.708.87 3.215 2.19 4.098-.807-.026-1.566-.247-2.23-.616v.06c0 2.387 1.697 4.377 3.95 4.83-.413.11-.848.172-1.297.172-.317 0-.626-.03-.926-.088.627 1.956 2.445 3.38 4.6 3.42-1.685 1.32-3.808 2.108-6.115 2.108-.397 0-.79-.023-1.175-.07 2.18 1.398 4.767 2.213 7.548 2.213 9.057 0 14.01-7.503 14.01-14.01 0-.213-.006-.426-.015-.637.96-.694 1.796-1.562 2.456-2.55"
                className="is-color"
                fill={COLOR_NEUTRAL}
                fillRule="evenodd"
              />
            </svg>
          </a>
        </Link>
      </li>
    </ul>
    <style jsx>
      {`
        footer {
          margin-top: 5rem;
          margin-bottom: 3rem;
          color: ${COLOR_NEUTRAL};
        }

        li {
          margin-bottom: 0.51rem;
        }
      `}
    </style>
  </footer>
);

export default Footer;
