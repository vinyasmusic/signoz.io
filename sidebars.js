// module.exports = {
//   someSidebar: {






//     'getting-started'
//     Deployment: ['deployment/requirement','deployment/docker','deployment/docker_swarm', 'deployment/helm_chart','deployment/troubleshooting'],
//     Overview: ['introduction', 'architecture', 'features','contributing','community','roadmap','faq'],
//     Configuration: ['configuration/deep_storage', 'configuration/retention_period'],
//     Instrumentation: ['instrumentation/overview','instrumentation/python', 'instrumentation/nodejs', 'instrumentation/java', 'instrumentation/golang'],
//     // Features: ['mdx'],
//   },
// };


module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Documentation',
      link: {
        type: 'generated-index',
        title: 'SigNoz Documentation',
        description: 'SigNoz is an open-source Application Performance Monitoring(APM) tool. It helps you monitor applications and troubleshoot problems. With SigNoz, you can monitor metrics for both your application and infrastructure, track user requests across services and set alerts on metrics.',
        slug: '/',
      },
      items: [
        {
          type: 'category',
          label: 'Install SigNoz',
          link: {
            type: 'generated-index',
            title: 'Install SigNoz',
            description: 'To install SigNoz, follow the instructions in the next sections, depending on your environment.',
            slug: '/deploy',
          },
          items: [
            "deployment/docker-standalone",
            "deployment/docker-swarm",
            "deployment/kubernetes",
            'deployment/troubleshooting'
          ],
        },
        {
          label: "Instrumentation",
          type: "category",
          items: [
            'instrumentation/overview',
            'instrumentation/python',
            'instrumentation/fastapi',
            'instrumentation/nodejs',
            'instrumentation/nestjs',
            'instrumentation/java',
            'instrumentation/golang',   
            'instrumentation/dotnet',
            'instrumentation/ruby-on-rails',
          ],
        },
        {
          label: "User Guide",
          type: "category",
          items: [
            'userguide/overview',
            'userguide/metrics-dashboard',
            'userguide/prometheus-metrics',
            'userguide/alerts-management',
            'userguide/retention-period',
            'userguide/service-map',
            'userguide/trace-details',
          ],
        },
        {
          label: "Tutorial",
          type: "category",
          items: [
            'tutorial/jvm-metrics',
            'tutorial/kubernetes-infra-metrics',
          ],
        },
        {
          id: "architecture",
          type: "doc",
        },
        {
          id: "contributing",
          type: "doc",
        },
        {
          id: "community",
          type: "doc",
        },
        {
          id: "roadmap",
          type: "doc",
        },
        {
          id: "faq",
          type: "doc",
        },
      ],
    },
    /*
    {
      id: "getting-started",
      type: "doc",
    },*/
    /*
    {
      label: "Install SigNoz",
      type: "category",
      items: [
        "deployment/requirement",
        'deployment/docker',
        'deployment/docker_swarm',
        'deployment/helm_chart',
        'deployment/troubleshooting'
      ],
    },
    */
    
  
    // {
    //   label: "Configuration",
    //   type: "category",
    //   items: [
    //     'configuration/deep_storage', 
    //     'configuration/retention_period',
    //   ],
    // },
  ]
}