module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting started',
      items: [
        'works',
        'install',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/reaction',
        'api/event',
        {
          type: 'category',
          label: 'Plugin',
          items: [
            {
              type: 'category',
              label: 'OBS',
              items: [
                {
                  type: 'doc',
                  id: 'plugin/obs/doc'
                }, {
                  type: 'doc',
                  id: 'plugin/obs/reaction'
                }, {
                  type: 'doc',
                  id: 'plugin/obs/event'
                }
              ],
            },
            {
              type: 'category',
              label: 'Twitch',
              items: [
                {
                  type: 'doc',
                  id: 'plugin/twitch/doc'
                }, {
                  type: 'doc',
                  id: 'plugin/twitch/reaction'
                }, {
                  type: 'doc',
                  id: 'plugin/twitch/event'
                }
              ],
            }
          ],
        }
      ],
    }
  ]
};
