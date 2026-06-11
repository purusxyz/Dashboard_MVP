import * as Icons from "lucide-react";

export type IconName = keyof typeof Icons;

export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: IconName;
}