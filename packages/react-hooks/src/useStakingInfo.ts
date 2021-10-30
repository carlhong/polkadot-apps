// Copyright 2017-2021 @polkadot/app-bounties authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveStakingAccount } from '@polkadot/api-derive/types';

import { useApi } from './useApi';
import { useCall } from './useCall';
import { createNamedHook } from './useNamedHook';

function useStakingInfoImpl (accountId: string | null): DeriveStakingAccount | undefined {
  const { api } = useApi();

  return useCall<DeriveStakingAccount>(api.derive.staking?.account, [accountId]);
}

export const useStakingInfo = createNamedHook('useStakingInfo', useStakingInfoImpl);
