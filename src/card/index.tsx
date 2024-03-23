import { FunctionComponent } from 'preact';
import { styled } from 'styled-components';

import { Divider } from '@shared/components';

import { Chips } from './chips';
import { Header } from './header';

const Card: FunctionComponent = () => {
  return (
    <Root>
      <Header name="Ender 3 V2" progress={0.65} />
      <Divider />
      <Chips />
    </Root>
  );
};

export default Card;

const Root = styled('ha-card')`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
`;
