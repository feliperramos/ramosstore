import React, { ReactNode } from 'react';
import { CategoryContainer, CategoryText } from './CategoryBadge.styles';

interface CategoryBadgeProps {
  children: ReactNode;
}

function CategoryBadge({ children }: CategoryBadgeProps) {
  return (
    <CategoryContainer>
      <CategoryText>{children}</CategoryText>
    </CategoryContainer>
  );
}

export default CategoryBadge;
