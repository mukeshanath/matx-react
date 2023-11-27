



export const navigations = [
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  // { label: 'PAGES', type: 'label' },
  // {
  //   name: 'Session/Auth',
  //   icon: 'security',
  //   children: [
  //     { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
  //     { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
  //     { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
  //     { name: 'Error', iconText: '404', path: '/session/404' }
  //   ]
  // },
  { label: 'Masters', type: 'label' },
  {
    name: 'Masters',
    icon: 'business',
    badge: { value: '1+', color: 'secondary' },
    children: [
      { name: 'Company', path: '/masters/company', iconText: 'A' },
      { name: 'Form', path: '/material/form', iconText: 'F' },
      { name: 'Table', path: '/material/table', iconText: 'T' }
    ]
  }
  
];
