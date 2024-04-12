"use client";

import { ComponentPropsWithoutRef } from "react";
import { SecondaryTabs } from "carbonfair-ui";

function SecondaryTabsCarbonFair(
  props: ComponentPropsWithoutRef<typeof SecondaryTabs>
) {
  return <SecondaryTabs {...(props as any)} />;
}

export default SecondaryTabsCarbonFair;
