
/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';

import CtsCtsCustomUrl from './index';
import { stateProps, configProps } from './mock';

const meta: Meta<typeof CtsCtsCustomUrl> = {
  title: 'CtsCtsCustomUrl',
  component: CtsCtsCustomUrl,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof CtsCtsCustomUrl>;

export const BaseCtsCtsCustomUrl: Story = args => {

  const props = {
    value: configProps.value,
    hasSuggestions: configProps.hasSuggestions,
    getPConnect: () => {
      return {
        getStateProps: () => {
          return stateProps;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: () => {/* nothing */},
            triggerFieldChange: () => {/* nothing */}
          };
        },
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      };
    }
  };

  return (
    <>
      <CtsCtsCustomUrl {...props} {...args} />
    </>
  );
};

BaseCtsCtsCustomUrl.args = {
  label: configProps.label,
  helperText: configProps.helperText,
  placeholder: configProps.placeholder,
  testId: configProps.testId,
  readOnly: configProps.readOnly,
  disabled: configProps.disabled,
  required: configProps.required,
  status: configProps.status,
  hideLabel: configProps.hideLabel,
  displayMode: configProps.displayMode,
  variant: configProps.variant,
  validatemessage: configProps.validatemessage
};
