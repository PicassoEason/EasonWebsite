import Arduino from '../img/webp/arduino.webp'
import Flow from '../img/webp/flower.webp'
import Com from '../img/webp/computer.webp'
import Mount from '../img/webp/mountain.webp'
import free from '../img/webp/free.webp'
import Car from '../img/webp/car.webp'
import Myself from '../img/webp/mysqlf.webp'



export default function center() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 md:py-48 xl:py-52  ">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 ">
            <div className="sm:max-w-lg">
           
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                關於易陞
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                <strong>
                數字藝術家
                </strong> 
                <br></br>
                <br></br>
                中科大五專生，喜歡游泳及VR
                <br></br>
                網頁工程師 | 雲端架構師 
                <br></br>
                <br></br>
                技能樹：
                <br></br>
                <br></br>
                <div className="grid grid-cols-12">
                  <i class="fa-brands fa-react"></i>
                  <i class="fa-brands fa-unity"></i>
                  <i class="fa-solid fa-vr-cardboard"></i>
                  <i class="fa-brands fa-raspberry-pi"></i>
                  <i class="fa-brands fa-html5"></i>
                  <i class="fa-brands fa-css3-alt"></i>
                  <i class="fa-brands fa-js"></i>
                  <i class="fa-brands fa-aws"></i>
                </div>
                <br></br>
                <div className="">
                <i class="fa-solid fa-phone"> +886 966-302-596</i>
                </div>
              </p>
            </div>
            
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl sm:max-w-2xl">
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8 sm:space-x-4">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-2 lg:gap-y-10 sm:gap-y-6 md:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-50 lg:opacity-100">
                          <img
                            src={Myself}
                            alt="Myself"
                            className="h-64 w-44 object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Arduino}
                            alt="arduino"
                            className="h-64 w-44 object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Flow}
                            alt="flower"
                            className="h-64 w-44 object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                          src={Com}
                            
                            alt="computer"
                            className="h-64 w-44 object-cover object-center"
                          />
                        </div>
                    
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Mount}
                            alt="mountain"
                            className="h-64 w-44 object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Car}
                            alt="car"
                            className="h-64 w-44 object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={free}
                            alt="free"
                            className="h-64 w-44 object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a
                  href="https://www.linkedin.com/in/yishengwu/"
                  className="inline-block rounded-md border border-transparent bg-emerald-400	 py-3 px-8 text-center font-medium text-black hover:bg-indigo-700"
                >
                  訪問Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  