/**********************************************************************
 * Copyright (C) 2024 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import { get } from 'svelte/store';
import { beforeAll, expect, test, vi } from 'vitest';

import { kubernetesContextsHealths, kubernetesContextsHealthsStore } from './kubernetes-context-health';

const callbacks = new Map<string, () => Promise<void>>();
const eventEmitter = {
  receive: (message: string, callback: () => Promise<void>): void => {
    callbacks.set(message, callback);
  },
};

beforeAll(() => {
  Object.defineProperty(global, 'window', {
    value: {
      kubernetesGetContextsHealths: vi.fn(),
      isExperimentalConfigurationEnabled: vi.fn(),
      addEventListener: eventEmitter.receive,
      events: {
        receive: eventEmitter.receive,
      },
    },
  });
});

test('kubernetesContextsHealths in experimental states mode', async () => {
  vi.mocked(window.isExperimentalConfigurationEnabled).mockResolvedValue(true);
  const initialValues = [
    {
      contextName: 'context1',
      checking: true,
      reachable: false,
      offline: false,
    },
    {
      contextName: 'context2',
      checking: false,
      reachable: true,
      offline: false,
    },
  ];

  const nextValues = [
    {
      contextName: 'context1',
      checking: false,
      reachable: true,
      offline: false,
    },
    {
      contextName: 'context2',
      checking: false,
      reachable: true,
      offline: false,
    },
  ];

  vi.mocked(window.kubernetesGetContextsHealths).mockResolvedValue(initialValues);

  kubernetesContextsHealthsStore.setup();

  // send 'extensions-already-started' event
  const callbackExtensionsStarted = callbacks.get('extensions-already-started');
  expect(callbackExtensionsStarted).toBeDefined();
  await callbackExtensionsStarted!();

  await vi.waitFor(() => {
    const currentValue = get(kubernetesContextsHealths);
    expect(currentValue).toEqual(initialValues);
  }, 500);

  // data has been updated in the backend
  vi.mocked(window.kubernetesGetContextsHealths).mockResolvedValue(nextValues);

  // send an event indicating the data is updated
  const event = 'kubernetes-contexts-healths';
  const callback = callbacks.get(event);
  expect(callback).toBeDefined();
  await callback!();

  // check received data is updated
  await vi.waitFor(() => {
    const currentValue = get(kubernetesContextsHealths);
    expect(currentValue).toEqual(nextValues);
  }, 500);
  expect(vi.mocked(window.kubernetesGetContextsHealths)).toHaveBeenCalled();
});
