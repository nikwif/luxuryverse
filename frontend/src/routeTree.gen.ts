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
import { Route as LayoutPrivacyRequestImport } from './routes/_layout/privacy-request'
import { Route as LayoutPrivacyImport } from './routes/_layout/privacy'
import { Route as LayoutJoinImport } from './routes/_layout/join'
import { Route as LayoutDoNotSellImport } from './routes/_layout/do-not-sell'
import { Route as LayoutDemoRequestImport } from './routes/_layout/demo-request'
import { Route as LayoutCookieImport } from './routes/_layout/cookie'
import { Route as LayoutResourcesWebScrapingGuidesImport } from './routes/_layout/resources/web-scraping-guides'
import { Route as LayoutResourcesSupportCenterImport } from './routes/_layout/resources/support-center'
import { Route as LayoutResourcesFaqImport } from './routes/_layout/resources/faq'
import { Route as LayoutResourcesCodeExamplesImport } from './routes/_layout/resources/code-examples'
import { Route as LayoutResourcesBlogImport } from './routes/_layout/resources/blog'
import { Route as LayoutResourcesBlogsPathImport } from './routes/_layout/resources/blogs/$path'

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

const LayoutJoinRoute = LayoutJoinImport.update({
  id: '/join',
  path: '/join',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutDoNotSellRoute = LayoutDoNotSellImport.update({
  id: '/do-not-sell',
  path: '/do-not-sell',
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

const LayoutResourcesWebScrapingGuidesRoute =
  LayoutResourcesWebScrapingGuidesImport.update({
    id: '/resources/web-scraping-guides',
    path: '/resources/web-scraping-guides',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutResourcesSupportCenterRoute =
  LayoutResourcesSupportCenterImport.update({
    id: '/resources/support-center',
    path: '/resources/support-center',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutResourcesFaqRoute = LayoutResourcesFaqImport.update({
  id: '/resources/faq',
  path: '/resources/faq',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutResourcesCodeExamplesRoute =
  LayoutResourcesCodeExamplesImport.update({
    id: '/resources/code-examples',
    path: '/resources/code-examples',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutResourcesBlogRoute = LayoutResourcesBlogImport.update({
  id: '/resources/blog',
  path: '/resources/blog',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutResourcesBlogsPathRoute = LayoutResourcesBlogsPathImport.update({
  id: '/resources/blogs/$path',
  path: '/resources/blogs/$path',
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
    '/_layout/do-not-sell': {
      id: '/_layout/do-not-sell'
      path: '/do-not-sell'
      fullPath: '/do-not-sell'
      preLoaderRoute: typeof LayoutDoNotSellImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/join': {
      id: '/_layout/join'
      path: '/join'
      fullPath: '/join'
      preLoaderRoute: typeof LayoutJoinImport
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
    '/_layout/resources/blog': {
      id: '/_layout/resources/blog'
      path: '/resources/blog'
      fullPath: '/resources/blog'
      preLoaderRoute: typeof LayoutResourcesBlogImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/resources/code-examples': {
      id: '/_layout/resources/code-examples'
      path: '/resources/code-examples'
      fullPath: '/resources/code-examples'
      preLoaderRoute: typeof LayoutResourcesCodeExamplesImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/resources/faq': {
      id: '/_layout/resources/faq'
      path: '/resources/faq'
      fullPath: '/resources/faq'
      preLoaderRoute: typeof LayoutResourcesFaqImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/resources/support-center': {
      id: '/_layout/resources/support-center'
      path: '/resources/support-center'
      fullPath: '/resources/support-center'
      preLoaderRoute: typeof LayoutResourcesSupportCenterImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/resources/web-scraping-guides': {
      id: '/_layout/resources/web-scraping-guides'
      path: '/resources/web-scraping-guides'
      fullPath: '/resources/web-scraping-guides'
      preLoaderRoute: typeof LayoutResourcesWebScrapingGuidesImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/resources/blogs/$path': {
      id: '/_layout/resources/blogs/$path'
      path: '/resources/blogs/$path'
      fullPath: '/resources/blogs/$path'
      preLoaderRoute: typeof LayoutResourcesBlogsPathImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutCookieRoute: typeof LayoutCookieRoute
  LayoutDemoRequestRoute: typeof LayoutDemoRequestRoute
  LayoutDoNotSellRoute: typeof LayoutDoNotSellRoute
  LayoutJoinRoute: typeof LayoutJoinRoute
  LayoutPrivacyRoute: typeof LayoutPrivacyRoute
  LayoutPrivacyRequestRoute: typeof LayoutPrivacyRequestRoute
  LayoutTermsRoute: typeof LayoutTermsRoute
  LayoutIndexRoute: typeof LayoutIndexRoute
  LayoutResourcesBlogRoute: typeof LayoutResourcesBlogRoute
  LayoutResourcesCodeExamplesRoute: typeof LayoutResourcesCodeExamplesRoute
  LayoutResourcesFaqRoute: typeof LayoutResourcesFaqRoute
  LayoutResourcesSupportCenterRoute: typeof LayoutResourcesSupportCenterRoute
  LayoutResourcesWebScrapingGuidesRoute: typeof LayoutResourcesWebScrapingGuidesRoute
  LayoutResourcesBlogsPathRoute: typeof LayoutResourcesBlogsPathRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutCookieRoute: LayoutCookieRoute,
  LayoutDemoRequestRoute: LayoutDemoRequestRoute,
  LayoutDoNotSellRoute: LayoutDoNotSellRoute,
  LayoutJoinRoute: LayoutJoinRoute,
  LayoutPrivacyRoute: LayoutPrivacyRoute,
  LayoutPrivacyRequestRoute: LayoutPrivacyRequestRoute,
  LayoutTermsRoute: LayoutTermsRoute,
  LayoutIndexRoute: LayoutIndexRoute,
  LayoutResourcesBlogRoute: LayoutResourcesBlogRoute,
  LayoutResourcesCodeExamplesRoute: LayoutResourcesCodeExamplesRoute,
  LayoutResourcesFaqRoute: LayoutResourcesFaqRoute,
  LayoutResourcesSupportCenterRoute: LayoutResourcesSupportCenterRoute,
  LayoutResourcesWebScrapingGuidesRoute: LayoutResourcesWebScrapingGuidesRoute,
  LayoutResourcesBlogsPathRoute: LayoutResourcesBlogsPathRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/cookie': typeof LayoutCookieRoute
  '/demo-request': typeof LayoutDemoRequestRoute
  '/do-not-sell': typeof LayoutDoNotSellRoute
  '/join': typeof LayoutJoinRoute
  '/privacy': typeof LayoutPrivacyRoute
  '/privacy-request': typeof LayoutPrivacyRequestRoute
  '/terms': typeof LayoutTermsRoute
  '/': typeof LayoutIndexRoute
  '/resources/blog': typeof LayoutResourcesBlogRoute
  '/resources/code-examples': typeof LayoutResourcesCodeExamplesRoute
  '/resources/faq': typeof LayoutResourcesFaqRoute
  '/resources/support-center': typeof LayoutResourcesSupportCenterRoute
  '/resources/web-scraping-guides': typeof LayoutResourcesWebScrapingGuidesRoute
  '/resources/blogs/$path': typeof LayoutResourcesBlogsPathRoute
}

export interface FileRoutesByTo {
  '/cookie': typeof LayoutCookieRoute
  '/demo-request': typeof LayoutDemoRequestRoute
  '/do-not-sell': typeof LayoutDoNotSellRoute
  '/join': typeof LayoutJoinRoute
  '/privacy': typeof LayoutPrivacyRoute
  '/privacy-request': typeof LayoutPrivacyRequestRoute
  '/terms': typeof LayoutTermsRoute
  '/': typeof LayoutIndexRoute
  '/resources/blog': typeof LayoutResourcesBlogRoute
  '/resources/code-examples': typeof LayoutResourcesCodeExamplesRoute
  '/resources/faq': typeof LayoutResourcesFaqRoute
  '/resources/support-center': typeof LayoutResourcesSupportCenterRoute
  '/resources/web-scraping-guides': typeof LayoutResourcesWebScrapingGuidesRoute
  '/resources/blogs/$path': typeof LayoutResourcesBlogsPathRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/cookie': typeof LayoutCookieRoute
  '/_layout/demo-request': typeof LayoutDemoRequestRoute
  '/_layout/do-not-sell': typeof LayoutDoNotSellRoute
  '/_layout/join': typeof LayoutJoinRoute
  '/_layout/privacy': typeof LayoutPrivacyRoute
  '/_layout/privacy-request': typeof LayoutPrivacyRequestRoute
  '/_layout/terms': typeof LayoutTermsRoute
  '/_layout/': typeof LayoutIndexRoute
  '/_layout/resources/blog': typeof LayoutResourcesBlogRoute
  '/_layout/resources/code-examples': typeof LayoutResourcesCodeExamplesRoute
  '/_layout/resources/faq': typeof LayoutResourcesFaqRoute
  '/_layout/resources/support-center': typeof LayoutResourcesSupportCenterRoute
  '/_layout/resources/web-scraping-guides': typeof LayoutResourcesWebScrapingGuidesRoute
  '/_layout/resources/blogs/$path': typeof LayoutResourcesBlogsPathRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/cookie'
    | '/demo-request'
    | '/do-not-sell'
    | '/join'
    | '/privacy'
    | '/privacy-request'
    | '/terms'
    | '/'
    | '/resources/blog'
    | '/resources/code-examples'
    | '/resources/faq'
    | '/resources/support-center'
    | '/resources/web-scraping-guides'
    | '/resources/blogs/$path'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/cookie'
    | '/demo-request'
    | '/do-not-sell'
    | '/join'
    | '/privacy'
    | '/privacy-request'
    | '/terms'
    | '/'
    | '/resources/blog'
    | '/resources/code-examples'
    | '/resources/faq'
    | '/resources/support-center'
    | '/resources/web-scraping-guides'
    | '/resources/blogs/$path'
  id:
    | '__root__'
    | '/_layout'
    | '/_layout/cookie'
    | '/_layout/demo-request'
    | '/_layout/do-not-sell'
    | '/_layout/join'
    | '/_layout/privacy'
    | '/_layout/privacy-request'
    | '/_layout/terms'
    | '/_layout/'
    | '/_layout/resources/blog'
    | '/_layout/resources/code-examples'
    | '/_layout/resources/faq'
    | '/_layout/resources/support-center'
    | '/_layout/resources/web-scraping-guides'
    | '/_layout/resources/blogs/$path'
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
        "/_layout/cookie",
        "/_layout/demo-request",
        "/_layout/do-not-sell",
        "/_layout/join",
        "/_layout/privacy",
        "/_layout/privacy-request",
        "/_layout/terms",
        "/_layout/",
        "/_layout/resources/blog",
        "/_layout/resources/code-examples",
        "/_layout/resources/faq",
        "/_layout/resources/support-center",
        "/_layout/resources/web-scraping-guides",
        "/_layout/resources/blogs/$path"
      ]
    },
    "/_layout/cookie": {
      "filePath": "_layout/cookie.tsx",
      "parent": "/_layout"
    },
    "/_layout/demo-request": {
      "filePath": "_layout/demo-request.tsx",
      "parent": "/_layout"
    },
    "/_layout/do-not-sell": {
      "filePath": "_layout/do-not-sell.tsx",
      "parent": "/_layout"
    },
    "/_layout/join": {
      "filePath": "_layout/join.tsx",
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
    "/_layout/terms": {
      "filePath": "_layout/terms.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/resources/blog": {
      "filePath": "_layout/resources/blog.tsx",
      "parent": "/_layout"
    },
    "/_layout/resources/code-examples": {
      "filePath": "_layout/resources/code-examples.tsx",
      "parent": "/_layout"
    },
    "/_layout/resources/faq": {
      "filePath": "_layout/resources/faq.tsx",
      "parent": "/_layout"
    },
    "/_layout/resources/support-center": {
      "filePath": "_layout/resources/support-center.tsx",
      "parent": "/_layout"
    },
    "/_layout/resources/web-scraping-guides": {
      "filePath": "_layout/resources/web-scraping-guides.tsx",
      "parent": "/_layout"
    },
    "/_layout/resources/blogs/$path": {
      "filePath": "_layout/resources/blogs/$path.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
