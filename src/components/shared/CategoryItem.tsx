import React, { ReactChild } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { CategoriesCodes, categoriesNames, subcategoriesInfo, mq, Subcategory, colors } from '../../shared';
import { CategoryImage } from '../SVG';
import { SubcategoryImage } from '../SVG/subcategories';

interface CategoryItemProps {
  code: CategoriesCodes;
  children?: ReactChild;
  url?: string;
}

interface CategoryContentProps {
  code: CategoriesCodes;
  count: number;
}

interface SubcategoryContentProps {
  code: Subcategory;
}

const CategoryContent = ({ code, count }: CategoryContentProps) => {
  return (
    <>
      <Face1 color={colors.darkBlue}>
        <Face1Content>
          <CategoryImage code={code} style={{ width: '50%' }} />
          <CategoryName>{categoriesNames[code].name}</CategoryName>
          <ToolsCount>{`${count} tools`}</ToolsCount>
        </Face1Content>
      </Face1>
      <Face2>
        <Face2Content>
          <CategoryDescription>{categoriesNames[code].info}</CategoryDescription>
        </Face2Content>
      </Face2>
    </>
  );
};

const SubcategoryContent = ({ code }: SubcategoryContentProps) => {
  return (
    <>
      <Face1 color={'#8f8f8f'}>
        <Face1Content>
          <SubcategoryImage code={code} style={{ width: '40%' }} />
          <CategoryName>
            {code
              .split('_')[1]
              .replace(/-/g, ' ')
              .toUpperCase()}
          </CategoryName>
        </Face1Content>
      </Face1>
      <Face2>
        <Face2Content>
          <CategoryDescription>{subcategoriesInfo[code]}</CategoryDescription>
        </Face2Content>
      </Face2>
    </>
  );
};

// Inspired by https://codepen.io/Jhonierpc/pen/MWgBJpy
export const CategoryItem = ({ code, children, url }: CategoryItemProps) => {
  const link = url ? url : code;
  return (
    <ItemCard color={categoriesNames[code].color} to={`/${link}/`} data-testid={`category-${code}`}>
      {children}
    </ItemCard>
  );
};

CategoryItem.Category = CategoryContent;
CategoryItem.Subcategory = SubcategoryContent;

const height = 200;
const ItemCard = styled(Link)`
  &&& {
    ${mq({
      width: ['100%', '100%', '44%', '28%', '23%'],
    })};
    height: ${height}px;
    ${mq({
      margin: ['3% 1%', '3% 1%', '1% 1%', '1% 1%', '1% 1%'],
    })};
    ${mq({
      paddingLeft: ['32px', '32px', '5px', '5px', '5px'],
    })};
    ${mq({
      paddingRight: ['32px', '32px', '5px', '5px', '5px'],
    })};
    position: relative;
    cursor: pointer;
    z-index: 0;
    &:hover {
      z-index: 1;
      & > div:first-of-type {
        background: ${props => props.color};
        filter: brightness(1);
        transform: translateY(0);
        svg {
          transition: 0.5s;
          filter: none;
          opacity: 1;
        }
        & > div {
          opacity: 1;
        }
      }
      div:nth-of-type(2) {
        transform: translateY(0);
      }
    }
  }
`;

const Face1 = styled.div`
  height: ${height}px;
  transition: 0.5s;
  position: relative;
  background: ${props => props.color};
  filter: brightness(0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  ${mq({
    transform: ['translateY(0px)', 'translateY(0px)', 'translateY(100px)', 'translateY(100px)', 'translateY(100px)'],
  })};
  svg {
    transition: 0.5s;
    filter: grayscale(0.6);
    opacity: 0.8;
  }
`;

const Face1Content = styled.div`
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 80%;
}
`;

const CategoryName = styled.h3`
  opacity: 0.8;
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
`;

const ToolsCount = styled.h4`
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1em;
`;

const Face2 = styled.div`
  ${mq({
    display: ['none', 'none', 'flex', 'flex', 'flex'],
  })};
  height: ${height}px;
  transition: 0.5s;
  position: relative;
  background: #fff;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  transform: translateY(-${height / 2}px);
`;

const Face2Content = styled.div``;

const CategoryDescription = styled.div`
  margin: 0;
  padding: 0;
`;
