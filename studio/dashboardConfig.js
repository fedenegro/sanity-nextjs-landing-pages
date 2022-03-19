export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6235d9361ce57609f6865b64',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tu8j6mc1',
                  apiId: 'd9de9f4c-ed91-4a2b-a3b0-0821169f6622'
                },
                {
                  buildHookId: '6235d9375781b77da1da50db',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-sdu2gfnu',
                  apiId: '23476b01-0aaa-4515-bf86-046bbb8cf79b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fedenegro/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-sdu2gfnu.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
