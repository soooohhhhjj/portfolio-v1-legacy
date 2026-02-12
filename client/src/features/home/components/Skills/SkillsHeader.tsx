import { skillsStyles } from "./skillsStyles";

type SkillsHeaderProps = {
  title: string;
  subtitle: string;
};

function SkillsHeader({ title, subtitle }: SkillsHeaderProps) {
  return (
    <div className={skillsStyles.header.wrapper}>
      <h1 className={skillsStyles.header.title}>{title}</h1>
      <p className={skillsStyles.header.subtitle}>{subtitle}</p>
    </div>
  );
}

export default SkillsHeader;
