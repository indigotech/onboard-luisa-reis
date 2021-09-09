import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { H3 } from '@atomic/atm.typography';
import { Form } from '@atomic/obj.form';
import { Col } from '@atomic/obj.grid';

import { SelectField as SelectFieldComponent } from './select.component';

interface SelectFieldProps {
  onValueChange?: (value: any) => void;
  value: string;
}

interface States {
  initials: string;
  name: string;
}

const options: States[] = [
  { initials: 'AC', name: 'Acre - AC' },
  { initials: 'AL', name: 'Alagoas - AL' },
  { initials: 'AM', name: 'Amazonas - AM' },
  { initials: 'AP', name: 'Amapá - AP' },
  { initials: 'BA', name: 'Bahia - BA' },
  { initials: 'CE', name: 'Ceará - CE' },
  { initials: 'DF', name: 'Distrito Federal - DF' },
  { initials: 'ES', name: 'Espírito Santo - ES' },
  { initials: 'GO', name: 'Goiás - GO' },
  { initials: 'MA', name: 'Maranhão - MA' },
  { initials: 'MG', name: 'Minas Gerais - MG' },
  { initials: 'MS', name: 'Mato Grosso do Sul - MS' },
  { initials: 'MT', name: 'Mato Grosso - MT' },
  { initials: 'PA', name: 'Pará - PA' },
  { initials: 'PB', name: 'Paraíba - PB' },
  { initials: 'PE', name: 'Pernambuco - PE' },
  { initials: 'PI', name: 'Piauí - PI' },
  { initials: 'PR', name: 'Paraná - PR' },
  { initials: 'RJ', name: 'Rio de Janeiro - RJ' },
  { initials: 'RN', name: 'Rio Grande do Norte - RN' },
  { initials: 'RO', name: 'Rondônia - RO' },
  { initials: 'RR', name: 'Roraima - RR' },
  { initials: 'RS', name: 'Rio Grande do Sul - RS' },
  { initials: 'SC', name: 'Santa Catarina - SC' },
  { initials: 'SE', name: 'Sergipe - SE' },
  { initials: 'SP', name: 'São Paulo - SP' },
  { initials: 'TO', name: 'Tocantins - TO' },
];

export default {
  title: 'Atomic/Atoms/Select',
  compoennt: SelectFieldComponent,
  argTypes: {
    value: {
      control: {
        type: 'select',
        options: options.map((item: States) => item.initials),
      },
    },
  },
} as Meta;

const Option: React.FC<States> = ({ initials, name }) => <option value={initials}>{name}</option>;

export const Uncontrolled: React.FC<SelectFieldProps> = (props) => (
  <Col xs={12}>
    <H3>Uncontrolled</H3>
    <SelectFieldComponent initialValue="BA" onValueChange={props.onValueChange}>
      {options.map((option, index) => (
        <Option key={index} {...option} />
      ))}
    </SelectFieldComponent>
  </Col>
);

export const Controlled: React.FC<SelectFieldProps> = (props) => (
  <Col xs={12}>
    <H3>Controlled</H3>
    <SelectFieldComponent value={props.value || 'BA'}>
      {options.map((option, index) => (
        <Option key={index} {...option} />
      ))}
    </SelectFieldComponent>
  </Col>
);

export const WithFormField: React.FC<SelectFieldProps> = (props) => (
  <Col xs={12}>
    <H3>With Form.Field</H3>
    <Form.Field name="mySelect" initialValue="BA" onValueChange={props.onValueChange}>
      <SelectFieldComponent>
        {options.map((option, index) => (
          <Option key={index} {...option} />
        ))}
      </SelectFieldComponent>
    </Form.Field>
  </Col>
);
