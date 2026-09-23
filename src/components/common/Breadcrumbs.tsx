import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BreadcrumbsProps {
  to: string;
  label: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ to, label }) => {
  return (
    <div className="breadcrumb-back-row">
      <Link to={to} className="breadcrumb-back-link">
        <ArrowLeft size={16} />
        <span>{label}</span>
      </Link>
    </div>
  );
};
