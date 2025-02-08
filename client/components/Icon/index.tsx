import React from "react";

import { icons } from "@/public/icons/icon";
import { IconNames } from "@/public/icons/iconTypes";

interface IconProps {
  icon: IconNames;
}
const Icon: React.FC<IconProps> = ({ icon }): React.ReactNode => {
  return (
    <span
      aria-hidden={true}
      className={"icon"}
      data-icon="true"
      dangerouslySetInnerHTML={{ __html: icons[icon] }}
    />
  );
};

export default Icon;
