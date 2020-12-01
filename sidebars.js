module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting started',
      items: [
        'works',
        'install'

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
                'plugin/obs/doc',
                'plugin/obs/reaction',
                'plugin/obs/event'
              ],
            },
            {
              type: 'category',
              label: 'Twitch',
              items: [
                'plugin/twitch/doc',
                'plugin/twitch/reaction',
                'plugin/twitch/event'
              ],
            }
          ],
        }
      ],
    }
  ]
};
