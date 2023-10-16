import * as React from "react";

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10C0 4.48 4.48 0 10 0s10 4.48 10 10-4.48 10-10 10S0 15.52 0 10zm10 5c-1.74 0-3.34.56-4.65 1.5C6.66 17.44 8.26 18 10 18c1.74 0 3.34-.56 4.65-1.5A7.941 7.941 0 0010 15zm0-2c2.32 0 4.45.8 6.14 2.12A7.957 7.957 0 0018 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 1.95.7 3.73 1.86 5.12A9.947 9.947 0 0110 13zM6.5 7.5C6.5 5.57 8.07 4 10 4s3.5 1.57 3.5 3.5S11.93 11 10 11 6.5 9.43 6.5 7.5zm2 0c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S10.83 6 10 6s-1.5.67-1.5 1.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default UserIcon;
