import tqcaward from '../img/webp/award.webp'
import taipeiaward from '../img/webp/race.webp'
import ccpaward from '../img/webp/awscc.webp'
import micaward from '../img/webp/microsoft.webp'

const callouts = [
  {
    name: '類型：程式競賽 2022年7月',
    description: 'TQC Python 夏季競行曲 第三名 ',
    imageSrc: tqcaward,
    href: "https://i.imgur.com/8JwtPoL.png",
    imageAlt:"TQC Python 夏季競行曲 第三名",
  },
  {
    name:  '類型：團體競賽 2022 1月',
    description: '顯示科技怎麼用？我的課程我來定!   佳作',
    imageSrc: taipeiaward,
    href:'https://i.imgur.com/VxG9XcY.png',
    imageAlt:"顯示科技怎麼用？我的課程我來定!   佳作",
  },
  {
    name:  '類型：AWS 國際認證',
    description: 'AWS Certified Cloud Practitioner',
    imageSrc: ccpaward ,
    href:'https://www.credly.com/badges/28c57016-5ae1-462f-a98a-6ba57c576c43/public_url',
    imageAlt:"AWS 國際認證",
  },
  {
    name:  '類型：Microsoft 國際認證',
    description: 'Microsoft AI900',
    imageSrc: micaward,
    href:'https://i.imgur.com/eCoXeK4.png',
    imageAlt:"Microsoft 國際認證",
  },
  



]

export default function Example() {
  return (
    <div className="bg-gray-100">
  
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="Certified">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        
            <h2 className="text-2xl font-bold text-gray-900">證照</h2>

            <div className="mt-10 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-24 lg:space-y-0 ">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-full w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:-w-4 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-8 text-lg text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-xl font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
      
        </div>
      </div>
    </div>      
      

  )
}
