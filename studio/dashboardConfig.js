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
                  buildHookId: '5ffc99a5e217d60d4c53e900',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9wbgdn2d',
                  apiId: 'd9de39e5-5e4b-4f97-921c-cd5a32f0eaad'
                },
                {
                  buildHookId: '5ffc99a57f630c10091bd300',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gzw4jxr6',
                  apiId: '00abdec0-ef70-4f7d-a8a3-c0028d90ba09'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robgmerrill/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gzw4jxr6.netlify.app', category: 'apps'}
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
