export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f74ebd212c34800d8bbfcf4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-treywftr',
                  apiId: '5c093be4-6cad-453d-b337-ab02465a1f20'
                },
                {
                  buildHookId: '5f74ebd3d3c9a4012163d1f0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nvpecoj2',
                  apiId: 'e038d940-f39b-4d72-92dc-305b947eb77d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/der-bingle/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nvpecoj2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
