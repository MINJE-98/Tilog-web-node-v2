export const dateScopeUnion = {
  All: "All",
  Daily: "Daily",
  Weekly: "Weekly",
  Monthly: "Monthly",
} as const;

export type DateScope = keyof typeof dateScopeUnion;
