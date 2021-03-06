import React from 'react';
import { Item } from 'semantic-ui-react';
import styled from '@emotion/styled';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { colors } from '../../../../../shared';

interface ToolNameProps {
  name: string;
  githubURL?: string;
  npmURL?: string;
  websiteURL?: string;
}

export const ToolName = ({ name, githubURL, npmURL, websiteURL }: ToolNameProps) => {
  return (
    <Item>
      <Item.Content>
        <ToolNameText href={githubURL || npmURL || websiteURL} target="_blank" rel="noopener noreferrer">
          {name}
        </ToolNameText>
      </Item.Content>
    </Item>
  );
};

const ToolNameText = styled(OutboundLink)`
  font-weight: 600;
  color: ${colors.black};
`;
