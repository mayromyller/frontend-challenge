import { useWebSettings } from '@/hooks'
import { MenuIcon } from './icons/menuIcon'

export function Header() {
  const { webSettings } = useWebSettings()

  const bgColor = webSettings.navBackgroundColour ?? '#111'
  const textContrast = webSettings.backgroundColour ?? 'white'

  return (
    <nav style={{ backgroundColor: bgColor }} className={`w-full`}>
      <div className="hidden py-[18px] px-6  max-[900px]:flex relative">
        <h4 className="font-medium text-lg text-center w-full text-white">
          Menu
        </h4>
        <button className="hidden h-7 w-7 py-1 px-2 bg-transparent max-[899px]:flex items-center justify-center justify-self-end">
          <MenuIcon />
        </button>
      </div>

      <ul className="hidden min-[900px]:flex items-center justify-center  h-[52px]">
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
