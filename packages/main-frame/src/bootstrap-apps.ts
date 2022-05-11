/** @format */

import { registerMicroApps, start } from 'qiankun'
import { DEFAULT_APP_CONTAINER } from '@root/const/qiankun'

const getActiveRule = (hash: string) => (location: Location) => location.hash.startsWith(hash)

async function bootstrap() {
  registerMicroApps(
    [
      {
        name: 'app-1',
        activeRule: '#/app-1',
        container: `#${DEFAULT_APP_CONTAINER}`,
        dev_entry: '//localhost:9001',
        prod_entry: 'app-1/',
      },
    ].map(item => ({
      ...item,
      activeRule: getActiveRule(item.activeRule),
      entry: process.env.NODE_ENV === 'production' ? item.prod_entry : item.dev_entry,
    })),
  )

  start()
}

export default bootstrap
