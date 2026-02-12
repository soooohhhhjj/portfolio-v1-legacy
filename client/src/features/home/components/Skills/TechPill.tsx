import { techIconMapSkills } from "./techIconMapSkills";
import { skillsStyles } from "./skillsStyles";

type TechPillProps = {
  name: string;
};

function TechPill({ name }: TechPillProps) {
  const icon = techIconMapSkills[name];

  return (
    <div className={skillsStyles.pill.shell}>
      <span className="flex items-center">
        {icon ?? <span className={skillsStyles.pill.iconFallback} aria-hidden="true" />}
      </span>
      <span>{name}</span>
    </div>
  );
}

export default TechPill;
