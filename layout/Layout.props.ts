import { ReactNode } from 'react';

export interface LayoutProps {
  size?: 's' | 'm' | 'l';
  children: ReactNode;
}