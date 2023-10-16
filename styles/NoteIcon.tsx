import * as React from "react";

function NoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 27 28" fill="none" {...props}>
      <mask
        id="prefix__aNote"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={27}
        height={28}
      >
        <path fill="url(#prefix__patternNote)" d="M0 0h27v27.482H0z" />
      </mask>
      <g mask="url(#prefix__aNote)">
        <path fill="currentColor" d="M-.484-.241h27.723v27.964H-.484z" />
      </g>
      <defs>
        <pattern
          id="prefix__patternNote"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image0_1_77_Note"
            transform="matrix(.00893 0 0 .00877 -.071 -.061)"
          />
        </pattern>
        <image
          id="prefix__image0_1_77_Note"
          width={128}
          height={128}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default NoteIcon;
