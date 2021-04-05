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
                  buildHookId: '606ae784f064101da6a32dd9',
                  title: 'Sanity Studio',
                  name: 'ggp-studio',
                  apiId: '037d8972-2faf-41fe-bc89-ecf6feaa65ec'
                },
                {
                  buildHookId: '606ae784d977d3d43db54eeb',
                  title: 'Blog Website',
                  name: 'ggp-web',
                  apiId: '12f51cdf-4150-457d-bd9e-15960525ad36'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ggp-2021/ggp',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://ggp-web.netlify.app', category: 'apps'}
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
