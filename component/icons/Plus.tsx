import * as React from "react";

function Plus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M11.75 4.5a.75.75 0 01.75.75V11h5.75a.75.75 0 110 1.5H12.5v5.75a.75.75 0 11-1.5 0V12.5H5.25a.75.75 0 110-1.5H11V5.25a.75.75 0 01.75-.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Plus;
