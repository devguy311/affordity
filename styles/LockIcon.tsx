import * as React from "react";

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 22 27" fill="none" {...props}>
      <mask
        id="prefix__alock"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={22}
        height={27}
      >
        <path fill="url(#prefix__patternLock)" d="M0 0h21.305v27H0z" />
      </mask>
      <g mask="url(#prefix__alock)">
        <path fill="currentColor" d="M0 0h21.305v27H0z" />
      </g>
      <defs>
        <pattern
          id="prefix__patternLock"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image0_1_63_lock"
            transform="matrix(.0099 0 0 .00781 -.129 0)"
          />
        </pattern>
        <image
          id="prefix__image0_1_63_lock"
          width={128}
          height={128}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAF0klEQVR4nO2dT2hdRRSHv/SfUJJGoiQ1FguCGG0Fa2MXBkJ3tiJqceGqunEhWsRFQdGNhYDiyoVUcaPEXSGQFNSCSEUoiMaoRIXUkkWpSRtBntpYbBPj4k7o8zW5b+a9mXvue+d8cCjtncz85pzfu/e+2zsTMAxDLx3SAoTYAPQB/e7vc8Al4F8xRUK0uwG6gUeAYbJir0YfsLGm7TKZCeaq4kvgE+CPgvQaEbgDOAJ8BlwFVpqMq66vI65vo4RsBl4Apmi+4PViyo21uZCZGXV5EjhL+sLXxlk3tiHEQ8AZii98bZxxWoyC6APGkC98bYw5bUZCHgDOI1/s9eK802gk4ClgEfki14tFp9WIRAcwgnxhQ2OE9n/OkpybgHHSFemai1T9j7s5lJayO3QUOByhnz+BU8AXwAXgV7InfQvueC/ZE8LbgR3AfuAAsC3C2B8BT0foRx1Hae7T9xtwHHgY2NLA+Fvczx53fTWj5WgD46vmINmz+UaSfRk4BnRF1NPl+rzcoKZlNyfDg7uBCo1dz98FtifUtt2N0ch9Q8XNzcihC5ghPLkLwFCBOofcmKE6Z4h7Zmo7Gvm69wOwU0DrTjd2qN4RAa0tQT/hD3omgE4JsY5OpyFE8yJwm4TYsvM+YYn8HNgkovT/bCLTEqL9PRGlJeYeYAn/BP4C9IgoXZseMk0hN6x2Q1hFyGm0AgzIyMxlgLBvL2MyMsvHIGGnz0MyMr04RNhc9sjILBdv4Z+w00IaQziN/3zeFNJYKkKunfuENIawD//5zAhpLA278E/WCSGNjXAC/3ndK6SxFLyGf6LKeOO3HgP4z+tVIY2lYBK/JE1LCWyCafzm9o2UQMiWSEmxA9jr2XYipZBE+GoeJMuFCJIG2B3Qtp0NAGG5iIqkAfrrNwGyN3cmUwpJxCSZdh98cxGdVjDA6rW01Qi5dzED5DCfVEVafLWbAXLQYACx/x42A6TFzgA5+L67dzGpirT4ak/5HmMukgbwfVX7WlIVafHVLrZ4RNIARgkwAyjHDKAcM4ByzADKMQMoxwygHDOAcswAyjEDKMcMoJyUewR1k73vthe4H9hac/wAfs/Av+P6Xj6tRi9+q3/+IdvDqJq/yeb+NfAt2e4kLcOzZFushyyTslg/KsAzQRUQohv4FPmEtWtMUPIdRj5EPkntHh94V6NgHkU+OVriCc+a1CXmTeA0gu+3K+MccFeMjmIZoJPsps++VhbHLcDvzXYSq2B7IvZl+OG7rC6XWEVrpZW77UKUnMcyQO2vYDPSEyXnRW+ztkCJv8aUhMMUuE6gaAPMA68UPGarsZ8CDWA3bsoxAyjHDKAcM4ByzADKMQMoxwygHDOAcswAyjEDKMcMoBwzgHLMAMoxAyjHDKAcM4ByzADKMQMoxwygHDOAcswAyjEDKMcMoBytBngQGAV+djHq/s1okOfwW9f+vZTAKl4GlrhR25I7Js1X+OXypRiDaTsDDANvsPa6uo3u2HChioTRZoDXyd8TocO1UYMmA3SQbVtXj0HSbp9XKjQZoBe/Hba6XFsVaDJAyKfazgCGDswAyjEDKMcMoBwzgHLMAMoxAyjHDKAcM4ByzADKMQMoR5MBFslepKjHimurAk0G+IvsFy3U45xrqwJNBgAYj9SmbdBmgGPAbM7xWddGDdoMsAgMASfXOHbSHVNz/Yfit4svAxeBx4E7uf6K2CT5Z4a2RaMBVplFadGr0XYJMGowAyjHDKAcM4ByzADKMQMop+ivgfcBlYLHbDU6ixysaANsALoLHtPIIdYlwD7VxRMl57EMMBWpH8OfKDmPtQiyg8yR2yL1Z+RzhSzXS812FOsMsAJ8HKkvoz6niFB8iLsMuhf4Cbg1Yp/GjVSAXcBcjM5iPgdYAJ6P2J+xNi8SqfipOAhcwG+nKwv/mAceC6iDKDcDbwPTrL0lm4VfLJNdVt8BeoIq4EkRW6FsBXa7Pw1/rgA/ouwVNcMwiuQ/Y3RK/qRW8zIAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}

export default LockIcon;
