export const skillsStyles = {
  section: "section-style relative flex flex-col",
  content: "section-content flex flex-col relative z-10",
  wrapper: "responsiveness mb-[300px]",
  grid: "mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-3",
  header: {
    wrapper: "text-center relative ",
    title:
      "font-bruno lg:mt-[90px] text-[35px] sm:text-[38px] lg:text-5xl font-bold tracking-[2px] text-white journey-header relative",
    subtitle:
      "lg:mt-[12px] text-[13px] sm:text-[16px] lg:text-[17px] max-w-[80%] md:max-w-[100%] mx-auto text-white/70 tracking-[.3px] font-jura journey-subheader relative",
  },
  card: {
    shell:
      "group relative bg-black/90 overflow-hidden rounded-[5px] border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.06)]",
    innerBorder: "absolute inset-0 border border-white/10 rounded-inherit shadow-[inset_0_0_15px_rgba(255,255,255,0.15)]",
    shine: "absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-70 rounded-inherit",
    topAccent: "absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
    body: "relative z-10 p-6 flex flex-col gap-4",
    titleRow: "flex items-center justify-between pb-4 border-b border-white/10",
    title:
      "font-bruno text-white text-[17px] sm:text-[18px] font-semibold tracking-[0.8px]",
    iconBox: "flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 shadow-[inset_0_0_12px_rgba(255,255,255,0.08)] bg-gradient-to-br from-white/8 via-transparent to-white/5 group-hover:scale-105 transition-all duration-300",
    description:
      "font-jura text-white/70 text-[13px] sm:text-[14px] leading-relaxed tracking-[0.2px]",
    pills: "flex flex-wrap gap-6",
  },
  pill: {
    shell:
      "group flex items-center justify-center font-jura text-white/90 text-[12px] tracking-[0.3px]",
    text: "",
    iconFallback: "inline-block w-2.5 h-2.5 rounded-full bg-white/50",
  },
};
