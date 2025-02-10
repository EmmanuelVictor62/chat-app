import { IconNames } from "./iconTypes";

export const icons: Record<IconNames, string> = {
  plusIcon: `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 15H11.5V11H15.5V9H11.5V5H9.5V9H5.5V11H9.5V15ZM10.5 20C9.11667 20 7.81667 19.7417 6.6 19.225C5.38333 18.6917 4.325 17.975 3.425 17.075C2.525 16.175 1.80833 15.1167 1.275 13.9C0.758333 12.6833 0.5 11.3833 0.5 10C0.5 8.61667 0.758333 7.31667 1.275 6.1C1.80833 4.88333 2.525 3.825 3.425 2.925C4.325 2.025 5.38333 1.31667 6.6 0.799999C7.81667 0.266666 9.11667 0 10.5 0C11.8833 0 13.1833 0.266666 14.4 0.799999C15.6167 1.31667 16.675 2.025 17.575 2.925C18.475 3.825 19.1833 4.88333 19.7 6.1C20.2333 7.31667 20.5 8.61667 20.5 10C20.5 11.3833 20.2333 12.6833 19.7 13.9C19.1833 15.1167 18.475 16.175 17.575 17.075C16.675 17.975 15.6167 18.6917 14.4 19.225C13.1833 19.7417 11.8833 20 10.5 20ZM10.5 18C12.7333 18 14.625 17.225 16.175 15.675C17.725 14.125 18.5 12.2333 18.5 10C18.5 7.76667 17.725 5.875 16.175 4.325C14.625 2.775 12.7333 2 10.5 2C8.26667 2 6.375 2.775 4.825 4.325C3.275 5.875 2.5 7.76667 2.5 10C2.5 12.2333 3.275 14.125 4.825 15.675C6.375 17.225 8.26667 18 10.5 18Z" fill="#21005D"/>
</svg>
`,
  bin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#49454F"/>
</svg>
`,
  paperPlane: `<svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13ZM2 13V8V3V6.5V9.5V13Z" fill="#49454F"/>
</svg>
`,
  loading: `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 50 50"
  width="50"
  height="50"
>
  <circle
    cx="25"
    cy="25"
    r="20"
    fill="none"
    stroke="#E1D8F1"
    stroke-width="5"
  />
  <circle
    cx="25"
    cy="25"
    r="20"
    fill="none"
    stroke="#65558F"
    stroke-width="5"
    stroke-linecap="round"
    stroke-dasharray="31.4 188.4"
    transform="rotate(-90 25 25)"
  >
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 25 25"
      to="360 25 25"
      dur="1s"
      repeatCount="indefinite"
    />
  </circle>
</svg>
`,
  typing: `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 120 30"
  fill="#21005D"
  width="35"
  height="24"
>
  <circle cx="15" cy="15" r="12">
    <animate
      attributeName="r"
      from="12"
      to="12"
      begin="0s"
      dur="0.8s"
      values="12; 9; 12"
      calcMode="linear"
      repeatCount="indefinite"
    />
    <animate
      attributeName="fill-opacity"
      from="1"
      to="1"
      begin="0s"
      dur="0.8s"
      values="1; .5; 1"
      calcMode="linear"
      repeatCount="indefinite"
    />
  </circle>
  <circle cx="60" cy="15" r="9" fill-opacity="0.3">
    <animate
      attributeName="r"
      from="9"
      to="9"
      begin="0.2s"
      dur="0.8s"
      values="9; 6; 9"
      calcMode="linear"
      repeatCount="indefinite"
    />
    <animate
      attributeName="fill-opacity"
      from="0.5"
      to="0.5"
      begin="0.2s"
      dur="0.8s"
      values="0.5; 0.2; 0.5"
      calcMode="linear"
      repeatCount="indefinite"
    />
  </circle>
  <circle cx="105" cy="15" r="9" fill-opacity="0.3">
    <animate
      attributeName="r"
      from="9"
      to="9"
      begin="0.4s"
      dur="0.8s"
      values="9; 6; 9"
      calcMode="linear"
      repeatCount="indefinite"
    />
    <animate
      attributeName="fill-opacity"
      from="0.5"
      to="0.5"
      begin="0.4s"
      dur="0.8s"
      values="0.5; 0.2; 0.5"
      calcMode="linear"
      repeatCount="indefinite"
    />
  </circle>
</svg>
`,
};
