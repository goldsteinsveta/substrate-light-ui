// Copyright 2017-2019 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import SUIProgress from 'semantic-ui-react/dist/commonjs/modules/Progress/Progress';

import { SUIProgressBarSize } from './types';

interface IProps {
  color?: any; // FIXME
  disabled?: boolean;
  percent?: number;
  size?: SUIProgressBarSize;
  value?: number;
}

export function Progress (props: IProps) {
  const { color = 'blue', disabled, percent, size } = props;

  return (
    <SUIProgress
      color={color}
      disabled={disabled}
      percent={percent}
      size={size}
    />
  );
}