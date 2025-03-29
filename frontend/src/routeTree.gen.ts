/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as LayoutTermsImport } from './routes/_layout/terms'
import { Route as LayoutReportImport } from './routes/_layout/report'
import { Route as LayoutPrivacyRequestImport } from './routes/_layout/privacy-request'
import { Route as LayoutPrivacyImport } from './routes/_layout/privacy'
import { Route as LayoutDemoRequestImport } from './routes/_layout/demo-request'
import { Route as LayoutCookieImport } from './routes/_layout/cookie'
import { Route as LayoutComplianceImport } from './routes/_layout/compliance'
import { Route as LayoutToolsSchedulerImport } from './routes/_layout/tools/scheduler'
import { Route as LayoutToolsProxyDashboardImport } from './routes/_layout/tools/proxy-dashboard'
import { Route as LayoutToolsHtmlScraperImport } from './routes/_layout/tools/html-scraper'
import { Route as LayoutToolsApiScraperImport } from './routes/_layout/tools/api-scraper'
import { Route as LayoutSolutionsTrainingAiImport } from './routes/_layout/solutions/training-ai'
import { Route as LayoutSolutionsSeoMonitoringImport } from './routes/_layout/solutions/seo-monitoring'
import { Route as LayoutSolutionsPriceMonitoringImport } from './routes/_layout/solutions/price-monitoring'
import { Route as LayoutSolutionsMarketResearchImport } from './routes/_layout/solutions/market-research'
import { Route as LayoutSolutionsLeadGenerationImport } from './routes/_layout/solutions/lead-generation'
import { Route as LayoutSolutionsEnterpriseImport } from './routes/_layout/solutions/enterprise'
import { Route as LayoutSolutionsContentAggregationImport } from './routes/_layout/solutions/content-aggregation'
import { Route as LayoutResourcesWebScrapingGuidesImport } from './routes/_layout/resources/web-scraping-guides'
import { Route as LayoutNetworkStatusImport } from './routes/_layout/network/status'
import { Route as LayoutNetworkSecurityImport } from './routes/_layout/network/security'
import { Route as LayoutNetworkProxyTypesImport } from './routes/_layout/network/proxy-types'
import { Route as LayoutNetworkLocationsImport } from './routes/_layout/network/locations'

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutTermsRoute = LayoutTermsImport.update({
  id: '/terms',
  path: '/terms',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutReportRoute = LayoutReportImport.update({
  id: '/report',
  path: '/report',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutPrivacyRequestRoute = LayoutPrivacyRequestImport.update({
  id: '/privacy-request',
  path: '/privacy-request',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutPrivacyRoute = LayoutPrivacyImport.update({
  id: '/privacy',
  path: '/privacy',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutDemoRequestRoute = LayoutDemoRequestImport.update({
  id: '/demo-request',
  path: '/demo-request',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutCookieRoute = LayoutCookieImport.update({
  id: '/cookie',
  path: '/cookie',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutComplianceRoute = LayoutComplianceImport.update({
  id: '/compliance',
  path: '/compliance',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutToolsSchedulerRoute = LayoutToolsSchedulerImport.update({
  id: '/tools/scheduler',
  path: '/tools/scheduler',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutToolsProxyDashboardRoute = LayoutToolsProxyDashboardImport.update({
  id: '/tools/proxy-dashboard',
  path: '/tools/proxy-dashboard',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutToolsHtmlScraperRoute = LayoutToolsHtmlScraperImport.update({
  id: '/tools/html-scraper',
  path: '/tools/html-scraper',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutToolsApiScraperRoute = LayoutToolsApiScraperImport.update({
  id: '/tools/api-scraper',
  path: '/tools/api-scraper',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSolutionsTrainingAiRoute = LayoutSolutionsTrainingAiImport.update({
  id: '/solutions/training-ai',
  path: '/solutions/training-ai',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSolutionsSeoMonitoringRoute =
  LayoutSolutionsSeoMonitoringImport.update({
    id: '/solutions/seo-monitoring',
    path: '/solutions/seo-monitoring',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutSolutionsPriceMonitoringRoute =
  LayoutSolutionsPriceMonitoringImport.update({
    id: '/solutions/price-monitoring',
    path: '/solutions/price-monitoring',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutSolutionsMarketResearchRoute =
  LayoutSolutionsMarketResearchImport.update({
    id: '/solutions/market-research',
    path: '/solutions/market-research',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutSolutionsLeadGenerationRoute =
  LayoutSolutionsLeadGenerationImport.update({
    id: '/solutions/lead-generation',
    path: '/solutions/lead-generation',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutSolutionsEnterpriseRoute = LayoutSolutionsEnterpriseImport.update({
  id: '/solutions/enterprise',
  path: '/solutions/enterprise',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSolutionsContentAggregationRoute =
  LayoutSolutionsContentAggregationImport.update({
    id: '/solutions/content-aggregation',
    path: '/solutions/content-aggregation',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutResourcesWebScrapingGuidesRoute =
  LayoutResourcesWebScrapingGuidesImport.update({
    id: '/resources/web-scraping-guides',
    path: '/resources/web-scraping-guides',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutNetworkStatusRoute = LayoutNetworkStatusImport.update({
  id: '/network/status',
  path: '/network/status',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutNetworkSecurityRoute = LayoutNetworkSecurityImport.update({
  id: '/network/security',
  path: '/network/security',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutNetworkProxyTypesRoute = LayoutNetworkProxyTypesImport.update({
  id: '/network/proxy-types',
  path: '/network/proxy-types',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutNetworkLocationsRoute = LayoutNetworkLocationsImport.update({
  id: '/network/locations',
  path: '/network/locations',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/compliance': {
      id: '/_layout/compliance'
      path: '/compliance'
      fullPath: '/compliance'
      preLoaderRoute: typeof LayoutComplianceImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/cookie': {
      id: '/_layout/cookie'
      path: '/cookie'
      fullPath: '/cookie'
      preLoaderRoute: typeof LayoutCookieImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/demo-request': {
      id: '/_layout/demo-request'
      path: '/demo-request'
      fullPath: '/demo-request'
      preLoaderRoute: typeof LayoutDemoRequestImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/privacy': {
      id: '/_layout/privacy'
      path: '/privacy'
      fullPath: '/privacy'
      preLoaderRoute: typeof LayoutPrivacyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/privacy-request': {
      id: '/_layout/privacy-request'
      path: '/privacy-request'
      fullPath: '/privacy-request'
      preLoaderRoute: typeof LayoutPrivacyRequestImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/report': {
      id: '/_layout/report'
      path: '/report'
      fullPath: '/report'
      preLoaderRoute: typeof LayoutReportImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/terms': {
      id: '/_layout/terms'
      path: '/terms'
      fullPath: '/terms'
      preLoaderRoute: typeof LayoutTermsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/network/locations': {
      id: '/_layout/network/locations'
      path: '/network/locations'
      fullPath: '/network/locations'
      preLoaderRoute: typeof LayoutNetworkLocationsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/network/proxy-types': {
      id: '/_layout/network/proxy-types'
      path: '/network/proxy-types'
      fullPath: '/network/proxy-types'
      preLoaderRoute: typeof LayoutNetworkProxyTypesImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/network/security': {
      id: '/_layout/network/security'
      path: '/network/security'
      fullPath: '/network/security'
      preLoaderRoute: typeof LayoutNetworkSecurityImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/network/status': {
      id: '/_layout/network/status'
      path: '/network/status'
      fullPath: '/network/status'
      preLoaderRoute: typeof LayoutNetworkStatusImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/resources/web-scraping-guides': {
      id: '/_layout/resources/web-scraping-guides'
      path: '/resources/web-scraping-guides'
      fullPath: '/resources/web-scraping-guides'
      preLoaderRoute: typeof LayoutResourcesWebScrapingGuidesImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/solutions/content-aggregation': {
      id: '/_layout/solutions/content-aggregation'
      path: '/solutions/content-aggregation'
      fullPath: '/solutions/content-aggregation'
      preLoaderRoute: typeof LayoutSolutionsContentAggregationImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/solutions/enterprise': {
      id: '/_layout/solutions/enterprise'
      path: '/solutions/enterprise'
      fullPath: '/solutions/enterprise'
      preLoaderRoute: typeof LayoutSolutionsEnterpriseImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/solutions/lead-generation': {
      id: '/_layout/solutions/lead-generation'
      path: '/solutions/lead-generation'
      fullPath: '/solutions/lead-generation'
      preLoaderRoute: typeof LayoutSolutionsLeadGenerationImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/solutions/market-research': {
      id: '/_layout/solutions/market-research'
      path: '/solutions/market-research'
      fullPath: '/solutions/market-research'
      preLoaderRoute: typeof LayoutSolutionsMarketResearchImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/solutions/price-monitoring': {
      id: '/_layout/solutions/price-monitoring'
      path: '/solutions/price-monitoring'
      fullPath: '/solutions/price-monitoring'
      preLoaderRoute: typeof LayoutSolutionsPriceMonitoringImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/solutions/seo-monitoring': {
      id: '/_layout/solutions/seo-monitoring'
      path: '/solutions/seo-monitoring'
      fullPath: '/solutions/seo-monitoring'
      preLoaderRoute: typeof LayoutSolutionsSeoMonitoringImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/solutions/training-ai': {
      id: '/_layout/solutions/training-ai'
      path: '/solutions/training-ai'
      fullPath: '/solutions/training-ai'
      preLoaderRoute: typeof LayoutSolutionsTrainingAiImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/tools/api-scraper': {
      id: '/_layout/tools/api-scraper'
      path: '/tools/api-scraper'
      fullPath: '/tools/api-scraper'
      preLoaderRoute: typeof LayoutToolsApiScraperImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/tools/html-scraper': {
      id: '/_layout/tools/html-scraper'
      path: '/tools/html-scraper'
      fullPath: '/tools/html-scraper'
      preLoaderRoute: typeof LayoutToolsHtmlScraperImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/tools/proxy-dashboard': {
      id: '/_layout/tools/proxy-dashboard'
      path: '/tools/proxy-dashboard'
      fullPath: '/tools/proxy-dashboard'
      preLoaderRoute: typeof LayoutToolsProxyDashboardImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/tools/scheduler': {
      id: '/_layout/tools/scheduler'
      path: '/tools/scheduler'
      fullPath: '/tools/scheduler'
      preLoaderRoute: typeof LayoutToolsSchedulerImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutComplianceRoute: typeof LayoutComplianceRoute
  LayoutCookieRoute: typeof LayoutCookieRoute
  LayoutDemoRequestRoute: typeof LayoutDemoRequestRoute
  LayoutPrivacyRoute: typeof LayoutPrivacyRoute
  LayoutPrivacyRequestRoute: typeof LayoutPrivacyRequestRoute
  LayoutReportRoute: typeof LayoutReportRoute
  LayoutTermsRoute: typeof LayoutTermsRoute
  LayoutIndexRoute: typeof LayoutIndexRoute
  LayoutNetworkLocationsRoute: typeof LayoutNetworkLocationsRoute
  LayoutNetworkProxyTypesRoute: typeof LayoutNetworkProxyTypesRoute
  LayoutNetworkSecurityRoute: typeof LayoutNetworkSecurityRoute
  LayoutNetworkStatusRoute: typeof LayoutNetworkStatusRoute
  LayoutResourcesWebScrapingGuidesRoute: typeof LayoutResourcesWebScrapingGuidesRoute
  LayoutSolutionsContentAggregationRoute: typeof LayoutSolutionsContentAggregationRoute
  LayoutSolutionsEnterpriseRoute: typeof LayoutSolutionsEnterpriseRoute
  LayoutSolutionsLeadGenerationRoute: typeof LayoutSolutionsLeadGenerationRoute
  LayoutSolutionsMarketResearchRoute: typeof LayoutSolutionsMarketResearchRoute
  LayoutSolutionsPriceMonitoringRoute: typeof LayoutSolutionsPriceMonitoringRoute
  LayoutSolutionsSeoMonitoringRoute: typeof LayoutSolutionsSeoMonitoringRoute
  LayoutSolutionsTrainingAiRoute: typeof LayoutSolutionsTrainingAiRoute
  LayoutToolsApiScraperRoute: typeof LayoutToolsApiScraperRoute
  LayoutToolsHtmlScraperRoute: typeof LayoutToolsHtmlScraperRoute
  LayoutToolsProxyDashboardRoute: typeof LayoutToolsProxyDashboardRoute
  LayoutToolsSchedulerRoute: typeof LayoutToolsSchedulerRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutComplianceRoute: LayoutComplianceRoute,
  LayoutCookieRoute: LayoutCookieRoute,
  LayoutDemoRequestRoute: LayoutDemoRequestRoute,
  LayoutPrivacyRoute: LayoutPrivacyRoute,
  LayoutPrivacyRequestRoute: LayoutPrivacyRequestRoute,
  LayoutReportRoute: LayoutReportRoute,
  LayoutTermsRoute: LayoutTermsRoute,
  LayoutIndexRoute: LayoutIndexRoute,
  LayoutNetworkLocationsRoute: LayoutNetworkLocationsRoute,
  LayoutNetworkProxyTypesRoute: LayoutNetworkProxyTypesRoute,
  LayoutNetworkSecurityRoute: LayoutNetworkSecurityRoute,
  LayoutNetworkStatusRoute: LayoutNetworkStatusRoute,
  LayoutResourcesWebScrapingGuidesRoute: LayoutResourcesWebScrapingGuidesRoute,
  LayoutSolutionsContentAggregationRoute:
    LayoutSolutionsContentAggregationRoute,
  LayoutSolutionsEnterpriseRoute: LayoutSolutionsEnterpriseRoute,
  LayoutSolutionsLeadGenerationRoute: LayoutSolutionsLeadGenerationRoute,
  LayoutSolutionsMarketResearchRoute: LayoutSolutionsMarketResearchRoute,
  LayoutSolutionsPriceMonitoringRoute: LayoutSolutionsPriceMonitoringRoute,
  LayoutSolutionsSeoMonitoringRoute: LayoutSolutionsSeoMonitoringRoute,
  LayoutSolutionsTrainingAiRoute: LayoutSolutionsTrainingAiRoute,
  LayoutToolsApiScraperRoute: LayoutToolsApiScraperRoute,
  LayoutToolsHtmlScraperRoute: LayoutToolsHtmlScraperRoute,
  LayoutToolsProxyDashboardRoute: LayoutToolsProxyDashboardRoute,
  LayoutToolsSchedulerRoute: LayoutToolsSchedulerRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/compliance': typeof LayoutComplianceRoute
  '/cookie': typeof LayoutCookieRoute
  '/demo-request': typeof LayoutDemoRequestRoute
  '/privacy': typeof LayoutPrivacyRoute
  '/privacy-request': typeof LayoutPrivacyRequestRoute
  '/report': typeof LayoutReportRoute
  '/terms': typeof LayoutTermsRoute
  '/': typeof LayoutIndexRoute
  '/network/locations': typeof LayoutNetworkLocationsRoute
  '/network/proxy-types': typeof LayoutNetworkProxyTypesRoute
  '/network/security': typeof LayoutNetworkSecurityRoute
  '/network/status': typeof LayoutNetworkStatusRoute
  '/resources/web-scraping-guides': typeof LayoutResourcesWebScrapingGuidesRoute
  '/solutions/content-aggregation': typeof LayoutSolutionsContentAggregationRoute
  '/solutions/enterprise': typeof LayoutSolutionsEnterpriseRoute
  '/solutions/lead-generation': typeof LayoutSolutionsLeadGenerationRoute
  '/solutions/market-research': typeof LayoutSolutionsMarketResearchRoute
  '/solutions/price-monitoring': typeof LayoutSolutionsPriceMonitoringRoute
  '/solutions/seo-monitoring': typeof LayoutSolutionsSeoMonitoringRoute
  '/solutions/training-ai': typeof LayoutSolutionsTrainingAiRoute
  '/tools/api-scraper': typeof LayoutToolsApiScraperRoute
  '/tools/html-scraper': typeof LayoutToolsHtmlScraperRoute
  '/tools/proxy-dashboard': typeof LayoutToolsProxyDashboardRoute
  '/tools/scheduler': typeof LayoutToolsSchedulerRoute
}

export interface FileRoutesByTo {
  '/compliance': typeof LayoutComplianceRoute
  '/cookie': typeof LayoutCookieRoute
  '/demo-request': typeof LayoutDemoRequestRoute
  '/privacy': typeof LayoutPrivacyRoute
  '/privacy-request': typeof LayoutPrivacyRequestRoute
  '/report': typeof LayoutReportRoute
  '/terms': typeof LayoutTermsRoute
  '/': typeof LayoutIndexRoute
  '/network/locations': typeof LayoutNetworkLocationsRoute
  '/network/proxy-types': typeof LayoutNetworkProxyTypesRoute
  '/network/security': typeof LayoutNetworkSecurityRoute
  '/network/status': typeof LayoutNetworkStatusRoute
  '/resources/web-scraping-guides': typeof LayoutResourcesWebScrapingGuidesRoute
  '/solutions/content-aggregation': typeof LayoutSolutionsContentAggregationRoute
  '/solutions/enterprise': typeof LayoutSolutionsEnterpriseRoute
  '/solutions/lead-generation': typeof LayoutSolutionsLeadGenerationRoute
  '/solutions/market-research': typeof LayoutSolutionsMarketResearchRoute
  '/solutions/price-monitoring': typeof LayoutSolutionsPriceMonitoringRoute
  '/solutions/seo-monitoring': typeof LayoutSolutionsSeoMonitoringRoute
  '/solutions/training-ai': typeof LayoutSolutionsTrainingAiRoute
  '/tools/api-scraper': typeof LayoutToolsApiScraperRoute
  '/tools/html-scraper': typeof LayoutToolsHtmlScraperRoute
  '/tools/proxy-dashboard': typeof LayoutToolsProxyDashboardRoute
  '/tools/scheduler': typeof LayoutToolsSchedulerRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/compliance': typeof LayoutComplianceRoute
  '/_layout/cookie': typeof LayoutCookieRoute
  '/_layout/demo-request': typeof LayoutDemoRequestRoute
  '/_layout/privacy': typeof LayoutPrivacyRoute
  '/_layout/privacy-request': typeof LayoutPrivacyRequestRoute
  '/_layout/report': typeof LayoutReportRoute
  '/_layout/terms': typeof LayoutTermsRoute
  '/_layout/': typeof LayoutIndexRoute
  '/_layout/network/locations': typeof LayoutNetworkLocationsRoute
  '/_layout/network/proxy-types': typeof LayoutNetworkProxyTypesRoute
  '/_layout/network/security': typeof LayoutNetworkSecurityRoute
  '/_layout/network/status': typeof LayoutNetworkStatusRoute
  '/_layout/resources/web-scraping-guides': typeof LayoutResourcesWebScrapingGuidesRoute
  '/_layout/solutions/content-aggregation': typeof LayoutSolutionsContentAggregationRoute
  '/_layout/solutions/enterprise': typeof LayoutSolutionsEnterpriseRoute
  '/_layout/solutions/lead-generation': typeof LayoutSolutionsLeadGenerationRoute
  '/_layout/solutions/market-research': typeof LayoutSolutionsMarketResearchRoute
  '/_layout/solutions/price-monitoring': typeof LayoutSolutionsPriceMonitoringRoute
  '/_layout/solutions/seo-monitoring': typeof LayoutSolutionsSeoMonitoringRoute
  '/_layout/solutions/training-ai': typeof LayoutSolutionsTrainingAiRoute
  '/_layout/tools/api-scraper': typeof LayoutToolsApiScraperRoute
  '/_layout/tools/html-scraper': typeof LayoutToolsHtmlScraperRoute
  '/_layout/tools/proxy-dashboard': typeof LayoutToolsProxyDashboardRoute
  '/_layout/tools/scheduler': typeof LayoutToolsSchedulerRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/compliance'
    | '/cookie'
    | '/demo-request'
    | '/privacy'
    | '/privacy-request'
    | '/report'
    | '/terms'
    | '/'
    | '/network/locations'
    | '/network/proxy-types'
    | '/network/security'
    | '/network/status'
    | '/resources/web-scraping-guides'
    | '/solutions/content-aggregation'
    | '/solutions/enterprise'
    | '/solutions/lead-generation'
    | '/solutions/market-research'
    | '/solutions/price-monitoring'
    | '/solutions/seo-monitoring'
    | '/solutions/training-ai'
    | '/tools/api-scraper'
    | '/tools/html-scraper'
    | '/tools/proxy-dashboard'
    | '/tools/scheduler'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/compliance'
    | '/cookie'
    | '/demo-request'
    | '/privacy'
    | '/privacy-request'
    | '/report'
    | '/terms'
    | '/'
    | '/network/locations'
    | '/network/proxy-types'
    | '/network/security'
    | '/network/status'
    | '/resources/web-scraping-guides'
    | '/solutions/content-aggregation'
    | '/solutions/enterprise'
    | '/solutions/lead-generation'
    | '/solutions/market-research'
    | '/solutions/price-monitoring'
    | '/solutions/seo-monitoring'
    | '/solutions/training-ai'
    | '/tools/api-scraper'
    | '/tools/html-scraper'
    | '/tools/proxy-dashboard'
    | '/tools/scheduler'
  id:
    | '__root__'
    | '/_layout'
    | '/_layout/compliance'
    | '/_layout/cookie'
    | '/_layout/demo-request'
    | '/_layout/privacy'
    | '/_layout/privacy-request'
    | '/_layout/report'
    | '/_layout/terms'
    | '/_layout/'
    | '/_layout/network/locations'
    | '/_layout/network/proxy-types'
    | '/_layout/network/security'
    | '/_layout/network/status'
    | '/_layout/resources/web-scraping-guides'
    | '/_layout/solutions/content-aggregation'
    | '/_layout/solutions/enterprise'
    | '/_layout/solutions/lead-generation'
    | '/_layout/solutions/market-research'
    | '/_layout/solutions/price-monitoring'
    | '/_layout/solutions/seo-monitoring'
    | '/_layout/solutions/training-ai'
    | '/_layout/tools/api-scraper'
    | '/_layout/tools/html-scraper'
    | '/_layout/tools/proxy-dashboard'
    | '/_layout/tools/scheduler'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/compliance",
        "/_layout/cookie",
        "/_layout/demo-request",
        "/_layout/privacy",
        "/_layout/privacy-request",
        "/_layout/report",
        "/_layout/terms",
        "/_layout/",
        "/_layout/network/locations",
        "/_layout/network/proxy-types",
        "/_layout/network/security",
        "/_layout/network/status",
        "/_layout/resources/web-scraping-guides",
        "/_layout/solutions/content-aggregation",
        "/_layout/solutions/enterprise",
        "/_layout/solutions/lead-generation",
        "/_layout/solutions/market-research",
        "/_layout/solutions/price-monitoring",
        "/_layout/solutions/seo-monitoring",
        "/_layout/solutions/training-ai",
        "/_layout/tools/api-scraper",
        "/_layout/tools/html-scraper",
        "/_layout/tools/proxy-dashboard",
        "/_layout/tools/scheduler"
      ]
    },
    "/_layout/compliance": {
      "filePath": "_layout/compliance.tsx",
      "parent": "/_layout"
    },
    "/_layout/cookie": {
      "filePath": "_layout/cookie.tsx",
      "parent": "/_layout"
    },
    "/_layout/demo-request": {
      "filePath": "_layout/demo-request.tsx",
      "parent": "/_layout"
    },
    "/_layout/privacy": {
      "filePath": "_layout/privacy.tsx",
      "parent": "/_layout"
    },
    "/_layout/privacy-request": {
      "filePath": "_layout/privacy-request.tsx",
      "parent": "/_layout"
    },
    "/_layout/report": {
      "filePath": "_layout/report.tsx",
      "parent": "/_layout"
    },
    "/_layout/terms": {
      "filePath": "_layout/terms.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/network/locations": {
      "filePath": "_layout/network/locations.tsx",
      "parent": "/_layout"
    },
    "/_layout/network/proxy-types": {
      "filePath": "_layout/network/proxy-types.tsx",
      "parent": "/_layout"
    },
    "/_layout/network/security": {
      "filePath": "_layout/network/security.tsx",
      "parent": "/_layout"
    },
    "/_layout/network/status": {
      "filePath": "_layout/network/status.tsx",
      "parent": "/_layout"
    },
    "/_layout/resources/web-scraping-guides": {
      "filePath": "_layout/resources/web-scraping-guides.tsx",
      "parent": "/_layout"
    },
    "/_layout/solutions/content-aggregation": {
      "filePath": "_layout/solutions/content-aggregation.tsx",
      "parent": "/_layout"
    },
    "/_layout/solutions/enterprise": {
      "filePath": "_layout/solutions/enterprise.tsx",
      "parent": "/_layout"
    },
    "/_layout/solutions/lead-generation": {
      "filePath": "_layout/solutions/lead-generation.tsx",
      "parent": "/_layout"
    },
    "/_layout/solutions/market-research": {
      "filePath": "_layout/solutions/market-research.tsx",
      "parent": "/_layout"
    },
    "/_layout/solutions/price-monitoring": {
      "filePath": "_layout/solutions/price-monitoring.tsx",
      "parent": "/_layout"
    },
    "/_layout/solutions/seo-monitoring": {
      "filePath": "_layout/solutions/seo-monitoring.tsx",
      "parent": "/_layout"
    },
    "/_layout/solutions/training-ai": {
      "filePath": "_layout/solutions/training-ai.tsx",
      "parent": "/_layout"
    },
    "/_layout/tools/api-scraper": {
      "filePath": "_layout/tools/api-scraper.tsx",
      "parent": "/_layout"
    },
    "/_layout/tools/html-scraper": {
      "filePath": "_layout/tools/html-scraper.tsx",
      "parent": "/_layout"
    },
    "/_layout/tools/proxy-dashboard": {
      "filePath": "_layout/tools/proxy-dashboard.tsx",
      "parent": "/_layout"
    },
    "/_layout/tools/scheduler": {
      "filePath": "_layout/tools/scheduler.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
