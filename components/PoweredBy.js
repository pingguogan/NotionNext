import { siteConfig } from '@/lib/config'

/**
 * 驱动版权（已隐藏）
 * @returns
 */
export default function PoweredBy(props) {
  // 直接不渲染任何内容
  return null

  // 下面这段不会执行
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'></span>
      <a href='' className='underline justify-start'>
        NotionNext {siteConfig('VERSION')}
      </a>
      .
    </div>
  )
}
