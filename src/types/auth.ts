import { IconName } from './common';

export type UserRole = 'BLOCK' | 'PANCHAYAT' | 'AGENCY';

export interface RoleItem {
  id: string;
  title: string;
  subtitle: string;
  icon: IconName;
  role: UserRole;
}