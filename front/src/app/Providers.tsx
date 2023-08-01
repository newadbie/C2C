'use client';
import { TrpcProvider } from './TrpcProvider';

export const Providers: React.FC<Layout> = ({ children }) => {
  return <TrpcProvider>{children}</TrpcProvider>;
};
