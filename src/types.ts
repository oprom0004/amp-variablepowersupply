/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CategoryData {
  slug: string;
  name: string;
  url: string;
  description: string;
  techSummary: string;
  safetyLogic: string;
  useCases: string[];
  protocols?: string[];
  physicalSpecs?: {
    cooling: string;
    interface: string;
    formFactor: string;
  };
  specs?: {
    label: string;
    value: string;
  }[];
  faqs?: {
    q: string;
    a: string;
  }[];
  engineeringInsights?: string;
  applicationBrief?: string;
}
