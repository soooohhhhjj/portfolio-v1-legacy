// src/features/home/components/Skills.tsx
import SkillCard from "./Skills/SkillCard";
import SkillsHeader from "./Skills/SkillsHeader";
import { SKILL_GROUPS, SKILLS_SECTION_META } from "./Skills/skillsData";
import { skillsStyles } from "./Skills/skillsStyles";

export default function Skills() {
  return (
    <section className={skillsStyles.section}>
      <div className={skillsStyles.content}>
        <div className={skillsStyles.wrapper}>
          <SkillsHeader
            title={SKILLS_SECTION_META.title}
            subtitle={SKILLS_SECTION_META.subtitle}
          />

          <div className={skillsStyles.grid}>
            {SKILL_GROUPS.map((group) => (
              <SkillCard key={group.title} group={group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
