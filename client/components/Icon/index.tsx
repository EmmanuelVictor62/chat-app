import React from "react";

import { icons } from "@/public/icons/icon";
import { IconNames } from "@/public/icons/iconTypes";

interface IconProps {
  icon: IconNames;
  className?: string;
}
const Icon: React.FC<IconProps> = ({ icon, className }): React.ReactNode => {
  return (
    <span
      aria-hidden={true}
      className={className}
      data-icon="true"
      dangerouslySetInnerHTML={{ __html: icons[icon] }}
    />
  );
};

export default Icon;
