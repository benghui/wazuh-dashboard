/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import { i18n } from '@osd/i18n';
import { schema } from '@osd/config-schema';

import { UiSettingsParams } from 'opensearch-dashboards/server';
import { USE_NEW_HOME_PAGE } from '../common/constants';

// Wazuh: Remove the new home page configuration for now because it is not ready yet.
// To add it again it must be exported
// export const uiSettings: Record<string, UiSettingsParams> = {
export const uiSettings: Record<string, UiSettingsParams> = {
  [USE_NEW_HOME_PAGE]: {
    name: i18n.translate('home.ui_settings.useNewHomePage.label', {
      defaultMessage: 'Use New Home Page',
    }),
    value: false,
    description: i18n.translate('home.ui_settings.useNewHomePage.description', {
      defaultMessage: 'Try the new home page',
    }),
    schema: schema.boolean(),
    requiresPageReload: true,
  },
};
