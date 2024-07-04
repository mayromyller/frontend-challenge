import { useWebSettings } from '@/hooks'

export function Header() {
  const { webSettings } = useWebSettings()

  const bgColor = webSettings.navBackgroundColour
  const textContrast = webSettings.backgroundColour

  return (
    <nav style={{ backgroundColor: bgColor }} className={`w-full`}>
      <ul className="flex items-center justify-center  h-[52px]">
        <li className="h-[52px] flex items-center border-b-[5px] border-b-white w-[232px] justify-center">
          <a
            href="#"
            style={{ color: textContrast }}
            className={`uppercase text-xl`}
          >
            Menu
          </a>
        </li>
        <li className={`h-[52px] flex items-center  w-[232px] justify-center`}>
          <a
            href="#"
            style={{ color: textContrast }}
            className={`uppercase text-xl`}
          >
            Entrar
          </a>
        </li>
        <li className={`h-[52px] flex items-center  w-[232px] justify-center`}>
          <a
            href="#"
            style={{ color: textContrast }}
            className={`uppercase text-xl`}
          >
            Contato
          </a>
        </li>
      </ul>

      <div className="h-[150px] w-full">
        <img
          src={webSettings.bannerImage}
          alt=""
          className={`object-cover w-full h-[150px] `}
        />
      </div>
    </nav>
  )
}
