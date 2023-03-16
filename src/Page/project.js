import Raspi from '../img/webp/pi.webp' 
import Firevr from '../img/webp/firevr.webp'

const callouts = [
    {
      name: '樹梅派溫溼度感測',
      description: '類型：團體開發',
      imageSrc: Raspi,
      imageAlt: '圖片載入失敗',
      href: 'https://github.com/PicassoEason/PI-GetTH.git',
      alt:"樹梅派溫溼度感測",
    },
    {
      name: '火場VR逃生',
      description:  '類型：團體開發',
      role:'擔任：組長',
      imageSrc: Firevr,
      imageAlt: '圖片載入失敗',
      href: '#',
      alt:"火場VR逃生",
    }

  ]
  
  export default function Example() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="Project">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 xl:py-48">
     
            <h2 className="text-2xl font-bold text-gray-900" >作品集</h2>
  
            <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-10 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-8 text-base text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                  <p className="text-base font-semibold text-gray-900">{callout.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  