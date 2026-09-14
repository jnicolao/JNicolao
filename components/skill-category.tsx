import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  subskills: string[];
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <Card className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-none transition-colors duration-500">
      <div>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white mb-4 transition-colors duration-500 font-sans">
            {title}
          </h2>
          <div className="space-y-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item"
              >
                <div className="flex items-center mb-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 mr-2 rounded-sm"></span>
                  <span className="font-medium text-indigo-800 dark:text-indigo-300 text-lg font-sans transition-colors duration-500">
                    {skill.name}
                  </span>
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 pl-4 border-l border-slate-200 dark:border-slate-700 leading-snug font-sans transition-colors duration-500">
                  {skill.subskills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
