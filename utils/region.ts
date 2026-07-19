import type { Region } from "~/types/country";

const REGION_SWATCH_CLASSES: Record<Region, string> = {
    Africa: "bg-region-africa dark:bg-region-africa-dark",
    Americas: "bg-region-americas dark:bg-region-americas-dark",
    Asia: "bg-region-asia dark:bg-region-asia-dark",
    Europe: "bg-region-europe dark:bg-region-europe-dark",
    Oceania: "bg-region-oceania dark:bg-region-oceania-dark",
    Antarctic: "bg-atlas-muted dark:bg-atlas-muted-dark",
};

const regionSwatchClass = (region: Region) =>
    REGION_SWATCH_CLASSES[region] ?? REGION_SWATCH_CLASSES.Antarctic;

export { regionSwatchClass };
