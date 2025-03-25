"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import styles from "./styles/techTooltipByCategory.module.css";

interface CategoryMap {
  [category: string]: string[];
}

interface TechTooltipByCategoryProps {
  label: string;
  extras: CategoryMap;
}

const TechTooltipByCategory: React.FC<TechTooltipByCategoryProps> = ({
  label,
  extras,
}) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span className={styles.tech_item}>{label}</span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={styles.tooltip_box}
            side="top"
            sideOffset={10}
          >
            <div className={styles.tooltip_container}>
              {Object.entries(extras).map(([category, techs]) =>
                techs.length ? (
                  <div key={category} className={styles.tooltip_col}>
                    <h4 className={styles.tooltip_category}>{category}</h4>
                    <ul className={styles.tooltip_list}>
                      {techs.map((tech) => (
                        <li key={tech} className={styles.tooltip_item}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null
              )}
            </div>
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TechTooltipByCategory;
