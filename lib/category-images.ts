const IMAGE_FILES = {
  hero: "/800v-etm-8006.png",
  hv800: "/800v-etm-8006.png",
  programmable: "/programmable-variable-dc-power-supply-etm-5050c.png",
  triple: "/triple-output-dc-power-supply-etm-dm-kkk.png",
  precision: "/etm-k8011spl-high-precision-variable-dc-power-supply.png",
  linear: "/high-precision-linear-variable-dc-power-supply-etmi301spv.png",
  linearAlt: "/high-precision-linear-variable-dc-power-supply-etmi301spv-2.png",
  tenAmp: "/10a-variable-dc-power-supply-etm-50010.png",
  rack: "/etm-3050u.png",
} as const;

const CARD_IMAGE_POOL = [
  IMAGE_FILES.hv800,
  IMAGE_FILES.programmable,
  IMAGE_FILES.rack,
  IMAGE_FILES.tenAmp,
  IMAGE_FILES.precision,
  IMAGE_FILES.linear,
  IMAGE_FILES.linearAlt,
  IMAGE_FILES.triple,
] as const;

export function getHomepageHeroImage() {
  return IMAGE_FILES.rack;
}

export function getCategoryHeroImage(slug: string) {
  const normalized = slug.toLowerCase();

  if (normalized.includes("800v") || normalized.includes("high-voltage")) {
    return IMAGE_FILES.hv800;
  }

  if (normalized.includes("triple-output")) {
    return IMAGE_FILES.triple;
  }

  if (normalized.includes("programmable")) {
    return IMAGE_FILES.programmable;
  }

  if (normalized.includes("high-precision")) {
    return IMAGE_FILES.precision;
  }

  if (normalized.includes("linear")) {
    return IMAGE_FILES.linear;
  }

  if (normalized.includes("10a")) {
    return IMAGE_FILES.tenAmp;
  }
  if (normalized.includes("30a")) {
    return IMAGE_FILES.programmable;
  }
  if (normalized.includes("60a")) {
    return IMAGE_FILES.rack;
  }

  if (normalized.includes("rack-mount")) {
    return IMAGE_FILES.rack;
  }

  if (
    normalized.includes("120v") ||
    normalized.includes("150v") ||
    normalized.includes("240v") ||
    normalized.includes("250v")
  ) {
    return IMAGE_FILES.linearAlt;
  }

  if (
    normalized.includes("300v") ||
    normalized.includes("400v") ||
    normalized.includes("500v") ||
    normalized.includes("600v") ||
    normalized.includes("1000w")
  ) {
    return IMAGE_FILES.programmable;
  }

  return IMAGE_FILES.hero;
}

export function getCategoryCardImage(slug: string, index = 0) {
  const normalized = slug.toLowerCase();

  // Keep strong semantic matching first.
  if (normalized.includes("linear")) return IMAGE_FILES.linear;
  if (normalized.includes("triple-output")) return IMAGE_FILES.triple;
  if (normalized.includes("programmable")) return IMAGE_FILES.programmable;
  if (normalized.includes("high-precision")) return IMAGE_FILES.precision;
  if (normalized.includes("rack-mount")) return IMAGE_FILES.rack;
  if (normalized.includes("800v") || normalized.includes("high-voltage")) return IMAGE_FILES.hv800;
  if (normalized.includes("600v")) return IMAGE_FILES.hv800;
  if (normalized.includes("10a")) return IMAGE_FILES.tenAmp;
  if (normalized.includes("30a")) return IMAGE_FILES.programmable;
  if (normalized.includes("60a")) return IMAGE_FILES.rack;

  // Then rotate the remaining categories to maximize visual variety.
  return CARD_IMAGE_POOL[index % CARD_IMAGE_POOL.length];
}
