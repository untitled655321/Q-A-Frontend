/**
 * Angular Router has problem with concatenated variables when building AOT bundle.
 * Working solution is to create variables with all the paths rather than importing from other modules and concatenating.
 * */

export const AppRoutes = {
  DEFAULT: 'offers',
  AUTH: 'auth',
  LOGIN: 'login',
  WELCOME: 'welcome',
  DASHBOARD: 'dashboard',
  REGISTER: 'register',
  HOME: ''
};

export const AppRouterLinks = {
  DEFAULT: [AppRoutes.DEFAULT],
  LOGIN: [AppRoutes.AUTH, AppRoutes.LOGIN],
};

export const AppRouterUrls = {
  DEFAULT: `/${AppRoutes.DEFAULT}`,
  LOGIN: `/${AppRoutes.AUTH}/${AppRoutes.LOGIN}`,
  DASHBOARD: `/${AppRoutes.DASHBOARD}`,
  HOME: `/${AppRoutes.HOME}`
};
