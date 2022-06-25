export * from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import {ConfigProvider} from 'antd'
import {FC, ReactNode} from 'react'
import 'antd/dist/antd.css'
type Props = {children: ReactNode}
ConfigProvider.config({
  theme: {
    primaryColor: '#5DDEA8',
    infoColor: '#979AA8',
  },
})
export const Provider: FC<Props> = ({children}) => (
  <>
    <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
  </>
)
