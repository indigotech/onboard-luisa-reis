import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Body, H2, H4 } from '@atomic/atm.typography';

import { Table, TD, TH, THead, TR } from '../mol.table';

export default {
  title: 'Atomic/Molecules/Table',
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

export const Default: React.FC = () => (
  <>
    <H2>Default</H2>
    <Table>
      <THead>
        <TH>
          <H4>Coluna 1</H4>
        </TH>
        <TH>
          <H4>Coluna 2</H4>
        </TH>
        <TH>
          <H4>Coluna 3</H4>
        </TH>
      </THead>
      <TR>
        <TD>
          <Body>Conteudo 1</Body>
        </TD>
        <TD>
          <Body>Conteudo 1</Body>
        </TD>
        <TD>
          <Body>Conteudo 1</Body>
        </TD>
      </TR>
      <TR>
        <TD>
          <Body>Conteudo 2</Body>
        </TD>
        <TD>
          <Body>Conteudo 2</Body>
        </TD>
        <TD>
          <Body>Conteudo 2</Body>
        </TD>
      </TR>
    </Table>
  </>
);

export const WithHover: React.FC<{ onClick?: () => void }> = (props) => (
  <>
    <H2>With hover</H2>
    <Table>
      <THead>
        <TH>
          <H4>Coluna 1</H4>
        </TH>
        <TH>
          <H4>Coluna 2</H4>
        </TH>
        <TH textAlign="right">
          <H4>Coluna 3</H4>
        </TH>
      </THead>
      <TR onClick={props.onClick}>
        <TD>
          <Body>Conteudo 1</Body>
        </TD>
        <TD>
          <Body>Conteudo 1</Body>
        </TD>
        <TD textAlign="right">
          <Body>1</Body>
        </TD>
      </TR>
      <TR onClick={props.onClick}>
        <TD>
          <Body>Conteudo 2</Body>
        </TD>
        <TD>
          <Body>Conteudo 2</Body>
        </TD>
        <TD textAlign="right">
          <Body>2</Body>
        </TD>
      </TR>
    </Table>
  </>
);
